"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const mouseInner = document.querySelector(".tf-mouse-inner");
    const mouseOuter = document.querySelector(".tf-mouse-outer");

    if (!mouseInner || !mouseOuter) return;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      mouseOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
      mouseInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const handleMouseEnter = () => {
      mouseInner.classList.add("mouse-hover");
      mouseOuter.classList.add("mouse-hover");
    };

    const handleMouseLeave = (event) => {
      // Original code-এর canvas condition
      if (
        event.currentTarget.tagName === "A" &&
        event.currentTarget.closest(".canvas")
      ) {
        return;
      }

      mouseInner.classList.remove("mouse-hover");
      mouseOuter.classList.remove("mouse-hover");
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverElements = document.querySelectorAll(
      "a, .canvas, .progress-wrap"
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    mouseInner.style.visibility = "visible";
    mouseOuter.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="tf-mouse tf-mouse-outer"></div>
      <div className="tf-mouse tf-mouse-inner"></div>
    </>
  );
}