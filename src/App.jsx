import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const mainRef = useRef();
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to('.cursor', {
        scale: 1,
        opacity: 1
      })
    }
    const handleMouseLeave = () => {
      gsap.to('.cursor', {
        scale: 0,
        opacity: 0
      })
    }
    const handleMouseMove = (events) => {
      gsap.to('.cursor', {
        x: events.x,
        y: events.y
      })
    }
    const main = mainRef.current;
    main.addEventListener("mouseenter", handleMouseEnter);
    main.addEventListener("mouseleave", handleMouseLeave);
    main.addEventListener("mousemove", handleMouseMove);
    return () => {
      main.removeEventListener("mouseenter", handleMouseEnter);
      main.removeEventListener("mouseleave", handleMouseLeave);
      main.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])
  useEffect(() => {
    gsap.from('.main-elem h2', {
      y: 90,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.main-elem',
        start: "top 50%",
        scrub: 1,
        end: "top 70%"
      }
    })

    return () => {

    }
  }, [])

  return (
    <>
      <div id="page-one" ref={mainRef} className="w-full h-screen bg-red-300">
        <div className="cursor w-[7vw] h-[7vw] bg-orange-500 rounded-full fixed flex z-10 items-center justify-center">
          <h2>Play Reel</h2>
        </div>
        <video
          className="w-full h-full object-cover absolute z-0"
          autoPlay
          loop
          muted
          src="https://prismic-io.s3.amazonaws.com/rejouice/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
        ></video>
        <nav className="w-full  flex z-10 absolute items-center justify-between flex-col h-screen">
          <div className="flex px-5 py-10 text-white items-center w-full justify-between">
            <h2 className="text-xl">The Venture Agency</h2>
            <h2 className="text-xl">Menu</h2>
          </div>
          <div>
            <h1 className="text-[32vw] mb-20 leading-[29vw] text-white">rejoice</h1>
          </div>
        </nav>
      </div>
      <div id="page-two"
        className="w-full page-two px-10 min-h-screen bg-white "
      >
        <section className="w-full flex px border-b border-black py-3 items-center justify-between">
          <h2>Tomorrow's Brand, Today's</h2>
          <h2>Paris/San Diego</h2>
        </section>
        <section className="w-full main-elem">
          <h2 className="text-[4vw]  leading-[5vw]">        We are a venture firm and digital agency. Our mission is to transform founders' visions into remarkable brands. Choose traditional compensation or an equity offset through our Venture Model — your vision, your decision.</h2>
        </section>
        <section className="flex items-center w-full h-screen justify-center">
          <div className="flex flex-col gap-y-5">
            <div className="text-center">
              <h3>Agency & Ventures <span className="px-5 py-1 bg-black rounded-full text-white">Models</span></h3>
            </div>
            <div className="text-center tracking-tighter leading-[5vw]">
              <h2 className="text-[5vw]">Explore Our Services</h2>
              <h2 className="text-[5vw]">and Engagements Models</h2>
            </div>
          </div>
        </section>
        <section className="w-full h-[70vh] gap-x-3 flex items-center justify-between">
          <div className="box w-[400px] relative h-[90vh] bg-red-300">
            <img src="https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format" className="w-full h-full absolute top-0 left-0" alt="" />
            <video autoPlay loop muted className="w-full h-full object-cover object-center" src="https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4"></video>
          </div>
          <div className="box w-[400px] relative h-[90vh] bg-red-300">
            <img src="https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format" className="w-full h-full absolute top-0 left-0" alt="" />
            <video autoPlay loop muted className="w-full h-full object-cover object-center" src="https://prismic-io.s3.amazonaws.com/rejouice/3492b027-4212-4103-b2e2-aa702345d784_Website-homepage-Work-02_1.mp4"></video>
          </div>
          <div className="box w-[400px] relative h-[90vh] bg-red-300">
            <img src="https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format" className="w-full h-full absolute top-0 left-0" alt="" />
            <video autoPlay loop muted className="w-full h-full object-cover object-center" src="https://prismic-io.s3.amazonaws.com/rejouice/363f6760-3496-4638-8fc5-3b5d7711087c_Website-homepage-Work-03_1.mp4"></video>
          </div>
        </section>
      </div>
      <div id="page-three" className="w-full  mt-36 min-h-screen flex items-center relative justify-center">
        <div>
          <svg className="abs w-[35%] absolute top-20 left-[400px] tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:431.20000000000005"></circle>
            <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="$$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:123.2"></circle>
          </svg>
          <svg className="abs w-[35%] absolute top-20 left-[400px] tl:0 fit transform rotate:0 $$8$$ (.in-view):tween:all,2.8s,easeOutSlow (.in-view):rotate:216deg" viewBox="0 0 100 100">
            <circle cx="50" cy="1" r="1" fill="#fff"></circle>
          </svg>
          <video autoPlay loop muted src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"></video>
        </div>
      </div>
    </>
  );
};

export default App;
