import { useState } from "react";

function Story({ story, removeFecthStory, patchLikes }) {

    
    const [likes, setLikes] = useState(story.likes);

    const trashPost = () => {
        removeFecthStory(story)
    }

    const likeIt = () => {
        const newLikes = likes + 1;
        setLikes(newLikes)
        patchLikes(story, newLikes)
    }

    

    return (
        <div>
            <hr></hr>
            <h3>User Name: {story.your_first_name}</h3>
            <h4>Story About: {story.name_of_person}</h4>
            <h4>Their Role in your Life: {story.role}</h4>
            <p>Your Story: {story.story}</p>
            <img width="400px" height="auto" src={story.image_url} alt={story.name_of_person} />
            <p>Thank You Note: {story.thank_you_note}</p>
            <button
                onClick={trashPost}
            >x</button>
            <button onClick={likeIt}>
                ❤️  {likes}
            </button>
            <hr></hr>
        </div>
    )
}

export default Story