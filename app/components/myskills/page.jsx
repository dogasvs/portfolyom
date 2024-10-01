import Css from "@/svgs/css/page";
import Figma from "@/svgs/figma/page";
import Html from "@/svgs/html/page";
import Javascript from "@/svgs/javascript/page";
import Next from "@/svgs/next/page";
import React from "@/svgs/react/page";

export default function MySkills() {
  return (
    <>
    <h1 className="title">Yeteneklerim</h1>
    <div className="yeteneklerim">
      <div className="yetenek-item">
        <Html />
      </div>

      <div className="yetenek-item">
        <Css />
      </div>

      <div className="yetenek-item">
        <Javascript />
      </div>

      <div className="yetenek-item">
        <React />
      </div>

      <div className="yetenek-item">
        <Next />
      </div>

      <div className="yetenek-item">
        <Figma />
      </div>
    </div>
    <hr />
    </>
  )
}