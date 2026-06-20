import { useState, useEffect } from "react";
import useInView from "../hooks/UseInView";
export default function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(numericTarget / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, numericTarget]);
  const formatted = target.replace(/[0-9,]+/, count.toLocaleString("en-IN"));
  return <span ref={ref}>{inView ? formatted : "0"}</span>;
}
