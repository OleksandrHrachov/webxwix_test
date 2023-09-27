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

export default function Footer() {
  const t = useTranslations();
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
            </h5>
            <ul className="footer__list-section">
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
            </h5>
            <ul className="footer__list-section">
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
              </h5>
              <ul className="footer__list-section">
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
              </h5>
              <ul className="footer__list-section">
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
              </h5>
              <ul className="footer__list-section">
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
            </h5>
            <ul className="footer__list-section">
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
              </h5>
              <ul className="footer__list-section">
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
              </h5>
              <ul className="footer__list-section">
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
