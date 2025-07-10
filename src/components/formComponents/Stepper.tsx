// src/components/Stepper.tsx
import { cn } from "../../lib/utils.ts";
import { useTranslation } from "react-i18next";

// const steps = [
//   "معلومات العميل",
//   "معلومات الأهلية المالية",
//   "معلومات الأهلية العامة",
//   "معلومات الأهلية التقييمية",
//   "تحقق من أهلية العميل",
//   "المرفقات المطلوبة",
// ];

export default function Stepper({ currentStep = 0 }: { currentStep: number }) {
  const { t, i18n } = useTranslation("form");
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const steps = t("steps", { returnObjects: true }) as string[];

  return (
    <div className="w-full flex flex-col gap-3 text-center xl:mb-4" dir={dir}>
      <div className="flex flex-wrap w-full text-[11px] xl:text-base">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div
              className={cn(
                "py-2 xl:py-3 border-b-4 pe-8 xl:pe-12 ml-0.5",
                index === currentStep
                  ? "border-[#F05030] text-[#F05030] font-semibold"
                  : "border-gray-300 text-gray-500"
              )}
            >
              {`${index + 1}. ${step}`}
            </div>
            {index < steps.length - 1 && (
              <span className="text-gray-300"> </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
