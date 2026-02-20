import { CheckCircle2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const WealthScoreSummarySection = (): JSX.Element => {
  const userData = {
    name: "Ankit",
    age: 28,
    greeting: "Good Morning",
    message: "your income is strong, but your wealth efficiency is lagging.",
  };

  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-1">
        <h1 className="[font-family:'Inter',Helvetica] font-normal text-[#294f7c] text-[28px] tracking-[0] leading-normal">
          {userData.greeting},{" "}
          <span className="font-bold">{userData.name}!</span>
        </h1>

        <p className="[font-family:'Inter',Helvetica] font-normal text-[#294f7c] text-[22px] tracking-[0] leading-normal">
          At <span className="font-bold">{userData.age}</span>,{" "}
          {userData.message}
        </p>
      </div>

      <Badge className="inline-flex items-center gap-2 pl-4 pr-5 py-3 bg-[#e2ffe2] rounded-[80px] shadow-[0px_2px_5.9px_#0000000d] hover:bg-[#e2ffe2] border-0">
        <CheckCircle2Icon className="w-6 h-6 text-[#088308]" />
        <span className="[font-family:'Inter',Helvetica] font-normal text-[#088308] text-lg tracking-[0] leading-normal whitespace-nowrap">
          Verified Analysis
        </span>
      </Badge>
    </section>
  );
};
