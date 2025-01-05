"use client";

import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@/public/icons";

export default function ScrollPart() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isBottom = scrollPosition >= 1200;
    setIsScrolledToBottom(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clickIcon = () => {
    if (isScrolledToBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-4 lg:bottom-20 right-4 lg:right-20">
      <ArrowDownIcon
        className={`cursor-pointer ${isScrolledToBottom ? "rotate-180" : ""}`}
        onClick={clickIcon}
      />
    </div>
  );
}
