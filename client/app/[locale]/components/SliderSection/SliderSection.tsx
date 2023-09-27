"use client";
import { useAppSelector } from "../../../store/hooks";
import { SliderItem } from "./SliderItem";
import './SliderSection.scss';

export default function SliderSection() {
  const { sliderData } = useAppSelector((state) => state.products);
  return (
    <section className="slider">
      {sliderData.map((slide) => {
        return (
          <SliderItem
            key={slide.id}
            title={slide.title}
            imgSrc={slide.imgSrc}
            initial={slide.initial}
            genre={slide.genre}
          />
        );
      })}
    </section>
  );
}
