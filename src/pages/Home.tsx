import { useTranslation } from "react-i18next";
import SearchDocIcon from "../assets/icons/SearchDocIcon";
import bankImage from "../assets/images/bank-aljazerah.jpg";
import HomeActionButton from "@/components/HomeActionButton";
import { ListChecks } from "lucide-react";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      {/* القسم الأيمن - صورة وخلفية */}
      <div className="relative h-64 lg:h-auto">
        <img
          src={bankImage}
          alt={t("bankImageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-start">
          <div className="p-6 lg:p-14">
            <h1 className="text-white/70 text-2xl lg:text-3xl xl:text-6xl">
              {t("title")}
            </h1>
            <p className="text-white/70 text-sm lg:text-md pt-4 xl:text-2xl">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
      {/* القسم الأيسر – الأزرار */}
      <div className="bg-white flex flex-col justify-center items-center gap-7 p-6 lg:p-8">
        <div className="flex flex-col gap-10 w-full max-w-xs xl:max-w-md">
          {" "}
          {/* توسعة فقط في XL */}
          <HomeActionButton
            to="/form/customer-info"
            icon={
              <ListChecks className="w-10 h-10 xl:w-16 xl:h-16 text-white" />
            }
          >
            <span className="text-base xl:text-2xl">
              {t("loanRequestButton")}
            </span>
          </HomeActionButton>
          <HomeActionButton
            to="/past-requests"
            icon={
              <SearchDocIcon className="w-10 h-10 xl:w-16 xl:h-16 text-white" />
            }
          >
            <span className="text-base xl:text-2xl">
              {t("pastRequestsButton")}
            </span>
          </HomeActionButton>
        </div>
      </div>
    </div>
  );
}
