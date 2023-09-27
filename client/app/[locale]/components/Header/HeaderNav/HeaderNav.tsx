"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import classNames from "classnames";
import arrowDown from '../../../../../public/chevron_down.svg';
import Image from 'next/image';
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

  return (
    <nav className="nav">
      <ul className="nav-list">
        {menuList.map((item, index) => (
          <li className="nav-list__item" key={item.title}>
            <Link
            onClick={() => setActiveLinkIdx(index)}
              className={classNames("nav-list__link", {
                ["nav-list__link--active"]: activeLinkIdx === index,
              })}
              href={item.href}
            >
              {t(item.title)}
            </Link>
            {item.icon && <Image priority src={arrowDown} alt="arrow"/>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
