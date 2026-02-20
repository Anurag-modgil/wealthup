import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const scoreBreakdownData = [
  {
    label: "Emergency Funds",
    current: 0,
    max: 20,
    widthClass: "w-3",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%)]",
  },
  {
    label: "Liquidity",
    current: 11,
    max: 20,
    widthClass: "w-[148px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_42%,rgba(255,188,112,1)_54%,rgba(255,188,112,1)_60%)]",
  },
  {
    label: "Investments",
    current: 20,
    max: 20,
    widthClass: "w-full",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%,rgba(255,188,112,1)_25%,rgba(255,188,112,1)_54%,rgba(126,255,126,1)_65%,rgba(126,255,126,1)_94%)]",
  },
  {
    label: "Health Insurance",
    current: 20,
    max: 20,
    widthClass: "w-full",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_13%,rgba(255,188,112,1)_25%,rgba(255,188,112,1)_54%,rgba(126,255,126,1)_65%,rgba(126,255,126,1)_94%)]",
  },
  {
    label: "Life Insurance",
    current: 7,
    max: 20,
    widthClass: "w-[86px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_60%,rgba(255,188,112,1)_97%)]",
  },
  {
    label: "Savings",
    current: 16,
    max: 20,
    widthClass: "w-[182px]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(255,105,105,1)_0%,rgba(255,105,105,1)_22%,rgba(255,188,112,1)_33%,rgba(255,188,112,1)_62%,rgba(126,255,126,1)_89%)]",
  },
];

export const FinancialIndependenceOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-7 p-6 relative w-full bg-slate-50 rounded-[20px] overflow-hidden shadow-[0px_0px_15px_#4a90e280,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
      <div className="absolute top-[-319px] left-[468px] w-[1440px] h-[1440px] rounded-[720px] rotate-[27.41deg] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(207,230,247,0.05)_0%,rgba(74,144,226,0.25)_50%,rgba(207,230,247,0.05)_100%)] opacity-10" />

      <div className="absolute top-[191px] -left-24 w-[1419px] h-[399px] bg-[#ffffff] rotate-[6.26deg] blur-[22px] opacity-80" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative w-full">
        <div className="relative w-full lg:w-[414px] h-[313px] flex-shrink-0">
          <img
            className="absolute top-[-169px] left-[-110px] w-[576px] h-[519px]"
            alt="Ellipse"
            src="/ellipse-20.svg"
          />

          <div className="absolute top-[17px] left-[7px] w-[400px] h-[294px]">
            <div className="absolute top-[35px] left-0 w-[398px] h-[221px] flex">
              <div className="w-[402px] h-[221px] relative">
                <img
                  className="absolute -top-7 -left-7 w-[454px] h-[277px]"
                  alt="Ellipse"
                  src="/ellipse-17.svg"
                />

                <img
                  className="absolute top-[17px] left-[22px] w-[352px] h-[181px]"
                  alt="Ellipse stroke"
                  src="/ellipse-18--stroke-.svg"
                />

                <img
                  className="absolute top-14 left-[22px] w-[82px] h-[142px]"
                  alt="Ellipse"
                  src="/ellipse-19.svg"
                />

                <img
                  className="absolute top-[38px] left-[271px] w-[27px] h-8"
                  alt="Line"
                  src="/line-123.svg"
                />

                <div className="absolute top-[62px] left-[140px] [font-family:'Inter',Helvetica] font-bold text-[#ff6a6a] text-[80px] tracking-[0] leading-[normal]">
                  43
                </div>

                <div className="absolute top-[162px] left-[85px] [font-family:'Urbanist',Helvetica] font-semibold text-[#294f7c] text-[19px] text-center tracking-[0.95px] leading-[normal]">
                  Current WealthUp Score
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-center absolute top-0 left-[189px] shadow-shadow-m">
              <Card className="bg-white rounded-lg border-0 shadow-none">
                <CardContent className="px-3 py-2">
                  <p className="w-[168px] [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[14px]">
                    <span className="text-[#4b4b4b] leading-5">You need </span>
                    <span className="font-bold text-[#4b4b4b] leading-5">
                      +27
                    </span>
                    <span className="text-[#4b4b4b] leading-5"> points </span>
                    <span className="text-[#4b4b4b] leading-5">to reach a</span>
                    <span className="font-bold text-[#00ba00] leading-5">
                      {" "}
                      good
                    </span>
                    <span className="text-[#4b4b4b] leading-5"> score of </span>
                    <span className="font-bold text-[#4b4b4b] leading-5">
                      70
                    </span>
                  </p>
                </CardContent>
              </Card>

              <img
                className="relative flex-[0_0_auto]"
                alt="Div"
                src="/div.svg"
              />
            </div>

            <p className="absolute top-[276px] left-[114px] [font-family:'Urbanist',Helvetica] font-normal text-base tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="italic text-[#47678d]">Better than</span>
              <span className="font-light italic text-[#47678d]"> </span>
              <span className="font-bold italic text-[#47678d]">46%</span>
              <span className="italic text-[#47678d]"> of peers</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[746px] items-start justify-center gap-8 relative">
          <div className="inline-flex flex-col items-start gap-3 relative">
            <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Financial independence age
            </h2>

            <div className="flex w-full max-w-[484px] items-center relative">
              <Card className="flex flex-col w-[210px] h-[131px] items-center justify-center gap-2.5 px-2 py-3 bg-[#f8f8f8] rounded-[8px_0px_0px_8px] border-t border-b border-l border-[#ffffff] shadow-[0px_0px_24px_#4a90e240]">
                <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-semibold text-[#828282] text-sm text-center tracking-[0.70px] leading-[normal]">
                    Current Trajectory
                  </p>

                  <p className="text-[#606060] [font-family:'Urbanist',Helvetica] font-bold text-3xl text-center tracking-[1.50px] leading-[normal] whitespace-nowrap">
                    65
                  </p>

                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-normal text-[#7c7c7c] text-xs text-center tracking-[0.60px] leading-[normal]">
                    Based on current savings you have
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col w-[210px] items-center justify-center gap-2.5 px-2 py-3 bg-[#eaf4fb] rounded-[0px_8px_8px_0px] border border-[#ffffff] shadow-[0px_0px_24px_#4a90e240]">
                <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
                  <p className="w-[150px] [font-family:'Urbanist',Helvetica] font-semibold text-[#307ed9] text-sm text-center tracking-[0.70px] leading-[normal]">
                    Your Potential
                  </p>

                  <p className="text-[#294f7c] [font-family:'Urbanist',Helvetica] font-bold text-3xl text-center tracking-[1.50px] leading-[normal] whitespace-nowrap">
                    38
                  </p>

                  <p className="w-[163px] [font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xs text-center tracking-[0.60px] leading-[normal]">
                    By following our personalized roadmap
                  </p>
                </CardContent>
              </Card>

              <img
                className="absolute top-[9px] left-[210px] w-px h-[114px] object-cover"
                alt="Line"
                src="/line-129.svg"
              />

              <div className="inline-flex items-center gap-2 absolute top-[47px] left-[148px]">
                <Badge className="relative w-[103.58px] h-[23.6px] z-[1] shadow-[-3.87px_5.24px_10.49px_-1.31px_#1b212c12] bg-[#00ba00] hover:bg-[#00ba00] rounded-[5.24px_0.2px_0.2px_5.24px] px-[7.87px] py-[5.24px]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[10px] tracking-[0] leading-[13.1px] whitespace-nowrap">
                    <span className="font-bold text-[#ffffff]">✨ 27</span>
                    <span className="font-semibold text-[#ffffff]">
                      {" "}
                      years sooner !
                    </span>
                  </span>
                </Badge>

                <img
                  className="relative w-[26.4px] h-[34.49px] mt-[-2.62px] mb-[-7.87px] z-0"
                  alt="Arrow"
                  src="/arrow.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 relative w-full">
            <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-[#294f7c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Your score breakdown
            </h2>

            <div className="flex flex-col items-start gap-5 relative w-full">
              <div className="flex flex-wrap items-center gap-[20px] pl-2 pr-0 py-0 relative w-full">
                {scoreBreakdownData.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-3 relative flex-1 min-w-[180px]"
                  >
                    <div className="flex items-center justify-between relative w-full">
                      <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-[#294f7c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </h3>

                      <p className="[font-family:'Urbanist',Helvetica] font-light text-[#294f7c] text-sm tracking-[0] leading-[normal]">
                        {item.current} / {item.max}
                      </p>
                    </div>

                    <div className="relative w-full h-4">
                      {item.current < item.max && (
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#f7f7f7] rounded-[30px] shadow-[inset_0px_0px_4px_#00000014] opacity-80" />
                      )}
                      <div
                        className={`relative ${item.widthClass} h-4 rounded-[30px] ${item.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-[20px] pl-2 pr-0 py-0 relative w-full">
                {scoreBreakdownData.slice(3, 6).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-3 relative flex-1 min-w-[180px]"
                  >
                    <div className="flex items-center justify-between relative w-full">
                      <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-[#294f7c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </h3>

                      <p className="[font-family:'Urbanist',Helvetica] font-light text-[#294f7c] text-sm tracking-[0] leading-[normal]">
                        {item.current} / {item.max}
                      </p>
                    </div>

                    <div className="relative w-full h-4">
                      {item.current < item.max && (
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#f7f7f7] rounded-[30px] shadow-[inset_0px_0px_4px_#00000014] opacity-80" />
                      )}
                      <div
                        className={`relative ${item.widthClass} h-4 rounded-[30px] ${item.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
