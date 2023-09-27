"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next-intl/link";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setLocale } from "../../../store/productSlice";
import { useRouter } from "next/router";
import './LangSwitcher.scss';

export default function LangSwitcher() {
  

  const { locale } = useAppSelector((state) => state.products);
  // const dispatch = useAppDispatch();
  // const { pathname, asPath, query } = router;
  // const [selectedLang, setSelectedLang] = useState("");
  // const langRef = useRef('');

  // const url = new URL(`${window.location.href}${selectedLang}`);

  // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const lang = e.target.value;
  //   setSelectedLang(lang);
  //   langRef.current = lang;
  //   dispatch(setLocale(lang));
  //   window.defaultLang = lang;

  //   // window.history.pushState(null, '', url);
  //   // console.log('history =>', window.location.href)

  //   // router.push("/", "/", { locale: selectedLang });

  //   // router.reload();
  // };



  // useEffect(() => {
  //   const currUrl = window.location.href;
  //   const urlArr = currUrl.split('/');
  //   const baseUrlArr = urlArr.map((part, index, arr) => {
  //     if (index !== arr.length - 1) return part;
  //   });
  //   const urlStr = baseUrlArr.join('/');
  //   console.log('lang =>', selectedLang)
  //   console.log(urlArr[urlArr.length - 1])
  //   const url = new URL(`${urlStr}${selectedLang}`);
  //   window.history.pushState(null, '', url);
  //   if (langRef.current !== urlArr[urlArr.length - 1] &&  urlArr[urlArr.length - 1] === '') {
  //     // window.location.reload()

  //   }
  // }, [langRef.current])

  return (
    <div>
      {/* <select onChange={handleSelect} value={langRef.current}>
        <option selected={langRef.current === 'en'} value="en">EN</option>
        <option selected={langRef.current === 'ua'} value="ua">UA</option>
      </select> */}
      <Link className="lang__switch" href="/" locale="en">
        EN
      </Link>
      <span className="lang__divider">|</span>
      <Link className="lang__switch" href="/" locale="ua">
        UA
      </Link>
    </div>
  );
}
