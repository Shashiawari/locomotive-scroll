"use client";

import { useEffect, useRef ,useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbat";
import Link from "next/link";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import LocomotiveScroll CSS
import"./globals.css"
export default function Home() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let scrollInstance;

    const initLocomotiveScroll = async () => {
      if (typeof window === "undefined") return; // Ensure it's running in the browser
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scrollInstance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.1, // Adjust scroll inertia
        multiplier: 1, // Adjust scrolling speed
        reloadOnContextChange: true,
      });

      console.log("Locomotive Scroll initialized:", scrollInstance);
    };

    // Preload images before initializing Locomotive Scroll
    const preloadImages = () => {
      const images = document.querySelectorAll("img");
      const promises = Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      );

      return Promise.all(promises);
    };

    preloadImages().then(() => {
      setIsLoading(false);
      initLocomotiveScroll();
    });

    // Cleanup on unmount
    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <div className="loader"></div> {/* Replace with your loader animation */}
      </div>
    );
  }
  return (
    <>
    <Navbar />
    <div data-scroll-container ref={containerRef}>
      <div
        data-scroll-section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h1 data-scroll>LocomotiveScroll</h1>
        <p data-scroll> lets experience the scrolling effect</p>

        <div data-scroll-section className="sli1 d-none d-lg-block">
          <div
            className="sli2"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
            <img src="/t2.webp" className="imgp" alt="Image 4" />
          </div>
        </div>
      </div>
      <div data-scroll-section className="row ig1 d-flex justify-content-center align-items-center ">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <h2>On images</h2>
          <p>speed 4x</p>
        </div>

        <div
          className="col-6 d-flex justify-content-center align-items-center pos"
          data-scroll
          data-scroll-repeat
        >
          <div className="image-wrapper">
            <img
              data-scroll
              data-scroll-speed="4"
              src="/g1.png"
              className="img-fluid"
            />
            <h2 className="abs" data-scroll>
              4x
            </h2>
          </div>
        </div>
      </div>
      <div data-scroll-container ref={containerRef}>
        <div
          data-scroll-section
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <h1
            data-scroll
            data-scroll-speed="5"
            data-scroll-direction="horizontal"
          >
            Right Scroll
          </h1>
          <h1
            data-scroll
            data-scroll-speed="-5"
            data-scroll-direction="horizontal"
            className="dig2"
          >
            Left Scroll
          </h1>
        </div>
      </div>
      <div data-scroll-container>
        <section data-scroll-section>
          <span className="lerp-wrap" data-scroll>
            <span data-scroll data-scroll-delay="0.18" data-scroll-speed="6">
              W
            </span>
            <span data-scroll data-scroll-delay="0.14" data-scroll-speed="6">
              R
            </span>
            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="6">
              A
            </span>
            <span data-scroll data-scroll-delay="0.1" data-scroll-speed="6">
              P
            </span>
            <span data-scroll data-scroll-delay="0.08" data-scroll-speed="6">
              1
            </span>
          </span>
        </section>
        <section data-scroll-section>
          <span className="lerp-wrap" data-scroll>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.18"
              data-scroll-speed="6"
            >
              S
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.14"
              data-scroll-speed="6"
            >
              E
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.12"
              data-scroll-speed="6"
            >
              C
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.1"
              data-scroll-speed="6"
            >
              O
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.08"
              data-scroll-speed="6"
            >
              N
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.06"
              data-scroll-speed="6"
            >
              D
            </span>
          </span>
        </section>

        <section data-scroll-section>
          <span className="lerp-wrap" data-scroll>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.18"
              data-scroll-speed="-6"
            >
              T
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.14"
              data-scroll-speed="-6"
            >
              H
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.12"
              data-scroll-speed="-6"
            >
              I
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.1"
              data-scroll-speed="-6"
            >
              R
            </span>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-delay="0.08"
              data-scroll-speed="-6"
            >
              D
            </span>
          </span>
        </section>
      </div>
      <div data-scroll-section>
        <h2 className=" my-5 p-3">Let's Try with images</h2>
        <hr></hr>
        <div className="d-flex justify-content-between p-3">
          <img
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="6"
            className="img-fluid"
            src="/1.png"
            width="487px"
            height="737px"
          ></img>
          <img
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="6"
            className="img-fluid"
            src="/2.png"
            width="487px"
            height="737px"
          ></img>
          <img
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="6"
            className="img-fluid"
            src="/3.png"
            width="487px"
            height="737px"
          ></img>
        </div>
      </div>
      <div data-scroll-section className="mt-5">
        <div className="section-2 p-5">
          <div id="pinSection" className="pinned-quote">
            <blockquote
              data-scroll=""
              data-scroll-sticky="true"
              data-scroll-target="#pinSection"
              style={{ fontFamily: "c3" }}
              className="mt-3"
            >
              “ Just Scroll I dont know what to type ”
            </blockquote>
          </div>
          <div className="images-container">
            <img src="/1.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/1.png" alt="" />
            <img src="/2.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/1.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/2.png" alt="" />
          </div>
        </div>
      </div>
      <div data-scroll-section id="services" className="d-flex justify-content-center aling-items-center" style={{height:"100vh",marginTop:"200px"}}>
        <div className="rotated skewed">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="20"
            data-scroll-target="#services"
            className="scrollable"
          >
            <span className="largeText greenBox" style={{fontFamily:"c2"}}>
              Diagonal scrolling gogogoogogogogoogogogoggo
            </span>
          </div>
        </div>
        <div className="rotatedReverse skewedReverse marginTop" >
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-20"
            data-scroll-target="#services"
            className="scrollable"
          >
            <span className="largeText greenBox" style={{fontFamily:"c2"}}>
              Diagonal scrolling gogogoogogogogoogogogoggo
            </span>
          </div>
        </div>
      </div>
      <div data-scroll-section >
        <div className="git" >
          <Link href="https://github.com/Shashiawari">Visit Github</Link>
        </div>
      </div>
    </div>
  </>
  );
}
