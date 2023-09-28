"use client";
import { useTranslations } from "next-intl";
import { ProductCard } from "../ProductCard";
import { Categories } from "../../../store/types";
import arrowRight from "../../../../public/arrowRight.svg";
import "./GetYourPhone.scss";

import { useAppSelector } from "../../../store/hooks";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
}

export default function GetYourPhone() {
  const { allProducts, productCategories } = useAppSelector(
    (state) => state.products
  );

  const phoneExample = allProducts
    .filter((item) => item.group === Categories.IPHONE)
    .slice(0, 4);

  const t = useTranslations();

  return (
    <section className="get-phone">
      <div className="get-phone__header">
        <h3 className="get-phone__title">
          {t("getPhone.getYour")}{" "}
          <span className="explore-product__title--bold">
            {t("getPhone.iPhone")}
          </span>
        </h3>
        <Link className="get-phone__header-link" href="#">
          {t("getPhone.seeAll")}{" "}
          <Image
            className="get-phone__header-link-img"
            priority
            src={arrowRight}
            alt="arrowRight"
          />
        </Link>
      </div>
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
    </section>
  );
}
