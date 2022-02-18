import "./assets/brain.png"

function Home() {

    return (
        <div>
            <div>
            <h1 className='funText'>Come Share With Us</h1>
            </div>
            <img className="brain"
                src={require('./assets/brain.png')} alt='brain'/>
            <div>
            <h2 className='funText'>Welcome to an exercise in gratitude and boost your mood!</h2>
            </div>
        </div>
    )
}

export default Home