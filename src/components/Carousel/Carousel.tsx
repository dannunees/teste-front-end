import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  children: React.ReactNode;
  itemsPerPage?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerPage = 4,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const childrenArray = React.Children.toArray(children);
    setCurrentIndex((prev) =>
      Math.min(prev + 1, childrenArray.length - itemsPerPage),
    );
  };

  const childrenArray = React.Children.toArray(children);
  const maxIndex = Math.max(0, childrenArray.length - itemsPerPage);

  // Swipe handlers using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    swipeDuration: 250,
    delta: 50, // Minimum swipe distance
  });

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrowButton} ${styles.prev}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.carouselContent}>
        <div
          {...handlers}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {childrenArray}
        </div>
      </div>

      <button
        className={`${styles.arrowButton} ${styles.next}`}
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Próximo"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
