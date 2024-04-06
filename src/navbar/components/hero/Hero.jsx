import "./hero.scss";
import {motion} from "framer-motion"; 

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton :{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
   
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
    
};
   

const Hero=() => {
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                  <motion.h2 variants={textVariants}>Hisaab Kitaab</motion.h2>
                  <motion.h1 variants={textVariants}>The Easiest way to manage your personal finances</motion.h1>
                  <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the latest works</motion.button>
                    <motion.button variants={textVariants}>Contact Us</motion.button>
                  </motion.div>
                  <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div> 
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Expense Tracking Innovation
            </motion.div>
            <div className="imageContainer">
                <img src="mainPage2.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;