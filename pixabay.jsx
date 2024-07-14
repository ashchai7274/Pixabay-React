import { useEffect, useState } from "react";
import pixabay from "../styles/pixabay.css"

const Pixabay = () => {
    let[state,setState] = useState([])
    let[search,setSearch] = useState("")

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=41646270-601dc75153394206edf190a48&q=${search}&image_type=photo`)
        .then(res=>res.json())
        .then(data=>setState(data.hits))
    })

    return ( 
        <div className="pixa">
            <input type="text"  onChange={e=>setSearch(e.target.value)} placeholder="search for all images on pixabay"/>
            <section>
                {
                    state.map(x=>{
                        return(
                            <>
                            <img src={x.previewURL} alt="" />
                            </>
                            
                        )
                    })
                }
            </section>

        </div>
     );
}
 
export default Pixabay;