import Canvas from './CanvasComponent';

function Home(){
    return (
        <div className="container">
            <div className="home">
            <div className="intro">
                <p >Hi,</p>
                <p>I am, Narindra,</p>
                
                <p >A full-stack developer</p>
            </div>
            <div className="canvas">
                <Canvas/>
            </div>
        </div>
        </div>
    );
}

export default Home;