import Image from "next/image";
import introImg from "../../../../public/introImg.png";
import introTitleImg1 from "../../../../public/introTitleImg1.png";
import introTitleImg2 from "../../../../public/introTitleImg2.png";
import { useTranslations } from "next-intl";
import "./IntroSection.scss";

export default function IntroSection() {
  const t = useTranslations();
  return (
    <section className="intro-section">
      <div className="intro-section__text">
        <div className="intro-section__text-title">
          <span className="intro-section__text-content">
            {t("intro.title_1")}
            <Image
              className="intro-section__text-content-image"
              priority
              src={introTitleImg1}
              alt="introTitleImg1"
            />
          </span>
          <span className="intro-section__text-content">
            {t("intro.title_2")}
          </span>
          <span className="intro-section__text-content">
            <Image
              className="intro-section__text-content-image"
              priority
              src={introTitleImg2}
              alt="introTitleImg2"
            />
            {t("intro.title_3")}
          </span>
        </div>

        <div className="intro-section__text-description">
          {t("intro.description")}
        </div>
      </div>
      <div className="intro-section__img">
        <Image
          className="intro-section__img-image"
          priority
          src={introImg}
          alt="introImg"
        />
      </div>
    </section>
  );
}
