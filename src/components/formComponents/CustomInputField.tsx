import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
type CustomFieldProps = {
  name: string;
  label?: string;
  control: any;
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
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-gray-500 ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              type={type}
              className={className}
              placeholder={placeholder} // ← وهنا استخدمناها
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
