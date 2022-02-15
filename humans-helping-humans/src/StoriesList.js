import Story from './Story'
import {useState, useEffect} from 'react'
import NewStoryForm from './NewStoryForm'

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

            <NewStoryForm stories={stories} setStories={setStories}/>

            <h3>Read User Stories</h3>
            
            {storyCard}

        </div>
    )
}

export default StoriesList
