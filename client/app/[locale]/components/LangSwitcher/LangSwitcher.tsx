import Link from "next-intl/link";
import './LangSwitcher.scss';

export default function LangSwitcher() {
  return (
    <div>
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
