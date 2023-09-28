import { useTranslations } from "next-intl";
import Link from "next/link";
import { ProductCard } from "../../components/ProductCard";
import arrowBack from "../../../../public/arrowRight.svg";
import "./page.scss";
import Image from "next/image";

interface IProps {
  params: {
    id: string;
  };
}

interface IResp {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
  id: string;
}

async function getProduct(id: string): Promise<IResp[]> {
  const response = await fetch(`http://localhost:5000/product/${id}`);
  const data = response.json();
  return data;
}

export default async function ProductPage({ params: { id } }: IProps) {
  const product = await getProduct(id);

  return (
    <div className="product-page">
      <Link className="product-page__link" href={"/"}>
        <Image
          className="product-page__link-img"
          priority
          src={arrowBack}
          alt="back"
        />
        Go Back
      </Link>
      <div className="product-page__product">
        <ProductCard
          hideBtn={true}
          title={product[0].title}
          imgSrc={product[0].imgSrc}
          group={product[0].group}
          price={product[0].price}
          id={product[0].id}
        />
      </div>
    </div>
  );
}
