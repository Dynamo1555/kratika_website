import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id :1,
        title:"React Commerce",
        img: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc : "Lorem30",
    },
    {
        id :2,
        title:"Next.js Blog",
        img: "https://images.pexels.com/photos/1522285/pexels-photo-1522285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "Lorem30",
    },
    {
        id :3,
        title:"Vanilla JS App",
        img: "https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc : "Lorem30",
    },
    {
        id :4,
        title:"Music App",
        img: "https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "Lorem30",
    },
];

const Single = ({item}) =>{

    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress ,[0,1],[-300,300]);
    return(
      <section ref = {ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                  <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>
    );
};
const Portfolio = () => {

    const ref = useRef();
    const{scrollYProgress} = useScroll({target:ref,offset:["end end" , "start start"]
    }); 

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
   
    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}

        </div>
    );
    
};

export default Portfolio;