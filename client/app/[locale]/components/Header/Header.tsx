import classNames from "classnames";
import { useTranslations } from "next-intl";
import { HeaderNav } from "./HeaderNav";
import "./Header.scss";
import { Logo } from "../Logo";
import Link from "next/link";
import Image from "next/image";
import bag from "../../../../public/bag.svg";
import profile from "../../../../public/person.svg";
import search from '../../../../public/searchIcon.svg';

export default function Header() {
  const t = useTranslations();

  return (
    <header className={classNames("container", "header")}>
      <HeaderNav />
      <Link href={"#"} className="header__logo">
        <Logo />
      </Link>

      <div className="header__right-side">
        <div className="header__search">
        <Image className="header__search-icon" priority src={search} alt="search" />
          <input
            className="header__search-input"
            placeholder={t("header.search")}
          />
        </div>
        <Link className="header__bag" href={"#"}>
          <Image priority src={bag} alt="bag" />
        </Link>
        <Link className="header__profile" href={"#"}>
          <Image priority src={profile} alt="profile" />
        </Link>
      </div>
    </header>
  );
}
