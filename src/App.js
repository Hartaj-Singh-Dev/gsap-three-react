import "./App.css";
import { react, useRef, useEffect, useState } from "react";
import { Power3, gsap } from "gsap";

function App() {
  let whitecircle = useRef(null);
  let redcircle = useRef(null);
  let bluecircle = useRef(null);
  const [isExpaneded, setisExpaneded] = useState(false)

  let App = useRef(null)

  const handleExpand = ()=>{
    if(isExpaneded){
    gsap.to(redcircle,{duration:0.5,width: 200 , height:200 , ease:Power3.easeOut})
    setisExpaneded(true)
  }else{
      gsap.to(redcircle,{duration:0.5, width:100, height:100})
    }
  }

  useEffect(() => {
    gsap.to(App,{css:{ visibility: "visible"}})
    gsap.from(whitecircle, {
      duration: 1.5,
      opacity: 0,
      x: 60,
      ease: Power3.easeOut,
    });
    gsap.from(redcircle, {
      duration: 1.5,
      opacity: 0,
      x: 60,
      delay:0.2,
      ease: Power3.easeOut,
    });
    gsap.from(bluecircle, {
      duration: 1.5,
      opacity: 0,
      x: 60,
      delay:0.4,
      ease: Power3.easeOut,
    });
  
    
  }, []);

  return (
    <div className="App" ref={(el)=>{ App = el}}>
      <div className="circles">
        <div
          className="circle yellow"
          ref={(el) => {
            whitecircle = el;
          }}
        ></div>
        <div
          className="circle red"
          ref={(el) => {
            redcircle = el;
          }}
          onClick={()=>{handleExpand()}}
        ></div>
        <div
          className="circle blue"
          ref={(el) => {
            bluecircle = el;
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
