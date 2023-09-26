import { useTranslations } from "next-intl";
import { Button } from "../Button";
import "./ProductCard.scss";
interface IProps {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
}

export default function ProductCard({ title, imgSrc, group, price }: IProps) {
  const t = useTranslations();

  return (
    <div className="product-card">
      <div className="product-card__wrapper">
        <div className="product-card__inner">
          <div className="product-card__title">
            <span className="product-card__title-descr">{title}</span>
            <span className="product-card__title-price">
              {t("productCard.priceFrom")} {price}
            </span>
          </div>

          <img
            className="product-card__img"
            src={`http://localhost:5000/${imgSrc}`}
            alt={title}
          />
          <Button type="details">{t("productCard.details")}</Button>
        </div>
      </div>
    </div>
  );
}
