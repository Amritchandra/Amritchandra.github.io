import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import MyResume from "../Navbar/MyResume.pdf"

function HomeSection() {
    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Amrit-Chandra-Kumar-Resume.pdf";
        link.href = MyResume;
        link.setAttribute("class", "resume-link-2")
        link.click();

        window.open(
            "https://drive.google.com/file/d/1HRf4vYJ-mlfACRFLDuNlHwIJ7tNRajNI/view?usp=sharing",
            "_blank"
        );
    };
    

    const githubHandle = () => {
        window.open(
            "https://github.com/amritchandra",
            "_blank"
        );
    };
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Amrit Chandra Kumar</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: "Full Stack Web Developer",
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                   
                    <p> Specialized in MERN stack, like to write code clean and optimized, experienced inexecuting solo and collaborative projects. Possesses
                       strong problem-solving abilities, keen attention to detail,and a passion for crafting exceptional web solutions.With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and want to achieve great things. You can reach me at <a href="#contact" className='contactMe' >Contact Me</a></p>
                    <div className='home_button'>
                        <button id="resume-button-2"
                            onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle} >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home' >
                <img src="/Images/Amrit_image.jpg" alt="" className="home-img" />
            </div>
        </div>
    )
}

export default HomeSection