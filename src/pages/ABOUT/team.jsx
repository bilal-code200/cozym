import React, { useEffect, useRef, useState } from "react";

function CountUp({ end, start }) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!start || hasStarted.current) return;

    hasStarted.current = true;
    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return <span>{count}+</span>;
}

export default function Team() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#012A42] w-full py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex justify-center gap-28 text-[18px] text-[#A5A49A] font-medium text-center">
          <div>
            <p className="text-3xl font-bold text-white">
              <CountUp end={250} start={startCount} />
            </p>
            <p>Professional Team</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">
              <CountUp end={100} start={startCount} />
            </p>
            <p>Projects Completed</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">
              <CountUp end={50} start={startCount} />
            </p>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
