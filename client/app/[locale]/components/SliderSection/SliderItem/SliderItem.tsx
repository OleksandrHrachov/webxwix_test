import Image from "next/image";
import "./SliderItem.scss";
import { Http2ServerRequest } from "http2";
import { Button } from "../../Button";
import { useTranslations } from "next-intl";
import playIcon from '../../../../../public/play.svg';

interface IProps {
  title: string;
  imgSrc: string;
  initial: boolean;
  genre: string;
}

export default function SliderItem({ title, imgSrc, initial, genre }: IProps) {
  const t = useTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000/';
  return (
    <div className="slide">
      {initial ? (
        <div className="slide-initial">
          <div className="slide-initial__title">
            <span className="slide-initial__title-name">{title}</span>
            <span className="slide-initial__title-genre">{genre}</span>
          </div>

          <img
            className="slide-initial__img"
            src={`${baseUrl}${imgSrc}`}
            alt={title}
          />
          <Button href="#" type="link">{t('slider.streamNow')} <Image className="slide-initial__btn-img" priority src={playIcon} alt="play"/></Button>
        </div>
      ) : (
        <div className="slide-regular">
          <span className="slide-regular__title">{title}</span>
          <img src={`${baseUrl}${imgSrc}`} alt={title} />
        </div>
      )}
    </div>
  );
}
