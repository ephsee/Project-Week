import React from 'react'


function ResourceCard({resourses}) {
    const resource = resourses.map(r=>{
        return(
        <p key = {r.id}> {r.gratitude_fact} </p>
        )


    })
    console.log(resource) 
  return (
    <div> Resources and research for effective gratiude practices
        <p> {resource}</p>
    </div>
  )
}

export default ResourceCard