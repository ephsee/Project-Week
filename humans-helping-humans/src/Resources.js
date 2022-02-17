import {useEffect, useState} from 'react'
import ResourceCard from './ResourceCard'

function Resources(){

    const [resources, setResources] = useState([])

    useEffect(()=>{
        fetch("http://localhost:6001/comments")
        .then(r=>r.json())
        .then(data => setResources(data.reverse()))
    }, [])

    console.log(resources)

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

    function aFact() {
        setRando(randomFact)
    }
    
    console.log('all facts', facts)
    console.log('rando state', rando.gratitude_fact)


    return(
        <div>
            <div>
                <h3>Use These Resources On Your Journey</h3>
                    <p>The Science of Gratitude and How to Build a Gratitude Practice | Huberman Lab Podcast #47</p>
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/KVjfFN89qvQ?start=551" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div className='makeSpace'>
                    <p>See These Links For Further Reading: </p>
                    <div className='makeSpace'> 
                    <a href="https://www.sciencedirect.com/science/article/pii/S088915912100177X?via%3Dihub"> - Exploring neural mechanisms of the health benefits of gratitude in women: A randomized controlled trial</a>
                    </div>
                    <div className='makeSpace'>
                    <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2015.01491/full"> - Neural correlates of gratitude</a>
                    </div>
                </div>
                    <div className='story makeSpaceBottom'>
                    <div onClick={aFact}> 🧠 <u>Click me For a Scienterrific Fact about Gratitude!</u> 🤯 </div>
                    <p>{rando.gratitude_fact}</p>
                    </div>
            </div>
            <ResourceCard resources={resources} setResources={setResources}/>
        </div>
    )
}

export default Resources