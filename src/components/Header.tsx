import { useTranslation } from "react-i18next";
import logo from "../assets/images/bank-aljazerah-logo.png";

export default function Header() {
  const { t, i18n } = useTranslation("header");

  const toggleLanguage = () => {
    const newLanguage = i18n.language.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="w-full p-4 shadow flex items-center justify-between bg-[#424242] text-white border-b-5 border-solid border-b-[#F05030] xl:p-7">
      {/* الشعار */}
      <a href="/" className="flex items-center">
        <img src={logo} alt={t("logoAlt")} className="h-8 xl:h-12" />
      </a>

      {/* زر تغيير اللغة */}
      <button
        onClick={toggleLanguage}
        className="text-sm xl:text-xl text-white hover:underline"
      >
        {t("language")}
      </button>
    </header>
  );
}
