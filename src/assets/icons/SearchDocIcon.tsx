import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const SearchDocIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 13.47V15H2V1h6v4h4v.56q.577.343.996.825L13 4L9 0H1v16h12v-1.53zM9 1l3 3H9z" />
      <path d="m14.78 12.72l-1.92-1.92a.7.7 0 0 0-.325-.179a3 3 0 0 0 .468-1.618a3 3 0 1 0-1.371 2.52c.02.136.083.248.169.337l1.92 1.92a.75.75 0 0 0 1.059-1.061zM10 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 10 11" />
    </svg>
  );
};

export default SearchDocIcon;
