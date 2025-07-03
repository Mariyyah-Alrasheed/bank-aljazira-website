import CloseButton from "./CloseButton";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type CardHeaderWithCloseProps = {
  text?: string;
  className?: string;
  classNameHeader?: string;
};

export default function CardHeaderWithClose({
  text,
  className,
  classNameHeader,
}: CardHeaderWithCloseProps) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      className={cn(
        "text-sm border-b-2 flex justify-between items-center w-full  font-semibold text-gray-700",
        className
      )}
      dir={dir}
    >
      <h1
        className={cn(
          i18n.language === "ar" ? "mr-2" : "ml-2",
          classNameHeader
        )}
      >
        {text}
      </h1>
      <CloseButton />
    </div>
  );
}
