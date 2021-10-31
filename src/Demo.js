import "./demo.scss";
import boy from "./boy.jpg";
import girl from "./girl.jpg";
import gsap, { Power3 } from "gsap";
import { useEffect, useRef, useState } from "react";

const Demo = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new gsap.timeline();

  useEffect(() => {
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headline = headlineFirst.nextSibling;
    const headlinethird = headline.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    gsap.to(app, { duration: 1, css: { visibility: "visible" } });

    tl.from(girlImage, { duration: 1, y: 128, ease: Power3.easeOut } , "Start")
      .from(girlImage.firstElementChild, {
        duration: 1.5,
        scale: 1.6,
        ease: Power3.easeOut,
        delay: 0.2,
      })
      .from(boyImage, { duration: 1, y: 128, ease: Power3.easeOut });

    tl.from([headlineFirst.children, headline.children, headlinethird.children],{duration:1 , ease:Power3.easeOut , y: 44 ,delay:0.1} ,"Start");
  }, [tl]);

  return (
    <>
      <div
        className="hero"
        ref={(el) => {
          app = el;
        }}
      >
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div
                className="hero-content-inner"
                ref={(l) => {
                  content = l;
                }}
              >
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Relieving the burdens
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      of Disease caused
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">by behaviour</div>
                  </div>
                </h1>
                <p>
                  Better treats serious cardiometabolic diseases to transform
                  lives and reduce healthcare utilization through the use of
                  digital therapeutics.
                </p>
                <div className="explore-button">
                  <button>Explore</button>
                </div>
              </div>
            </div>
            <div className="hero-images">
              <div
                className="hero-images-inner"
                ref={(i) => {
                  images = i;
                }}
              >
                <div className="hero-image girl">
                  <img src={girl} />
                </div>
                <div className="hero-image boy">
                  <img src={boy} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
