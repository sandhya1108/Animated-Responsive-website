import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
function HomePage(){
    return(
        <>
        <section>
            <div className="container">
            <div className='row'>
                <div className='col-md-8 col-sm-12 order-lg-1 order-2 order-md-1 justify-content'>
                    <div className="hc">
                    <h2>Hii welcome to sandhya project</h2>
                    <button className='btn b'>Get Start</button>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12  order-lg-2 order-1 order-md-2 hustify-content hii'>
                    <img src="rose.jpg" className="hi"></img>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
function Home(){
    return(
      <>
      <HomePage></HomePage>
      </>
    )
  }
export default Home;