import {useState, useEffect} from 'react'

const textAbout = 'something to do with something to do with something'

function Home() {

    const [facts, setFacts] = useState([])

    const [rando, setRando] = useState('')

    useEffect(() => {
        fetch("http://localhost:6001/facts")
        .then(r => r.json())
        .then(setFacts)
    }, [])

    function getIndex(min, max) {
        min = Math.floor(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * max + min)
    }

    const randomFact = facts[getIndex(0, facts.length)]

    // function aFact() {
    //     setRando(randomFact)
    // }
    
    console.log('all facts', facts)
    // console.log('a random fact', randomFact.gratitude_fact)
    // console.log('rando state', rando.gratitude_fact)

    return (
        <>
            <h1>Come Share With Us</h1>
            <p>{textAbout}</p>
        </>
    )
}

export default Home