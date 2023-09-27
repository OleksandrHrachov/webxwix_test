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
            src={`http://localhost:5000/${imgSrc}`}
            alt={title}
          />
          <Button type="details">{t('slider.streamNow')} <Image className="slide-initial__btn-img" priority src={playIcon} alt="play"/></Button>
        </div>
      ) : (
        <div className="slide-regular">
          <span className="slide-regular__title">{title}</span>
          <img src={`http://localhost:5000/${imgSrc}`} alt={title} />
        </div>
      )}
    </div>
  );
}
