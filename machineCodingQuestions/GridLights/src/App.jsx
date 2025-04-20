import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [box, setBox] = useState([]);
  const handleClick = (e) => {
    setBox((prev) => {
      if (!prev.includes(e)) {
        return [...prev, e];
      }
      return prev;
    });
  };
  useEffect(() => {
    let timeout;
    console.log(box);
    let interval = setInterval(() => {
      setBox((prev) => {
        if (prev.length == 0) {
          clearInterval(interval);
          return prev;
        }
        const updated = [...prev];
        updated.pop();
        return updated;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [box]);

  return (
    <div className="wrapper">
      {[...Array(9)].map((item, index) => (
        <div
          className="grid__box"
          key={index}
          style={{
            backgroundColor: box.includes(index) ? "green" : "transparent",
          }}
          onClick={(e) => handleClick(index)}
        ></div>
      ))}
    </div>
  );
}

