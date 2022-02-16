
function Story({story}) {

    return (
        <div>
            <hr></hr>
            <h3>User Name: {story.your_first_name}</h3>
            <h4>Story About: {story.name_of_person}</h4>
            <h4>Their Role in your Life: {story.role}</h4>
            <p>Your Story: {story.story}</p>
            <img width="400px" height="auto" src={story.image_url} alt={story.name_of_person}/>
            <p>Thank You Note: {story.thank_you_note}</p>
            <hr></hr>
        </div>
    )
}

export default Story