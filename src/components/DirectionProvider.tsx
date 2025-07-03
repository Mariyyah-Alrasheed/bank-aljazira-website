import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language.startsWith("ar") ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return <>{children}</>;
}
