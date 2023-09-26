"use client";
import { useTranslations } from "next-intl";
import { ProductCard } from "../ProductCard";
import { Categories } from '../../../store/types';
import "./GetYourPhone.scss";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setState, selectGroup } from "../../../store/productSlice";

interface IProps {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
}

export default function GetYourPhone() {
  const { selectedGroup, productCategories } = useAppSelector(
    (state) => state.products
  );

  const phoneExample = selectedGroup.filter((item) => item.group === Categories.IPHONE).slice(0, 4);
  
  const t = useTranslations();

  return (
    <section className="get-phone">
      <h3 className="get-phone__title">
        {t("getPhone.getYour")}{" "}
        <span className="explore-product__title--bold">
          {t("getPhone.iPhone")}
        </span>
      </h3>
      <div>
        <div className="get-phone__list">
          {phoneExample &&
            phoneExample.map((item: IProps) => (
              <div key={item.title} className="get-phone__list-item">
                <ProductCard
                  title={item.title}
                  imgSrc={item.imgSrc}
                  group={item.group}
                  price={item.price}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}