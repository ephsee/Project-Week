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
            <h3>Welcome to an exercise in mindfulness and boost your mood!</h3>
            <img className="picture2 filter" src="https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg" alt='mindful'/>
            </div>
        </div>
    )
}

export default Home