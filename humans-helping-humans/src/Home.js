import {useState, useEffect} from 'react'

function Home() {

    const [facts, setFacts] = useState([])

    const [rando, setRando] = useState('')

    useEffect(() => {
        fetch("http://localhost:6001/facts")
        .then(r => r.json())
        .then(setFacts)
        // .then(setRando(randomFact))
    }, [])

    function getIndex(min, max) {
        min = Math.floor(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * max + min)
    }

    const randomFact = facts[getIndex(0, facts.length)]

    function aFact() {
        setRando(randomFact)
    }
    
    console.log('all facts', facts)
    // console.log('a random fact', randomFact.gratitude_fact)
    console.log('rando state', rando.gratitude_fact)

    return (
        <>  
            <img src="https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg" alt='mindful' />
            <h1>Come Share With Us</h1>
            <div onClick={aFact}>Click me For a Scienceterrific Fact about Gratitude</div>
            <p>{rando.gratitude_fact}</p>
        </>
    )
}

export default Home