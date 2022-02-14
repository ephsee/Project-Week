
function Story({story}) {

    return(
        <div>
            <hr></hr>
            <h3>name: {story.your_first_name}</h3>
            <h4>person of interest: {story.name_of_person}</h4>
            <h4>role: {story.role}</h4>
            <p>story: {story.story}</p>
            <img width="400px" height="auto" src={story.image_url} alt={story.name_of_person}/>
            <h4>thank you note: {story.thank_you_note}</h4>
            <hr></hr>
        </div>
    )
}

export default Story