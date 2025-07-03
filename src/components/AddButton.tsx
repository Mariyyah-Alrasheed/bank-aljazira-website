import { IoAddCircleSharp } from "react-icons/io5";

type AddButtonProps = {
  text: string;
  onClick?: () => void; // Optional click handler
};

export default function AddButton({ text, onClick }: AddButtonProps) {
  return (
    <div className="col-span-2 flex items-center gap-2">
      <button
        onClick={onClick}
        type="button"
        // disabled={!onClick} // Disable button if no onClick handler is provided
        className="flex items-center gap-2 hover:text-orange-500"
      >
        <IoAddCircleSharp className="text-orange-500 text-xl" />
        <span className="text-xs">{text}</span>
      </button>
    </div>
  );
}
