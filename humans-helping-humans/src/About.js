import "./assets/PNG image.png"

function About() {
    return (
        <div>
            <h3> About Humans Helping Humans </h3>
            {/* <img src="./assets/PNG image.png" alt='lara'/> */}
            <img src={require('./assets/PNG image.png')} />
            <p> something nice about the history and purpose of the app </p>
        </div>
    )
}

export default About