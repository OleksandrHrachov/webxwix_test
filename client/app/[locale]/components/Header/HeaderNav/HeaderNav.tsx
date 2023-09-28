"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import arrowDown from "../../../../../public/chevron_down.svg";
import Image from "next/image";
import "./HeaderNav.scss";

const menuList = [
  { title: "header.home", href: "#", icon: "" },
  { title: "header.products", href: "#", icon: arrowDown },
  { title: "header.entertainment", href: "#", icon: "" },
  { title: "header.support", href: "#", icon: "" },
];

export default function HeaderNav() {
  const t = useTranslations();
  const [activeLinkIdx, setActiveLinkIdx] = useState(-1);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      const main = document.getElementsByTagName("main")[0]
      main.classList.add('blur')
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
      const main = document.getElementsByTagName("main")[0]
      main.classList.remove('blur')
    }
  }, [showMenu]);

  return (
    <nav className="nav">
      <button
        className="nav-burger"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="nav-burger_1" />
        <div
          className={classNames("nav-burger_2", {
            ["nav-burger_2-close"]: showMenu,
          })}
        />
        <div
          className={classNames("nav-burger_3", {
            ["nav-burger_3-close"]: showMenu,
          })}
        />
      </button>
      <ul className={classNames("nav-list", { ["nav-list--show"]: showMenu })}>
        {menuList.map((item, index) => (
          <li className="nav-list__item" key={item.title}>
            <Link
              onClick={() => {
                setActiveLinkIdx(index);
                setShowMenu(!showMenu);
              }}
              className={classNames("nav-list__link", {
                ["nav-list__link--active"]: activeLinkIdx === index,
              })}
              href={item.href}
            >
              {t(item.title)}
            </Link>
            {item.icon && <Image priority src={arrowDown} alt="arrow" />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
