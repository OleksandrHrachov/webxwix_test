"use client";
import Link from "next/link";
import { Button } from "../Button";
import { LangSwitcher } from "../LangSwitcher";
import "./Footer.scss";
import { useTranslations } from "next-intl";
import {
  navList,
  shopLearnLinks,
  appleStoreLinks,
  forBusinnessLinks,
  forEducation,
  forHelthcare,
  entertainment,
  appleWallet,
  account,
  legalLinks,
} from "./links";
import { useState } from "react";
import arrowDown from "../../../../public/chevron_down.svg";
import Image from "next/image";
import classNemes from "classnames";

export default function Footer() {
  const t = useTranslations();

  const [hideShopLearnLinks, setHideShopLearnLinks] = useState(true);
  const [hideAppleStoreLinks, setHideAppleStoreLinks] = useState(true);
  const [hideForBusinnessLinks, setHideForBusinnessLinks] = useState(true);
  const [hideForEducation, setHideForEducation] = useState(true);
  const [hideForHelthcare, setHideForHelthcare] = useState(true);
  const [hideEntertainment, setHideEntertainment] = useState(true);
  const [hideAppleWallet, setHideAppleWallet] = useState(true);
  const [hideAccount, setHideAccount] = useState(true);
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav-container">
          {navList.map((item) => (
            <Button key={item.title} type="category-footer">
              <Link className="footer__nav-btn-link" href={item.href}>
                {t(`footer.buttons.${item.title}`)}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="footer__list">
          <div className="footer__list-col">
            <h5 className="footer__list-title">
              {t(`footer.shopLearn.${shopLearnLinks.title}`)}

              {!hideShopLearnLinks ? (
                <Image
                  className="footer__list-title-switch-close"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideShopLearnLinks(!hideShopLearnLinks)}
                />
              ) : (
                <Image
                  className="footer__list-title-switch"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideShopLearnLinks(!hideShopLearnLinks)}
                />
              )}
            </h5>

            <ul
              className={classNemes("footer__list-section", {
                ["footer__list-section--hide"]: hideShopLearnLinks,
              })}
            >
              {shopLearnLinks.links.map((item) => (
                <li className="footer__list-item" key={item.title}>
                  <Link className="footer__list-link" href={item.href}>
                    {t(`footer.shopLearn.${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__list-col">
            <h5 className="footer__list-title">
              {t(`footer.appleStore.${appleStoreLinks.title}`)}

              {!hideAppleStoreLinks ? (
                <Image
                  className="footer__list-title-switch-close"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideAppleStoreLinks(!hideAppleStoreLinks)}
                />
              ) : (
                <Image
                  className="footer__list-title-switch"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideAppleStoreLinks(!hideAppleStoreLinks)}
                />
              )}
            </h5>
            <ul
              className={classNemes("footer__list-section", {
                ["footer__list-section--hide"]: hideAppleStoreLinks,
              })}
            >
              {appleStoreLinks.links.map((item) => (
                <li className="footer__list-item" key={item.title}>
                  <Link className="footer__list-link" href={item.href}>
                    {t(`footer.appleStore.${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__list-col">
            <div className="footer__list-col-row-1">
              <h5 className="footer__list-title">
                {t(`footer.forBussiness.${forBusinnessLinks.title}`)}

                {!hideForBusinnessLinks ? (
                  <Image
                    className="footer__list-title-switch-close"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() =>
                      setHideForBusinnessLinks(!hideForBusinnessLinks)
                    }
                  />
                ) : (
                  <Image
                    className="footer__list-title-switch"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() =>
                      setHideForBusinnessLinks(!hideForBusinnessLinks)
                    }
                  />
                )}
              </h5>
              <ul
                className={classNemes("footer__list-section", {
                  ["footer__list-section--hide"]: hideForBusinnessLinks,
                })}
              >
                {forBusinnessLinks.links.map((item) => (
                  <li className="footer__list-item" key={item.title}>
                    <Link className="footer__list-link" href={item.href}>
                      {t(`footer.forBussiness.${item.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__list-col-row-2">
              <h5 className="footer__list-title">
                {t(`footer.forEducation.${forEducation.title}`)}
                {!hideForEducation ? (
                  <Image
                    className="footer__list-title-switch-close"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideForEducation(!hideForEducation)}
                  />
                ) : (
                  <Image
                    className="footer__list-title-switch"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideForEducation(!hideForEducation)}
                  />
                )}
              </h5>
              <ul
                className={classNemes("footer__list-section", {
                  ["footer__list-section--hide"]: hideForEducation,
                })}
              >
                {forEducation.links.map((item) => (
                  <li className="footer__list-item" key={item.title}>
                    <Link className="footer__list-link" href={item.href}>
                      {t(`footer.forEducation.${item.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__list-col-row-3">
              <h5 className="footer__list-title">
                {t(`footer.forHelthcare.${forHelthcare.title}`)}
                {!hideForHelthcare ? (
                  <Image
                    className="footer__list-title-switch-close"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideForHelthcare(!hideForHelthcare)}
                  />
                ) : (
                  <Image
                    className="footer__list-title-switch"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideForHelthcare(!hideForHelthcare)}
                  />
                )}
              </h5>
              <ul
                className={classNemes("footer__list-section", {
                  ["footer__list-section--hide"]: hideForHelthcare,
                })}
              >
                {forHelthcare.links.map((item) => (
                  <li className="footer__list-item" key={item.title}>
                    <Link className="footer__list-link" href={item.href}>
                      {t(`footer.forHelthcare.${item.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer__list-col">
            <h5 className="footer__list-title">
              {t(`footer.entertainment.${entertainment.title}`)}
              {!hideEntertainment ? (
                <Image
                  className="footer__list-title-switch-close"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideEntertainment(!hideEntertainment)}
                />
              ) : (
                <Image
                  className="footer__list-title-switch"
                  priority
                  src={arrowDown}
                  alt="arrow"
                  onClick={() => setHideEntertainment(!hideEntertainment)}
                />
              )}
            </h5>
            <ul
              className={classNemes("footer__list-section", {
                ["footer__list-section--hide"]: hideEntertainment,
              })}
            >
              {entertainment.links.map((item) => (
                <li className="footer__list-item" key={item.title}>
                  <Link className="footer__list-link" href={item.href}>
                    {t(`footer.entertainment.${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__list-col">
            <div className="footer__list-col-row-1">
              <h5 className="footer__list-title">
                {t(`footer.appleWallet.${appleWallet.title}`)}
                {!hideAppleWallet ? (
                  <Image
                    className="footer__list-title-switch-close"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideAppleWallet(!hideAppleWallet)}
                  />
                ) : (
                  <Image
                    className="footer__list-title-switch"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideAppleWallet(!hideAppleWallet)}
                  />
                )}
              </h5>
              <ul
                className={classNemes("footer__list-section", {
                  ["footer__list-section--hide"]: hideAppleWallet,
                })}
              >
                {appleWallet.links.map((item) => (
                  <li className="footer__list-item" key={item.title}>
                    <Link className="footer__list-link" href={item.href}>
                      {t(`footer.appleWallet.${item.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__list-col-row-2">
              <h5 className="footer__list-title">
                {t(`footer.account.${account.title}`)}
                {!hideAccount ? (
                  <Image
                    className="footer__list-title-switch-close"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideAccount(!hideAccount)}
                  />
                ) : (
                  <Image
                    className="footer__list-title-switch"
                    priority
                    src={arrowDown}
                    alt="arrow"
                    onClick={() => setHideAccount(!hideAccount)}
                  />
                )}
              </h5>
              <ul
                className={classNemes("footer__list-section", {
                  ["footer__list-section--hide"]: hideAccount,
                })}
              >
                {account.links.map((item) => (
                  <li className="footer__list-item" key={item.title}>
                    <Link className="footer__list-link" href={item.href}>
                      {t(`footer.account.${item.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-row">
            <div className="footer__bottom-copy">
              Copyright &copy; 2023 Apple Inc. {t("footer.copyRights")}
            </div>
            <div className="footer__bottom-links">
              {legalLinks.map((link, idx, arr) => {
                return (
                  <>
                    <Link
                      className="footer__bottom-links-item"
                      key={link.title}
                      href={link.href}
                    >
                      {t(`footer.${link.title}`)}
                    </Link>
                    {idx !== arr.length - 1 ? "|" : ""}
                  </>
                );
              })}
            </div>
          </div>
          <div className="footer__bottom-lang">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
