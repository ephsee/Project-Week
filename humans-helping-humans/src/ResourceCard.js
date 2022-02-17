import { useState } from 'react'

function ResourceCard({ resources, setResources }) {

    console.log(resources)

    const linkBEComments = 'http://localhost:6001/comments'

    const [newComment, setNewComment] = useState('')

    const aComment = {
        "comment": newComment
    }

    function commentSubmit(e) {
        e.preventDefault()
        setResources([aComment, ...resources])

        fetch(linkBEComments, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(aComment),
        })
            .then(response => response.json())
            .then(setResources([aComment, ...resources]))

    }

    function handleComment(e) {
        console.log(e.target.value)
        setNewComment(e.target.value)
    }





    const Resource = () => {
        const killComment = res => {
            console.log("to dletete id:", res.id)

            fetch(linkBEComments + "/" + res.id,
                { method: "DELETE" })
                .then(console.log)


            const resourecsWOdelletedComent = resources.filter(({ id }) => id !== res.id)
            setResources(resourecsWOdelletedComent);


        }
        return (
            resources.map(r => {

                return (
                    <Comment key={r.comment + r.id} r={r} killComment={killComment} />
                )
            }))
    }


    const Comment = ({ r, killComment }) => {
        const deleteCommentClick = () => killComment(r)
        return (
            <li >{r.comment}
                <button onClick={deleteCommentClick}>x</button>
            </li>)
    }


    return (
        <div>
            <h3>Share Resources And Research For Effective Gratiude Practices: </h3>
            <form>
                <textarea rows="5" cols="45" onChange={handleComment} type="text" placeholder="Share Your Resources and Tips" value={newComment}></textarea><br></br>
                <input onClick={commentSubmit} type="submit"></input>
            </form>
            <div><ul>
                <Resource />
            </ul></div>
        </div>
    )
}

export default ResourceCard