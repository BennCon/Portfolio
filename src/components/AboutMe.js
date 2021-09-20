import logo from './me.jpg';
import './AboutMe.css'


function AboutMe() {
    return (
        <>
            <div className="CenteredMain">
                <div className="TitleArea">
                    <h2>About Me</h2>
                </div>
                <p1>I'm Ben, a second year computer science student at The University of Sheffield.</p1>

                <br/><br/>
                <img src={logo} alt="" class="CircleImage" />
                <br/><br/>

                <p1>As a student, I am especially interesting in machine learning and algorithm development. I am looking forward to
                    developing these skills further in my second year of university, and hope that a third year industry placement
                    allows me to put those skills into practise. <br/>
                    Outside of university work, I am a keen musician and currently the coordinator of a&nbsp;
                    <a href="https://musicplayers.union.shef.ac.uk/bands/big-band/">university jazz band</a>.
                </p1>




            </div>
        </>
    );
};

export default AboutMe;