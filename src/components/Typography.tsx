type TypographyProps = {
  text: string;
  className?: string;
  dir?: string;
};

export function TypographyH3({ text, className, dir }: TypographyProps) {
  return (
    <h3
      dir={dir}
      className={`scroll-m-20 text-gray-600 text-sm tracking-tight border-b border-gray-200 pb-2 my-3 xl:text-2xl ${
        className ?? ""
      }`}
    >
      {text}
    </h3>
  );
}
