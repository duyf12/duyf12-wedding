import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trang chủ</h1>

      <button
        onClick={() => scrollToSection(section1Ref)}
        className="mb-2 p-2 bg-blue-500 text-white rounded"
      >
        Đi đến Section 1
      </button>
      <button
        onClick={() => scrollToSection(section2Ref)}
        className="mb-2 p-2 bg-blue-500 text-white rounded"
      >
        Đi đến Section 2
      </button>
      <button
        onClick={() => scrollToSection(section3Ref)}
        className="mb-2 p-2 bg-blue-500 text-white rounded"
      >
        Đi đến Section 3
      </button>

      <div
        ref={section1Ref}
        className={`transition-transform transform duration-500 ${"opacity-100 translate-y-0"} h-[500px] bg-red-300 my-4 flex items-center justify-center`}
      >
        <h2 className="text-xl">Section 1</h2>
      </div>

      <div
        ref={section2Ref}
        className={`transition-transform transform duration-500 ${"opacity-100 translate-y-0"} h-[500px] bg-blue-300 my-4 flex items-center justify-center`}
      >
        <h2 className="text-xl">Section 2</h2>
      </div>

      <div
        ref={section3Ref}
        className={`transition-transform transform duration-500 ${
          isVisible.section3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        } h-[500px] bg-green-300 my-4 flex items-center justify-center`}
      >
        <h2 className="text-xl">Section 3</h2>
      </div>
    </div>
  );
}

export default App;
