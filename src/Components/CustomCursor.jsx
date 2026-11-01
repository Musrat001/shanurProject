import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (!cursor) return;

      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed left-0 top-0 z-[99999]
        flex h-10 w-10
        -translate-x-1/2 -translate-y-1/2
        items-center justify-center
        rounded-full
        border-2 border-black
        will-change-transform
      "
    >
      {/* Center Dot */}
      <div className="h-[9px] w-[9px] rounded-full bg-black" />
    </div>
  );
};

export default CustomCursor;
