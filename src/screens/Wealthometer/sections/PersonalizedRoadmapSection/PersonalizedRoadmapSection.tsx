import { LockIcon, ZapIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const savingAmounts = [
  { value: "₹500", selected: true },
  { value: "₹1,000", selected: false },
  { value: "₹5,000", selected: false },
  { value: "₹6,000", selected: false },
];

const recommendedFunds = [
  {
    logo: "/image-11.png",
    name: "HDFC Mid-Cap Fund",
    returns: "26.6% (3Y)",
    selected: false,
  },
  {
    logo: "/image-11-1.png",
    name: "Bandhan Small Ca...",
    returns: "32% (3Y)",
    selected: true,
  },
];

const steps = [
  {
    stepLabel: "Step 1: Critical",
    stepLabelColor: "text-[#ff0000]",
    title: "Build your safety net (Emergency fund)",
    description:
      "Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months.",
    buttonText: "Start Investing Today",
    points: "+20 pts",
    isActive: true,
    bgColor: "bg-[#ffffff]",
    borderColor: "border-[#294f7c]",
    showContent: true,
  },
  {
    stepLabel: "Step 2",
    stepLabelColor: "text-[#686868]",
    title: "Optimize investments",
    description:
      "Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile.",
    buttonText: "Begin Investing",
    points: "+12 pts",
    isActive: false,
    bgColor: "bg-[#f6f6f6]",
    borderColor: "border-[#dddddd]",
    showContent: false,
  },
  {
    stepLabel: "Step 3",
    stepLabelColor: "text-[#686868]",
    title: "Maximize growth",
    description:
      "Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles.",
    buttonText: "Analyse your Mutual Funds",
    points: "+8 pts",
    isActive: false,
    bgColor: "bg-[#f6f6f6]",
    borderColor: "border-[#dddddd]",
    showContent: false,
  },
];

export const PersonalizedRoadmapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-7 p-6 w-full bg-slate-50 rounded-[20px] overflow-hidden shadow-[0px_0px_15px_#4a90e280,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
      <header className="flex items-center gap-8 w-full">
        <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-2xl tracking-[0] leading-[normal]">
          <span className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-2xl tracking-[0]">
            Your personalized roadmap to{" "}
          </span>
          <span className="font-bold">70+</span>
          <span className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-2xl tracking-[0]">
            &nbsp;
          </span>
          <span className="font-bold">WealthUp </span>
          <span className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-2xl tracking-[0]">
            score
          </span>
        </h2>
      </header>

      <div className="flex flex-wrap items-start gap-5 w-full">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`flex flex-col w-full max-w-[405px] ${step.bgColor} rounded-[20px] overflow-hidden border ${step.borderColor} ${
              step.isActive
                ? "shadow-[0px_0px_12px_#294f7c26,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
                : "shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
            } backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]`}
          >
            <CardContent className="flex flex-col items-start gap-5 p-5">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="inline-flex items-center gap-4">
                  <span
                    className={`[font-family:'Urbanist',Helvetica] font-semibold ${step.stepLabelColor} text-xs tracking-[0.60px] leading-[normal] whitespace-nowrap`}
                  >
                    {step.stepLabel}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="w-full [font-family:'Inter',Helvetica] font-semibold text-[#374e69] text-lg tracking-[0] leading-[normal]">
                    {step.title}
                  </h3>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-[#4c6179] text-xs tracking-[0] leading-[17px]">
                    {step.description}
                  </p>
                </div>

                {step.showContent && (
                  <>
                    <div className="inline-flex items-end justify-center gap-2">
                      <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#374e69] text-sm text-center tracking-[0] leading-[normal]">
                        I can commit to saving
                      </span>
                      <Badge className="inline-flex items-center justify-center gap-2.5 px-1.5 py-[3px] bg-[#d1e2f680] rounded hover:bg-[#d1e2f680]">
                        <span className="text-[#294f7c] text-sm [font-family:'Urbanist',Helvetica] font-semibold text-center tracking-[0] leading-[normal]">
                          ₹500
                        </span>
                      </Badge>
                      <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#374e69] text-sm text-center tracking-[0] leading-[normal]">
                        monthly
                      </span>
                    </div>

                    <div className="inline-flex items-end justify-center gap-2 flex-wrap">
                      {savingAmounts.map((amount, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className={`px-3 py-1.5 h-auto ${
                            amount.selected
                              ? "bg-[#e6f2ff] border-[#294f7c] text-[#353535]"
                              : "bg-transparent border-[#d9d9d9] text-[#585858]"
                          } hover:bg-[#e6f2ff] hover:border-[#294f7c]`}
                        >
                          <span className="text-xs whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold text-center tracking-[0] leading-[normal]">
                            {amount.value}
                          </span>
                        </Button>
                      ))}
                      <div className="relative w-[87px] h-[21px] border-b border-[#294f7c]">
                        <Input
                          placeholder="Enter amount"
                          className="absolute inset-0 border-0 bg-transparent pl-3 pr-0 text-xs [font-family:'Urbanist',Helvetica] font-normal text-[#818181] placeholder:text-[#818181] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <span className="absolute top-0 left-0 text-[#585858] text-xs whitespace-nowrap [font-family:'Urbanist',Helvetica] font-semibold text-center tracking-[0] leading-[normal]">
                          ₹
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {step.showContent && (
                <div className="flex flex-col items-start gap-3 w-full relative">
                  <h4 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#374e69] text-sm text-center tracking-[0] leading-[normal]">
                    Recommended Funds (Top performers)
                  </h4>

                  <div className="flex items-start gap-2 w-full">
                    {recommendedFunds.map((fund, idx) => (
                      <Card
                        key={idx}
                        className={`flex items-start gap-2.5 px-1 py-2 flex-1 rounded border ${
                          fund.selected
                            ? "bg-[#e6f1ff] border-[#294f7c]"
                            : "bg-transparent border-[#d9d9d9]"
                        }`}
                      >
                        <CardContent className="flex items-start gap-2.5 p-0">
                          <img
                            className="w-[34px] h-6 object-contain"
                            alt={fund.name}
                            src={fund.logo}
                          />
                          <div className="inline-flex flex-col items-start justify-center gap-1">
                            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#353535] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                              {fund.name}
                            </span>
                            <span className="[font-family:'Urbanist',Helvetica] font-medium text-[#00ba00] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                              {fund.returns}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <img
                    className="absolute top-6 right-4 w-[49px] h-[54px]"
                    alt="Frame"
                    src="/frame-1.svg"
                  />
                </div>
              )}

              <div className="flex flex-col items-center gap-4 w-full">
                <Button
                  className={`flex items-center justify-center gap-2.5 px-6 py-3 w-full rounded-[90px] bg-[linear-gradient(90deg,rgba(41,79,124,1)_0%,rgba(75,144,226,1)_100%)] hover:opacity-90 ${
                    !step.isActive ? "opacity-50" : ""
                  }`}
                  disabled={!step.isActive}
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {step.buttonText}
                  </span>
                  <Badge className="w-[70px] h-[30px] bg-slate-50 rounded-[60px] border-[0.5px] border-[#00ba00] hover:bg-slate-50 flex items-center justify-center">
                    <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#00ba00] text-sm tracking-[0] leading-[normal]">
                      {step.points}
                    </span>
                  </Badge>
                </Button>

                <div className="inline-flex items-center justify-center gap-1 rounded-[90px]">
                  {step.isActive ? (
                    <>
                      <ZapIcon className="w-5 h-5 text-[#294f7c]" />
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#294f7c] text-sm tracking-[0] leading-[normal]">
                        <span className="font-bold">Express setup</span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#294f7c] text-sm tracking-[0]">
                          : Complete in under 3 minutes
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <LockIcon className="w-5 h-5 text-[#4c4c4c]" />
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#4c4c4c] text-sm tracking-[0] leading-[normal]">
                        Complete step 1 (critical) to unlock
                      </p>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
