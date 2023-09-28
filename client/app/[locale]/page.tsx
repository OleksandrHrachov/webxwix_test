'use client';
import { useEffect } from "react";
import { ExploreProducts } from "./components/ExploreProduct";
import { GetYourPhone } from "./components/GetYourPhone";
import { IntroSection } from "./components/IntroSection";
import { SliderSection } from './components/SliderSection';
import { useAppDispatch } from "../store/hooks";
import { setState } from "../store/productSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:5000/`);
      const data = await response.json();
      dispatch(setState(data));
    };

    getData();
  }, []);

  return (
    <>
      <IntroSection />
      <GetYourPhone />
      <ExploreProducts />
      <SliderSection />
    </>
  );
}
