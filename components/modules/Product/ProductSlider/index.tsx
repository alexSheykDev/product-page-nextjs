"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface ProductSliderProps {
  images: string[];
}

function SampleNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
    >
      <IconChevronRight stroke={2} />
    </button>
  );
}

function SamplePrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-24 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer"
    >
      <IconChevronLeft stroke={2} />
    </button>
  );
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
  };

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="relative">
      <div className="mb-8 text-right pr-10">
        <span className="text-[32px] font-bold text-headers mr-2">
          {formatNumber(activeIndex + 1)}
        </span>{" "}
        <span className="text-cool-gray text-2xl font-semibold">
          / {formatNumber(images.length)}
        </span>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
        className="rounded-lg overflow-hidden pt-10"
      >
        {images.map((img, index) => (
          <div key={index} className="!flex justify-center pr-20">
            <Image
              src={img}
              alt={`Product Image ${index + 1}`}
              width={298}
              height={425}
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute top-40 -right-10 custom-gradient opacity-10 w-[440px] h-[250px]" />

      <div className="flex gap-6 mt-10 justify-end">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              sliderRef.current?.slickGoTo(index);
            }}
            className={`border-2 p-2 w-[104px] h-[104px] rounded cursor-pointer hover:border-primary ${index === activeIndex ? "border-primary" : "border-french-gray"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={256}
              height={374}
              className="h-full rounded-md object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
