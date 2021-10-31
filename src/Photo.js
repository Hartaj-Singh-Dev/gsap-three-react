import React ,{useRef , useEffect} from "react";
import "./photo.scss";
import Mypic from "./Nothing.png";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import gsap from "gsap/all";

const Photo = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".ImageContainer:after")
  
 let tl = new gsap.timeline();

  useEffect(() => {
	
  }, [])
  return (
    <>
      <div className="container" ref={(el)=>{container = el}}>
        <div className="ImageContainer">
          <img src={Mypic} ref={(l)=>{image = l}}/>
        </div>
      </div>
    </>
  );
};

export default Photo;
