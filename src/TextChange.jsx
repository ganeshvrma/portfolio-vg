// import React from "react";
// import { useEffect, useState } from "react";
// const Textchange = () => {
//   const texts = [
//     "Hi, I'm a Software Engineer",
//     "Hi, I'm a Web Developer",
//     "Hi, I'm a Full Stack Developer"
//   ];
//   const [currentText, setCurrentText] = useState("");
//   const [endValue, setEndValue] = useState(1);
//   const [isForward, setIsForward] = useState(true);
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setCurrentText(texts[index].substring(0, endValue));
//       if (isForward) {
//         setEndValue((prev) => prev + 1);
//       } else {
//         setEndValue((prev) => prev - 1);
//       }
//       if (endValue > texts[index].length + 10) {
//         setIsForward(false);
//       }
//       if (endValue < 1) {
//         setIsForward(true);
//         setIndex((prev) => (prev + 1) % texts.length);
//       }
//     }, 100);
//     return () => clearInterval(intervalID);
//   }, [endValue, isForward, index, texts]);

// return (
//   <div className="transition ease duration-300">{currentText}</div>
// )
// };

// export default Textchange;
import React, { useEffect, useState } from "react";

const Textchange = () => {
  const texts = [
     "Hi,I'm a Software Engineer",
     "Hi,I'm a Web Developer",
     "Hi,I'm a Full Stack Developer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      // Handle typing forward
      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false); // Start deleting after typing is complete
        }
      } 
      // Handle deleting backward
      else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true); // Start typing the next text
          setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
        }
      }
    }, 100);

    return () => clearInterval(intervalID);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-300">
      {currentText}
    </div>
  );
};

export default Textchange;

