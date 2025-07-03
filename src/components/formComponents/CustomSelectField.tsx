import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
};

type CustomSelectFieldProps = {
  name: string;
  label: string;
  control: any;
  options: Option[];
  placeholder?: string;
  required?: boolean;
};

export default function CustomSelectField({
  name,
  label,
  control,
  options,
  placeholder = " - ",
  required = false,
}: CustomSelectFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-gray-500 ml-1">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className="w-full h-7 px-3 py-1 text-base border border-input rounded-[6px] bg-transparent shadow-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none placeholder:text-muted-foreground transition-colors"
                dir="rtl"
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
