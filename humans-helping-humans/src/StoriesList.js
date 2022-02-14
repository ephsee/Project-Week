import Story from './Story'
import {useState, useEffect} from 'react'

function StoriesList() {

    const [stories, setStories] = useState([])

    useEffect(()=>{

        const doTheFecth = new AbortController();

        fetch("http://localhost:6001/stories")
        .then(r=>r.json())
        .then(setStories)

        return () => {
            
            doTheFecth.abort();}

    },[])

    console.log(stories)

    const storyCard = stories.map(story =>  <Story key={story.id} story={story}/>)

    return (
        <div>
            {storyCard}
        </div>
    )
}

export default StoriesList
