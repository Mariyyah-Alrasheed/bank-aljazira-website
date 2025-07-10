import { useForm, FormProvider } from "react-hook-form";
import CustomInputField from "@/components/formComponents/CustomInputField";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import CardHeaderWithClose from "@/components/CardHeaderWithClose";
import { useTranslation } from "react-i18next";

export default function PastRequests() {
  const searchForm = useForm();
  const { handleSubmit, control } = searchForm;
  type MatchType = {
    companyName: string;
    crNumber?: string;
    phoneNumber?: string;
    status?: string;
  } | null;

  const [match, setMatch] = useState<MatchType>(null);
  const { t, i18n } = useTranslation("pastRequests");

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  type FormValues = {
    companyName: string;
    commercialRegistration?: string;
    phoneNumber?: string;
    trackingNumber?: string;
    clientNumber?: string;
  };

  const onSubmit = (data: unknown) => {
    const formData = data as FormValues;
    const stored = localStorage.getItem("finalFormData");
    if (!stored) return alert(t("noSavedDataAlert"));

    const parsed = JSON.parse(stored);
    // تحقق إن البيانات كائن
    if (typeof parsed !== "object" || parsed === null) {
      alert(t("invalidDataAlert"));
      setMatch(null);
      return;
    }

    const match =
      parsed.companyName &&
      parsed.companyName
        .toLowerCase()
        .includes(formData.companyName.trim().toLowerCase())
        ? parsed
        : null;

    if (match) {
      alert(t("foundAlert", { companyName: match.companyName }));
      setMatch(match);
    } else {
      alert(t("notFoundAlert"));
      setMatch(null);
    }
  };

  return (
    <FormProvider {...searchForm}>
      <div className="text-right" dir="rtl">
        <CardHeaderWithClose text={t("pageTitle")} className="mb-12 xl:p-5" />

        <div className="mx-auto w-full max-w-4xl" dir={dir}>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomInputField
                name="companyName"
                label={t("companyNameLabel")}
                control={control}
                type="text"
                required
              />
              <CustomInputField
                label={t("commercialRegistrationLabel")}
                name="commercialRegistration"
                control={control}
                type="text"
              />
              <CustomInputField
                label={t("phoneNumberLabel")}
                name="phoneNumber"
                control={control}
                type="tel"
                required
              />
              <CustomInputField
                label={t("trackingNumberLabel")}
                name="trackingNumber"
                control={control}
                type="text"
                required
              />
              <CustomInputField
                label={t("clientNumberLabel")}
                name="clientNumber"
                control={control}
                type="text"
                required
              />
              {/* زر "التالي" */}
              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full h-7 xl:h-10 bg-[#F58232] text-white text-sm rounded-sm flex items-center justify-center"
                >
                  {t("searchButton")}
                </Button>
              </div>
            </div>
          </form>

          <table
            className="w-full mt-6 text-xs border-collapse border-b-1 "
            dir={dir}
          >
            <thead className="bg-gray-200 ">
              <tr className="bg-gray-100 ">
                <th className="px-4 py-2">{t("table.trackingNumber")}</th>
                <th className="px-4 py-2">{t("table.companyName")}</th>
                <th className="px-4 py-2">
                  {t("table.commercialRegistration")}
                </th>
                <th className="px-4 py-2">{t("table.phoneNumber")}</th>
                <th className="px-4 py-2">{t("table.clientNumber")}</th>
                <th className="px-4 py-2">{t("table.status")}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {match && (
                <tr key={match.companyName} className="">
                  <td className="px-4 py-2 text-sm">1234</td>
                  <td className="px-4 py-2 text-sm">{match.companyName}</td>
                  <td className="px-4 py-2 text-sm">{match.crNumber}</td>
                  <td className="px-4 py-2 text-sm">{match.phoneNumber}</td>
                  <td className="px-4 py-2 text-sm">CIF654321</td>
                  <td className="px-4 py-2 text-sm">
                    {match.status || t("defaultStatus")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </FormProvider>
  );
}
