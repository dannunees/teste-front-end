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

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    swipeDuration: 250,
    delta: 50,
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
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g filter="url(#filter0_d_71_4172)">
            <circle cx="20" cy="16" r="16" fill="white" />
          </g>
          <path
            d="M22.1333 10.7442L21.0009 9.59998L14.6667 16L21.0009 22.4L22.1333 21.2557L16.9316 16L22.1333 10.7442Z"
            fill="#3F3F40"
          />
          <defs>
            <filter
              id="filter0_d_71_4172"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_71_4172"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_71_4172"
                result="shape"
              />
            </filter>
          </defs>
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
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g filter="url(#filter0_d_71_4175)">
            <circle
              cx="20"
              cy="16"
              r="16"
              transform="rotate(180 20 16)"
              fill="white"
            />
          </g>
          <path
            d="M17.8667 21.2558L18.9992 22.4L25.3334 16L18.9992 9.60002L17.8667 10.7443L23.0684 16L17.8667 21.2558Z"
            fill="#3F3F40"
          />
          <defs>
            <filter
              id="filter0_d_71_4175"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_71_4175"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_71_4175"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  );
};
