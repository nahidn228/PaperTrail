import { Loader2 } from "lucide-react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex  items-center justify-center py-10">
      <Loader2 className="h-8 w-8 animate-spin " />
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

export default Loading;
