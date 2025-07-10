import { useTranslation } from "react-i18next";
import AttachmentActions from "@/components/formComponents/AttachmentActions";
import { TypographyH3 } from "@/components/Typography";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;

      const file = target.files?.[0];
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
      <p className="text-gray-500 text-xs xl:text-lg">{t("instructions")}</p>

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

      <div className="flex mb-4 items-center gap-1">
        <FormField
          control={form.control}
          name="checkbox"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <label className="flex items-center gap-2 cursor-pointer ">
                  <input
                    type="checkbox"
                    {...field}
                    checked={field.value}
                    className=" appearance-none
                  w-5 h-5
                  border-2 border-orange-500
                  checked:bg-orange-500 checked:border-orange-500
                  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500
                  transition-colors
                  cursor-pointer"
                  />
                  <p>{t("checkboxLabel")}</p>
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

{
  /*         
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
        /> */
}
