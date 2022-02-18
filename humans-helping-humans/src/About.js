import "./assets/PNG image.png";
import {useState} from "react";
import video from './assets/gifv.mp4'




function About() {

    const [isClicked,setIsClicked] = useState(false);

    const handleClick = () =>{setIsClicked(!isClicked) }

    function YesPlease(){

        return (isClicked ? <> 
                                <h3> Do you want more?</h3> 
                                <video onClick ={ handleClick}  src={video} width="600" height="300" autoPlay = {true} loop ={true}/>
                                <h4> Yes, Please</h4>
                             </>:<></> 
        )}

    return (
        <div>
            <h2 className='funText'> About Humans Helping Humans </h2>
                <div>
                    <div>
                        <div>
                            <div className='makeSpace aboutContainer'>This app is a combination of inspirations. First, the endless impact teachers, mentors, and friends have on our lives and the collective good we enjoy from those lessons learned. Second, the amazing resource of scientific data, distilled by neurobiologist and optimologist Dr. Andrew Huberman. His free of cost podcast/youtube channel distills meaning and actionable ideas for optimizing health. On this site, visit the resource tab to learn about the scientific beenfits of gratitiude, and to dispell the myths of gratitude. On the Stories tab, hear how others have been impacted by their teachers and mentors. The benefit of hearing and sharing the narrative of humans helping humans is undeniedable!</div>    
                            <img className="picture" src={require('./assets/PNG image.png')} alt=' light brown girl doing tree pose'/>
                            <div></div>
                        </div>
                        <YesPlease />
                        <div className='story makeSpace'>
                            <p>While here: </p>
                            <ul className='listLeft listSquare'>
                            <li>Click on the {<a href="/resources">Resources</a>} tab to watch Dr. Huberman lecture on the science of gratitude.</li>
                            <li>Click on the {<a href="/storieslist">Stories List</a>} tab to read stories about  <span onClick = {handleClick} style = {{color : "#bb2965" , backgroundColor : "#95b2cc"}}> inspiring</span> teachers, and boost your serontonin as a result.</li>
                            <li>Click on the {<a href="https://youtu.be/dQw4w9WgXcQ?t=42" alt='rick' target="_blank">Stories List</a>} tab to share your own inspirational story of being helped, and boost someone's serotonin.</li>
                            <li>Click to learn a random fact about gratitude on the {<a href="/resources">Resources</a>} tab.</li>
                            <li>And remember, when you need a brain boost, think of these stories to improve your mood and sense of contentment.</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default About