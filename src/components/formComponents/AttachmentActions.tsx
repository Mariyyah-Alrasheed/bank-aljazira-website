import { Button } from "../ui/button";
import { Download, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

type AttachmentActionsProps = {
  onDownload?: () => void;
  onUpload?: () => void;
};

export default function AttachmentActions({
  onDownload,
  onUpload,
}: AttachmentActionsProps) {
  const { t } = useTranslation("step6");

  return (
    <div className="items-center mb-4 mt-4 border-1 w-1/3" dir="ltr">
      <h3 className="scroll-m-20 text-gray-600 text-sm tracking-tight border-b border-gray-200 p-1">
        {t("fileName")}
      </h3>
      <div className="flex flex-col p-4 gap-2 ">
        <Button
          type="button"
          className="bg-[#F58232] text-xs relative flex justify-center items-center rounded-[4px] h-8 px-2"
          onClick={onDownload}
        >
          {t("downloadTemplate")}
          <Download className="w-4 h-4 absolute left-2" />
        </Button>

        <Button
          type="button"
          className="bg-gray-800 text-xs relative flex justify-center items-center rounded-[4px] h-8 px-2"
          onClick={onUpload}
        >
          {t("attachDocument")}
          <Upload className="w-4 h-4 absolute left-2" />
        </Button>
      </div>
    </div>
  );
}
