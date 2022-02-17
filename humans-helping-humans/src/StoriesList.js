import Story from './Story'
import { useState, useEffect } from 'react'
import NewStoryForm from './NewStoryForm'

const storyesLink = "http://localhost:6001/stories";

function StoriesList() {

    const [stories, setStories] = useState([])

    const [showStoriesForm, setShowStoriesForm] = useState(true)

    function clickShow() {
        setShowStoriesForm(!showStoriesForm)
    }

    console.log(stories)

    const makeNewStory = (story) => {

        fetch('http://localhost:6001/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(stories)

                // setStories([...stories, story]);
                getFetchStories();

            })
    }

    const getFetchStories = () => {
        fetch(storyesLink)
            .then(r => r.json())
            .then(data => setStories(data.reverse()))
    }

    function removeFecthStory(story) {
        fetch(storyesLink + "/" + story.id,
            { method: "DELETE" })
            .then(console.log)
        const cuttedStories = stories.filter(({ id }) => id !== story.id)
        setStories(cuttedStories);
        

    }

    function patchLikes(story, likes) {
        fetch(storyesLink + "/" + story.id, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    likes: parseInt(likes)
                })

        }).then(r => r.json()).then(console.log)
    }

    useEffect(() => {

        const controller = new AbortController();

        getFetchStories();

        return () => {

            controller.abort();
        }

    }, [])

    // function storyIndex(){

    // for (i = stories.length; i > 0 ; i--) {
    //     stories[i-1]
    //     return <Story key={stories[i-1].name_of_person} story={stories[i-1]}/>
    // }}

    const storyCard = stories.map(story => <Story
        key={story.name_of_person}
        story={story}
        removeFecthStory={removeFecthStory}
        patchLikes={patchLikes} />)

    return (
        <div>

            <hr></hr>
            <div onClick={clickShow}>CLICK HERE TO ADD A STORY!</div>
            <hr></hr>
            <div>{showStoriesForm ? null : <NewStoryForm /*stories={stories} setStories={setStories}*/ makeNewStory={makeNewStory} />}</div>
            <hr></hr>
            <h3>Read User Stories</h3>

            {storyCard}

        </div>
    )
}

export default StoriesList