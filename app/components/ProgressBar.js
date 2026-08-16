"use client";

import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  const pathRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const path = pathRef.current;

    if (!path) return;

    const pathLength = path.getTotalLength();

    // Initial setup
    path.style.transition = "none";
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    // Force browser reflow
    path.getBoundingClientRect();

    path.style.transition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      const windowHeight =
        window.innerHeight;

      const scrollableHeight =
        documentHeight - windowHeight;

      if (scrollableHeight <= 0) {
        path.style.strokeDashoffset = pathLength;
        return;
      }

      const progress =
        pathLength -
        (scrollTop * pathLength) / scrollableHeight;

      path.style.strokeDashoffset = progress;

      setActive(scrollTop > 150);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`progress-wrap ${
        active ? "active-progress" : ""
      }`}
      onClick={handleClick}
      role="button"
      aria-label="Scroll to top"
      tabIndex={0}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
    </div>
  );
}