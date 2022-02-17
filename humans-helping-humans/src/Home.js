import "./assets/brain.png"

function Home() {

    return (
        <div>
            <div>
            <h1>Come Share With Us</h1>
            </div>
            <img className="brain"
                src={require('./assets/brain.png')} alt='brain'/>
            <div>
            <h3>Welcome to an exercise in gratitude and boost your mood!</h3>
            </div>
        </div>
    )
}

export default Home