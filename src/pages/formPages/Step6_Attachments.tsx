import { useTranslation } from "react-i18next";
import AttachmentActions from "@/components/formComponents/AttachmentActions";
import { TypographyH3 } from "@/components/Typography";
import { Controller, useFormContext } from "react-hook-form";

export default function Step6_Attachments() {
  const form = useFormContext();
  const { t, i18n } = useTranslation("step6");
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const handleDownload = () => {
    const data = form.getValues();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "form-data.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        console.log("📄 تم اختيار الملف:", file.name);
        alert(`${t("attachmentsTitle")}: ${file.name}`);
      }
    };

    input.click();
  };

  return (
    <div dir={dir}>
      <TypographyH3 text={t("attachmentsTitle")} className="border-none pb-0" />
      <p className="text-gray-500 text-xs">{t("instructions")}</p>

      <div className="flex mb-4 items-center justify-between gap-4">
        <AttachmentActions
          onDownload={handleDownload}
          onUpload={handleUpload}
        />
        <AttachmentActions
          onDownload={handleDownload}
          onUpload={handleUpload}
        />
        <AttachmentActions
          onDownload={handleDownload}
          onUpload={handleUpload}
        />
      </div>

      {form.formState.errors.checkbox && (
        <p className="text-red-500 text-xs">{t("checkboxError")}</p>
      )}

      <div className="flex mb-4 items-center gap-1">
        <Controller
          name="checkbox"
          control={form.control}
          render={({ field }) => (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="checkbox"
                {...field}
                checked={field.value}
                className="
                  appearance-none
                  w-6 h-6
                  border-2 border-orange-500
                  rounded
                  checked:bg-orange-500 checked:border-orange-500
                  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500
                  transition-colors
                  cursor-pointer
                "
              />
              <p className="text-gray-500 text-sm">{t("checkboxLabel")}</p>
            </label>
          )}
        />
      </div>
    </div>
  );
}
