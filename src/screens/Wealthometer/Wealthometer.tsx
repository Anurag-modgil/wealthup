import { FinancialIndependenceOverviewSection } from "./sections/FinancialIndependenceOverviewSection";
import { PersonalizedRoadmapSection } from "./sections/PersonalizedRoadmapSection/PersonalizedRoadmapSection";
import { WealthScoreSummarySection } from "./sections/WealthScoreSummarySection";

export const Wealthometer = (): JSX.Element => {
  return (
    <div className="bg-[linear-gradient(135deg,rgba(236,244,251,1)_0%,rgba(248,250,252,1)_100%)] w-full flex flex-col items-center">
      <img
        className="h-10 w-[126px] mt-7 object-cover"
        alt="Wealthup new"
        src="/wealthup-new-whitelogo-1.png"
      />

      <div className="flex flex-col items-center gap-8 w-full max-w-[1307px] px-4 mt-[54px] mb-8">
        <WealthScoreSummarySection />
        <FinancialIndependenceOverviewSection />
        <PersonalizedRoadmapSection />
      </div>
    </div>
  );
};
