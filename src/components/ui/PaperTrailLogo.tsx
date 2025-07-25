import { BookOpen } from "lucide-react";

const PaperTrailLogo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#4ECDC4]" />
      <span className="text-lg md:text-xl lg:text-2xl font-semibold text-[#152942] dark:text-white">
        PaperTrail
      </span>
    </div>
  );
};

export default PaperTrailLogo;
