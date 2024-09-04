"use client";
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller h-auto pb-8 relative z-20 max-w-auto overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " scroller flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <div
            className={`item h-[10rem] w-[17rem] p-6 flex items-center justify-center rounded-md `}
            style={{
              backgroundColor: item.bgColor,
              boxShadow: `0 4px 8px 0 ${item.bgColor}`,
            }}
            key={item.name}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-[5rem] h-[5rem] relative">
                <Image src={item.src} alt="img" fill />
              </div>
              <h1 className=" font-IBMPlexSans-SemiBold text-xl text-white">
                {item.text}
              </h1>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.oneOf(["fast", "normal", "slow"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};
