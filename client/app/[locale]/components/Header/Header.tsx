
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="container">
      <h1>{t("header")}</h1>
    </header>
  );
}
