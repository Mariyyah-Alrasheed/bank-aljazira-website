import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

// type ControlType = FieldValues | FieldValues | undefined;

type CustomFieldProps = {
  name: string;
  label?: string;
  control: Control<FieldValues>;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string; // ← أضفناها هنا
};

export default function CustomInputField({
  name,
  label,
  control,
  type = "text",
  required = false,
  className,
  placeholder, // ← وهنا استقبلناها
}: CustomFieldProps) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="xl:text-base xl:my-3">
              {label}
              {required && <span className="text-gray-500 ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              dir={dir}
              {...field}
              type={type}
              className={`${className ?? ""} ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              placeholder={placeholder} // ← وهنا استخدمناها
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
