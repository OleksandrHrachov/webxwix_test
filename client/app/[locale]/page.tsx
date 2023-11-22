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
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000/';
      const response = await fetch(baseUrl);
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
