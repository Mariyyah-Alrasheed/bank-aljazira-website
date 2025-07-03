import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import congratImage from "@/assets/images/congrats_image.png";
import { Switch } from "@/components/ui/switch";
import CustomInputField from "@/components/formComponents/CustomInputField";

export default function Step5_Verification() {
  const form = useFormContext();
  const { t, i18n } = useTranslation("step5");

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const maxAmount = "0.00";

  return (
    <div
      className="flex flex-col items-center gap-4 w-full max-w-4xl"
      dir={dir}
    >
      <div className="w-full max-w-4xl flex flex-col items-center gap-2">
        <img
          src={congratImage}
          alt={t("congratsAlt")}
          className="w-2/5 h-23 object-cover"
        />
        <p className="text-gray-600 text-center">
          {t("prequalifiedMessage", { maxAmount })}
        </p>
        <p className="text-gray-600 text-center font-bold">
          {t("enterAmountMessage")}
        </p>
      </div>

      <div className="border-b border-gray-300 flex justify-between w-full max-w-[450px] pb-4 px-4 min-h-[90px]">
        <div className="flex flex-col gap-2 justify-center">
          <CustomInputField
            type="number"
            name="topPrice"
            placeholder="0.00"
            control={form.control}
            className="font-bold text-xl text-gray-300 px-2 py-1 text-right border-0 lg:text-xl"
          />
          <p className="text-sm text-gray-400 font-bold">
            {t("maxLimitLabel", { maxAmount })}
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-xl px-2 py-1 text-right text-gray-300 font-bold">
            {t("currency")}
          </span>
          <p className="text-sm text-gray-300 font-bold">
            {t("currencyLabel")}
          </p>
        </div>
      </div>

      <div className="border-b border-gray-300 flex justify-between w-full max-w-[450px] pb-4 px-4">
        <p className="text-sm text-gray-500 font-bold">{t("maxValueLabel")}</p>
        <Switch
          className="bg-[#F58232] text-orange rounded-full cursor-pointer"
          onClick={() => alert(t("verificationAlert"))}
        />
      </div>
    </div>
  );
}
