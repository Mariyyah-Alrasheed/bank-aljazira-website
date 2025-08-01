import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="    bottom-0 left-0 w-full p-4 xl:p-8 
        shadow bg-[#424242] text-white 
        border-t-5 border-t-[#F05030] 
        text-center text-xs xl:text-lg 
        z-50"
    >
      {t("copyright", { year })}
    </footer>
  );
}
