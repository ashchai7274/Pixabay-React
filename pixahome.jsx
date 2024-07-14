import pixahome from "../styles/pixahome.css"

const PixaHome = () => {
    return ( 
        <div className="home">
          <div className="img">
          <img  style={{width:"1000px", height:"300px"}}src="https://cdn.pixabay.com/index/2024/04/02/14-56-33-136_1920x550.jpg" alt="" />
          </div>

           <div className="items">
           <h1>Stunning royalty-free images & royalty-free stock</h1>
            <p>Over 4.4 million+ high quality stock images, videos and music shared by our talented community.</p>
           </div>
        </div>

     );
}
 
export default PixaHome;