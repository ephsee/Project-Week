import "./assets/PNG image.png"

function About() {

    return (
        <div>
            <h3> About Humans Helping Humans </h3>
                <img src={require('./assets/PNG image.png')} alt=' light brown girl doing tree pose'/> 
            <div> This app is a combination of inspirations. First, the endless impact teachers, mentors, and friends have on our lives and the collective good we enjoy from those lessons learned. Second, the amazing resource of scientific data, distilled by neurobiologist and optimologist Dr. Andrew Huberman. His free of cost podcast/youtube channel distills meaning and actionable ideas for optimizing health. On this site, visit the resource tab to learn about the scientific beenfits of gratitiude, and to dispell the myths of gratitude. On the Stories tab, hear how others have been impacted by their teachers and mentors. TRHe benefit of hearing and sharing the narrative of  humans helping humans is undeniedable!

                <p>While here: </p>
                <ul>
                <li>Click on the {<a href="/resources">Resources</a>} tab to watch Dr. Huberman lecture on the science of gratitude.</li>
                <li>Click on the {<a href="/storieslist">Stories List</a>} tab to read stories about inspiring teachers, and boost your serontonin as a result.</li>
                <li>Click to learn a random fact about gratitude on the {<a href="/resources">Resources</a>} tab.</li>
                <li>Click on the {<a href="/storieslist">Stories List</a>} tab to share your own inspirational story of being helped, and boost someone's serotonin.</li>
                <li>And remember, when you need a brain boost, think of these stories to improve your mood and sense of contentment.</li>
                 </ul>
            </div>
        </div>
    )
}

export default About