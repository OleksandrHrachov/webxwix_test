"use client";
import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { Button } from "../Button";
import { DEFAULT_PROD_CATEGORY } from "../../../store/productSlice";
import { useTranslations } from "next-intl";
import "./ExploreProduct.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectGroup } from "../../../store/productSlice";

interface IProps {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
  id: string;
}

export default function ExploreProducts() {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_PROD_CATEGORY);
  const { selectedGroup, productCategories } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();
  const t = useTranslations();

  const setGroup = (group: string) => {
    dispatch(selectGroup(group));
    setCurrentCategory(group);
  };

  return (
    <section className="explore-product">
      <h3 className="explore-product__title">
        {t("productCard.exploreIn")}{" "}
        <span className="explore-product__title--bold">
          {t("productCard.products")}
        </span>
      </h3>
      <div className="explore-product__categories-buttons">
        {productCategories.map((category) => {
          return (
            <Button
              key={category}
              onSelect={() => setGroup(category)}
              type="category"
              isSelect={category === currentCategory}
            >
              {category}
            </Button>
          );
        })}
      </div>
      
        <div className="explore-product__list">
          {selectedGroup &&
            selectedGroup.slice(0, 8).map((item: IProps) => (
              <div key={item.title} className="explore-product__list-item">
                <ProductCard
                id={item.id}
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
