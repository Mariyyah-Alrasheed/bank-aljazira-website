import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function CloseButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      className="bg-white text-gray-600 text-xl px-1 py-1 hover:text-red-700 hover:bg-gray-100 rounded-full xl:text-3xl xl:px-2 xl:py-2"
      onClick={() => navigate("/")}
    >
      <X className="w-4 h-4" />
    </Button>
  );
}
