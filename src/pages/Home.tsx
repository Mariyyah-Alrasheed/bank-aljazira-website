import { useTranslation } from "react-i18next";
import SearchDocIcon from "../assets/icons/SearchDocIcon";
import bankImage from "../assets/images/bank-aljazerah.jpg";
import HomeActionButton from "@/components/HomeActionButton";
import { ListChecks } from "lucide-react";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <div className="flex flex-row ">
        <div className="w-1/2  min-h-124 relative">
          <img
            src={bankImage}
            alt={t("bankImageAlt")}
            className="w-full h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-black/50">
            <div className="p-14">
              <h1 className="text-white/70 text-3xl ">{t("title")}</h1>
              <p className="text-white/70 text-md pt-4">{t("description")} </p>
            </div>
          </div>
        </div>
        {/* القسم الأيسر – الأزرار */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center gap-7 p-8">
          <div className="flex flex-col gap-10 w-full max-w-xs">
            <HomeActionButton
              to="/form/customer-info"
              icon={<ListChecks className="w-10 h-10 text-white" />}
            >
              {t("loanRequestButton")}
            </HomeActionButton>
            <HomeActionButton
              to="/past-requests"
              icon={<SearchDocIcon className="w-10 h-10 text-white" />}
            >
              {t("pastRequestsButton")}
            </HomeActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
