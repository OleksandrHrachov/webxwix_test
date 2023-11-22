import { useTranslations } from "next-intl";
import { Button } from "../Button";
import "./ProductCard.scss";
import Link from "next/link";
interface IProps {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
  id: string;
  hideBtn?: boolean;
}

export default function ProductCard({
  title,
  imgSrc,
  group,
  price,
  id,
  hideBtn = false,
}: IProps) {
  const t = useTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000/';

  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div className="product-card__title">
          <span className="product-card__title-descr">{title}</span>
          <span className="product-card__title-price">
            {t("productCard.priceFrom")} {price}
          </span>
        </div>

        <img
          className="product-card__img"
          src={`${baseUrl}${imgSrc}`}
          alt={title}
        />
        {!hideBtn && (
          <Button href={`/product/${id}`} type="link">
            {t("productCard.details")}
          </Button>
        )}
      </div>
    </div>
  );
}
