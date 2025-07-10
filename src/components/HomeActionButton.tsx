// src/components/HomeActionButton.tsx

// src/components/HomeActionButton.tsx
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type HomeActionButtonProps = {
  to: string; // المسار اللي تنقل له
  icon: ReactNode; // الأيقونة بجزء الـ span البرتقالي
  children: ReactNode; // النص
  className?: string; // للتخصيص الإضافي
};

export default function HomeActionButton({
  to,
  icon,
  children,
  className = "",
}: HomeActionButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`border border-gray-300 hover:bg-gray-100 flex w-full shadow-xl rounded-xs ${className}`}
      onClick={() => navigate(to)}
    >
      {/* الخلفية البرتقالية 40% */}
      <span className="bg-[#F58232] w-2/5 flex items-center justify-center py-5 xl:py-7">
        {icon}
      </span>
      {/* النص 60% */}
      <span className="w-3/5 flex items-center justify-center text-center text-xl text-gray-700 p-8 md:p-3">
        {children}
      </span>
    </button>
  );
}
