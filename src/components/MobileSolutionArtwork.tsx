/* Figma's mobile artwork layers; card titles are supplied by Solutions. */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

export default function MobileSolutionArtwork({ index }: { index: number }) {
  const root = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / 390));
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  const Artwork = [SolutionArtwork0, SolutionArtwork1, SolutionArtwork2][index];
  return (
    <div ref={root} className="absolute inset-0 sm:hidden" aria-hidden>
      <div className="absolute top-0 left-0 h-[374px] w-[390px] origin-top-left" style={{ transform: `scale(${scale})` }}>
        <Artwork />
      </div>
    </div>
  );
}
function SolutionArtwork0() {
const imgGroup = "/landing/mobile-solutions/0-d7625.svg";
const imgGroup1 = "/landing/mobile-solutions/0-ec2b7.svg";
const imgCollectGraphic = "/landing/mobile-solutions/0-a7f61.svg";

  return (
    <div className="bg-[#ff884c] overflow-clip relative rounded-[16px] size-full" data-node-id="649:7800" data-name="Container">
      <div className="absolute contents inset-[-3.03%_-17.01%_-0.08%_-1.45%]" data-node-id="652:10852" data-name="Mask group">
        <div className="absolute inset-[-23.17%_-44.07%_-5.82%_-11.65%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[39.786px_75.314px] mask-size-[462.02px_385.641px]" data-node-id="652:10855" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
          <div className="absolute inset-[-0.1%_0]">
            <img alt="" className="block max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[0_0_25.13%_0]" data-node-id="649:7802" data-name="collect-graphic">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollectGraphic} />
      </div>
      
    </div>
  );
}

function SolutionArtwork1() {
const imgPasteImageHere = "/landing/mobile-solutions/1-9824c.png";
const imgGroup = "/landing/mobile-solutions/1-79eac.svg";
const imgGroup1 = "/landing/mobile-solutions/1-ee426.svg";
const imgShape = "/landing/mobile-solutions/1-9fff8.svg";
const imgVector = "/landing/mobile-solutions/1-71bd8.svg";
const imgVector1 = "/landing/mobile-solutions/1-d06cd.svg";
const imgVector2 = "/landing/mobile-solutions/1-fe82a.svg";
const imgVector3 = "/landing/mobile-solutions/1-3f11a.svg";
const imgVector4 = "/landing/mobile-solutions/1-20cc5.svg";
const imgVector5 = "/landing/mobile-solutions/1-09b54.svg";
const imgLogos = "/landing/mobile-solutions/1-daaa5.svg";

  return (
    <div className="bg-black overflow-clip relative rounded-[16px] size-full" data-node-id="652:10961" data-name="Container">
      <div className="absolute contents inset-[-30.22%_-20.94%_-24.6%_-4.62%]" data-node-id="652:11360" data-name="Mask group">
        <div className="absolute inset-[-60.46%_-49.61%_-33.21%_-15.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42.165px_113.081px] mask-size-[489.658px_579.028px]" data-node-id="652:11363" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[619px] left-[calc(50%-0.5px)] mix-blend-soft-light top-[-344px] w-[643px]" data-node-id="652:11468" data-name="Shape">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape} />
      </div>
      <div className="absolute h-[326px] left-[106px] top-[13px] w-[230px]" data-node-id="652:11469" data-name="mockup">
        <div className="absolute flex h-[61.929px] items-center justify-center left-[40px] top-[253px] w-[156.48px]" data-node-id="652:11470">
          <div className="flex-none rotate-15 scale-y-97 skew-x-15">
            <div className="bg-black blur-[8px] h-[20px] relative rounded-[12px] w-[162px]" data-name="card shadow" />
          </div>
        </div>
        <div className="absolute flex h-[299.929px] items-center justify-center left-[46px] top-[-29px] w-[156.48px]" data-node-id="652:11471">
          <div className="flex-none rotate-15 scale-y-97 skew-x-15">
            <div className="bg-[#222] h-[258px] relative rounded-bl-[15px] rounded-br-[12px] rounded-tl-[15px] rounded-tr-[15px] w-[162px]" data-name="card volume" />
          </div>
        </div>
        <div className="absolute flex h-[299.929px] items-center justify-center left-[40px] top-[-25px] w-[156.48px]" data-node-id="652:11472">
          <div className="flex-none rotate-15 scale-y-97 skew-x-15">
            <div className="bg-[#020202] border border-solid border-[#2d2d2d] h-[258px] overflow-clip relative rounded-[12px] w-[162px]" data-name="Card">
              <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-sans font-bold leading-[normal] left-[80.5px] not-italic text-[16px] text-[transparent] text-center top-[207px] tracking-[-0.64px] whitespace-nowrap" data-node-id="I652:11472;9:2341" style={{ backgroundImage: "linear-gradient(114.41746548792041deg, rgb(28, 28, 28) 9.5436%, rgb(255, 255, 255) 49.6%, rgb(48, 48, 48) 105.26%)" }}>
                AI AGENT
              </p>
              <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-sans font-bold justify-end leading-[0] left-[80px] not-italic text-[#474747] text-[6px] text-center top-[245px] tracking-[-0.24px] w-[138px]" data-node-id="I652:11472;9:2342">
                <p className="leading-[normal]">Cybersecurity Services</p>
              </div>
              <div className="absolute h-[192px] left-[3px] rounded-[9px] top-[3px] w-[154px]" data-node-id="I652:11472;9:2343" data-name="{paste image here}">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full" src={imgPasteImageHere} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.71)] border border-[#42e7aa] border-solid h-[35px] left-[91px] overflow-clip rounded-[35px] top-[160px] w-[181px]" data-node-id="652:11473">
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sora font-light justify-center leading-[0] left-[13px] text-[8px] text-white top-[17px] whitespace-nowrap" data-node-id="652:11474">
            <p className="leading-[normal]">Data has been processed.</p>
          </div>
          <div className="absolute h-[22px] left-[145px] overflow-clip right-[12px] top-[6px]" data-node-id="652:11475" data-name="SVG">
            <div className="absolute contents inset-[0_1.19%_1.19%_0]" data-node-id="652:11476" data-name="Clip path group">
              <div className="absolute contents inset-[6.18%_7.36%_7.36%_6.18%]" data-node-id="652:11479" data-name="Group">
                <div className="absolute inset-[6.18%_66.03%_66.03%_6.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.359px_-1.359px] mask-size-[21.739px_21.739px]" data-node-id="652:11480" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[64.85%_66.03%_7.36%_6.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.359px_-14.266px] mask-size-[21.739px_21.739px]" data-node-id="652:11481" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[6.18%_7.36%_66.03%_64.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.266px_-1.359px] mask-size-[21.739px_21.739px]" data-node-id="652:11482" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[64.85%_7.36%_7.36%_64.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.266px_-14.266px] mask-size-[21.739px_21.739px]" data-node-id="652:11483" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
                <div className="absolute inset-[15.43%_19.72%_16.62%_18.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.076px_-3.394px] mask-size-[21.739px_21.739px]" data-node-id="652:11484" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[35px] left-[2px] overflow-clip rounded-[35px] top-[69px] w-[181px]" data-node-id="652:11485">
        <div className="absolute h-[16px] left-[9px] top-[10px] w-[38px]" data-node-id="652:11486" data-name="logos">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogos} />
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sora font-light justify-center leading-[0] left-[52px] text-[8px] text-black top-[18px] whitespace-nowrap" data-node-id="652:11487">
          <p className="leading-[normal]">Processing data from hubspot</p>
        </div>
      </div>
      
    </div>
  );
}

function SolutionArtwork2() {
const imgGroup = "/landing/mobile-solutions/2-79eac.svg";
const imgGroup1 = "/landing/mobile-solutions/2-ee426.svg";
const imgGroup2 = "/landing/mobile-solutions/2-6f2b4.svg";
const imgVector = "/landing/mobile-solutions/2-aba46.svg";
const imgGroup3 = "/landing/mobile-solutions/2-09bfd.svg";
const imgGroup4 = "/landing/mobile-solutions/2-4613f.svg";
const imgGroup5 = "/landing/mobile-solutions/2-75479.svg";
const imgGroup6 = "/landing/mobile-solutions/2-8c096.svg";
const imgGroup7 = "/landing/mobile-solutions/2-95cc3.svg";
const imgGroup8 = "/landing/mobile-solutions/2-1e821.svg";
const imgGroup9 = "/landing/mobile-solutions/2-d85b6.svg";
const imgGroup10 = "/landing/mobile-solutions/2-e5011.svg";
const imgGroup11 = "/landing/mobile-solutions/2-bba98.svg";
const imgGroup12 = "/landing/mobile-solutions/2-87ab8.svg";
const imgGroup13 = "/landing/mobile-solutions/2-50dfc.svg";
const imgGroup14 = "/landing/mobile-solutions/2-ffca9.svg";
const imgGroup15 = "/landing/mobile-solutions/2-5e538.svg";
const imgGroup16 = "/landing/mobile-solutions/2-0aa50.svg";
const imgGroup17 = "/landing/mobile-solutions/2-7d89b.svg";
const imgGroup18 = "/landing/mobile-solutions/2-bfd5f.svg";
const imgGroup19 = "/landing/mobile-solutions/2-faf7a.svg";
const imgGroup20 = "/landing/mobile-solutions/2-25027.svg";
const imgGroup21 = "/landing/mobile-solutions/2-14ac6.svg";
const imgGroup22 = "/landing/mobile-solutions/2-4f107.svg";
const imgGroup23 = "/landing/mobile-solutions/2-b66ef.svg";
const imgGroup24 = "/landing/mobile-solutions/2-585ca.svg";
const imgGroup25 = "/landing/mobile-solutions/2-9f9ec.svg";
const imgGroup26 = "/landing/mobile-solutions/2-b3b38.svg";
const imgGroup27 = "/landing/mobile-solutions/2-bb984.svg";
const imgVector1 = "/landing/mobile-solutions/2-9d9d1.svg";
const imgGroup28 = "/landing/mobile-solutions/2-5e5f4.svg";
const imgGroup29 = "/landing/mobile-solutions/2-63c48.svg";
const imgGroup30 = "/landing/mobile-solutions/2-58c81.svg";
const imgGroup31 = "/landing/mobile-solutions/2-f517b.svg";
const imgGroup32 = "/landing/mobile-solutions/2-13966.svg";
const imgGroup33 = "/landing/mobile-solutions/2-ed416.svg";
const imgGroup34 = "/landing/mobile-solutions/2-38437.svg";
const imgGroup35 = "/landing/mobile-solutions/2-a573d.svg";
const imgGroup36 = "/landing/mobile-solutions/2-32d79.svg";
const imgGroup37 = "/landing/mobile-solutions/2-23316.svg";
const imgGroup38 = "/landing/mobile-solutions/2-5855b.svg";
const imgGroup39 = "/landing/mobile-solutions/2-29ad1.svg";
const imgGroup40 = "/landing/mobile-solutions/2-b3afd.svg";
const imgGroup41 = "/landing/mobile-solutions/2-9eb47.svg";
const imgGroup42 = "/landing/mobile-solutions/2-14fbe.svg";
const imgVector2 = "/landing/mobile-solutions/2-988b3.svg";
const imgGroup43 = "/landing/mobile-solutions/2-ad19f.svg";
const imgGroup44 = "/landing/mobile-solutions/2-f414e.svg";
const imgGroup45 = "/landing/mobile-solutions/2-53b6e.svg";
const imgGroup46 = "/landing/mobile-solutions/2-550b9.svg";
const imgGroup47 = "/landing/mobile-solutions/2-db07d.svg";
const imgGroup48 = "/landing/mobile-solutions/2-3d2ee.svg";
const imgVector3 = "/landing/mobile-solutions/2-c0930.svg";

  return (
    <div className="bg-[#ff884c] overflow-clip relative rounded-[16px] size-full" data-node-id="652:11494" data-name="Container">
      
      <div className="absolute contents inset-[-27.54%_-19.91%_-27.28%_-5.64%]" data-node-id="652:11893" data-name="Mask group">
        <div className="absolute inset-[-57.78%_-48.58%_-35.89%_-16.45%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42.165px_113.081px] mask-size-[489.658px_579.028px]" data-node-id="652:11896" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
        </div>
      </div>
      <div className="absolute contents inset-[-11.22%_-57.2%_2.3%_-36.92%]" data-node-id="652:12001" data-name="store-illustration">
        <div className="absolute contents inset-[-0.97%_71.63%_71.51%_-18.31%]" data-node-id="652:12002" data-name="Group 2.2">
          <div className="absolute contents inset-[-0.97%_86.48%_74.01%_-18.31%]" data-node-id="652:12003" data-name="Group">
            <div className="absolute contents inset-[-0.97%_86.48%_79.91%_-9.38%]" data-node-id="652:12004" data-name="store-graphic">
              <div className="absolute inset-[-0.97%_86.48%_79.91%_-9.38%] opacity-40" data-node-id="652:12005">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
            <div className="absolute inset-[13.28%_97.91%_74.01%_-18.31%] opacity-40" data-node-id="652:12011" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div className="absolute contents inset-[12.99%_71.63%_71.51%_7.42%]" data-node-id="652:12012">
            <div className="absolute inset-[12.99%_88%_81.39%_7.42%] opacity-40" data-node-id="652:12013" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
            </div>
            <div className="absolute inset-[15.14%_84.68%_79.39%_10.86%] opacity-40" data-node-id="652:12017" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
            </div>
            <div className="absolute inset-[17.11%_81.42%_77.42%_14.12%] opacity-40" data-node-id="652:12021" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
            </div>
            <div className="absolute inset-[19.08%_78.16%_75.45%_17.38%] opacity-40" data-node-id="652:12025" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
            </div>
            <div className="absolute inset-[21.05%_74.89%_73.48%_20.64%] opacity-40" data-node-id="652:12029" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
            </div>
            <div className="absolute inset-[23.02%_71.63%_71.51%_23.9%] opacity-40" data-node-id="652:12033" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
            </div>
          </div>
        </div>
        <div className="absolute contents inset-[9.5%_90.25%_61.04%_-36.92%]" data-node-id="652:12037" data-name="Group 2.3">
          <div className="absolute contents inset-[9.5%_105.1%_63.54%_-36.92%]" data-node-id="652:12038" data-name="Group">
            <div className="absolute contents inset-[9.5%_105.1%_69.44%_-27.99%]" data-node-id="652:12039" data-name="store-graphic">
              <div className="absolute inset-[9.5%_105.1%_69.44%_-27.99%] opacity-40" data-node-id="652:12040">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
              </div>
            </div>
            <div className="absolute inset-[23.75%_116.52%_63.54%_-36.92%] opacity-40" data-node-id="652:12046" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div className="absolute contents inset-[23.46%_90.25%_61.04%_-11.19%]" data-node-id="652:12047">
            <div className="absolute inset-[23.46%_106.62%_70.92%_-11.19%] opacity-40" data-node-id="652:12048" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
            </div>
            <div className="absolute inset-[25.61%_103.3%_68.92%_-7.76%] opacity-40" data-node-id="652:12052" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
            </div>
            <div className="absolute inset-[27.58%_100.03%_66.95%_-4.5%] opacity-40" data-node-id="652:12056" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup12} />
            </div>
            <div className="absolute inset-[29.55%_96.77%_64.98%_-1.24%] opacity-40" data-node-id="652:12060" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
            </div>
            <div className="absolute inset-[31.52%_93.51%_63.01%_2.03%] opacity-40" data-node-id="652:12064" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup14} />
            </div>
            <div className="absolute inset-[33.49%_90.25%_61.04%_5.29%] opacity-40" data-node-id="652:12068" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} />
            </div>
          </div>
        </div>
        <div className="absolute contents inset-[-11.22%_51.13%_81.76%_2.19%]" data-node-id="652:12072" data-name="Group 2.4">
          <div className="absolute contents inset-[-11.22%_65.98%_84.27%_2.19%]" data-node-id="652:12073" data-name="Group">
            <div className="absolute contents inset-[-11.22%_65.98%_90.16%_11.12%]" data-node-id="652:12074" data-name="store-graphic">
              <div className="absolute inset-[-11.22%_65.98%_90.16%_11.12%] opacity-40" data-node-id="652:12075">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup16} />
              </div>
            </div>
            <div className="absolute inset-[3.03%_77.41%_84.27%_2.19%] opacity-40" data-node-id="652:12081" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div className="absolute contents inset-[2.74%_51.13%_81.76%_27.92%]" data-node-id="652:12082">
            <div className="absolute inset-[2.74%_67.5%_91.65%_27.92%] opacity-40" data-node-id="652:12083" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup17} />
            </div>
            <div className="absolute inset-[4.89%_64.18%_89.64%_31.36%] opacity-40" data-node-id="652:12087" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup18} />
            </div>
            <div className="absolute inset-[6.86%_60.92%_87.67%_34.62%] opacity-40" data-node-id="652:12091" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup19} />
            </div>
            <div className="absolute inset-[8.82%_57.66%_85.7%_37.88%] opacity-40" data-node-id="652:12095" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup20} />
            </div>
            <div className="absolute inset-[10.79%_54.39%_83.73%_41.14%] opacity-40" data-node-id="652:12099" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup21} />
            </div>
            <div className="absolute inset-[12.76%_51.13%_81.76%_44.4%] opacity-40" data-node-id="652:12103" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup22} />
            </div>
          </div>
        </div>
        <div className="absolute contents inset-[0.83%_-57.2%_43.34%_69.13%]" data-node-id="652:12107" data-name="Group 2.1">
          <div className="absolute contents inset-[0.83%_-31.36%_56.63%_69.13%]" data-node-id="652:12108" data-name="Group">
            <div className="absolute contents inset-[0.83%_-31.36%_58.67%_83.23%]" data-node-id="652:12109" data-name="store-graphic">
              <div className="absolute inset-[0.83%_-19.36%_65.94%_83.23%] opacity-52" data-node-id="652:12110">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup23} />
              </div>
              <div className="absolute inset-[22.87%_-15.65%_68.27%_108.42%] opacity-52" data-node-id="652:12116" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup24} />
              </div>
              <div className="absolute inset-[26.26%_-20.8%_64.88%_113.57%] opacity-52" data-node-id="652:12120" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup25} />
              </div>
              <div className="absolute inset-[29.36%_-26.22%_61.77%_118.99%] opacity-52" data-node-id="652:12124" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup26} />
              </div>
              <div className="absolute inset-[32.47%_-31.36%_58.67%_124.14%] opacity-52" data-node-id="652:12128" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup27} />
              </div>
            </div>
            <div className="absolute inset-[23.32%_-1.33%_56.63%_69.13%] opacity-52" data-node-id="652:12132" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div className="absolute inset-[48.01%_-57.2%_43.34%_150.15%] opacity-52" data-node-id="652:12133" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup28} />
          </div>
          <div className="absolute inset-[35.58%_-36.6%_55.78%_129.56%] opacity-52" data-node-id="652:12137" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup29} />
          </div>
          <div className="absolute inset-[38.69%_-41.75%_52.67%_134.71%] opacity-52" data-node-id="652:12141" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup30} />
          </div>
          <div className="absolute inset-[41.8%_-46.9%_49.56%_139.85%] opacity-52" data-node-id="652:12145" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup31} />
          </div>
          <div className="absolute inset-[44.9%_-52.05%_46.45%_145%] opacity-52" data-node-id="652:12149" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup32} />
          </div>
        </div>
        <div className="absolute contents inset-[7.52%_-48.25%_2.3%_2.75%]" data-node-id="652:12153" data-name="Group">
          <div className="absolute contents inset-[7.52%_-48.25%_2.3%_26.05%]" data-node-id="652:12154" data-name="store-graphic">
            <div className="absolute inset-[7.52%_14.19%_39.97%_26.05%]" data-node-id="652:12155">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup33} />
            </div>
            <div className="absolute inset-[40.97%_20.19%_44.37%_67.86%]" data-node-id="652:12160" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup34} />
            </div>
            <div className="absolute inset-[46.47%_11.76%_38.88%_76.3%]" data-node-id="652:12164" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup35} />
            </div>
            <div className="absolute inset-[51.6%_2.97%_33.75%_85.08%]" data-node-id="652:12168" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
            </div>
            <div className="absolute inset-[57.09%_-5.81%_28.25%_93.86%]" data-node-id="652:12172" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup37} />
            </div>
            <div className="absolute inset-[62.99%_-14.34%_22.78%_102.73%]" data-node-id="652:12176" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup38} />
            </div>
            <div className="absolute inset-[68.11%_-22.82%_17.66%_111.21%]" data-node-id="652:12180" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39} />
            </div>
            <div className="absolute inset-[73.23%_-31.3%_12.54%_119.69%]" data-node-id="652:12184" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup40} />
            </div>
            <div className="absolute inset-[78.35%_-39.78%_7.42%_128.17%]" data-node-id="652:12188" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup41} />
            </div>
            <div className="absolute inset-[83.46%_-48.25%_2.3%_136.65%]" data-node-id="652:12192" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup42} />
            </div>
          </div>
          <div className="absolute inset-[42.26%_44.01%_24.58%_2.75%]" data-node-id="652:12196" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
          </div>
        </div>
        <div className="absolute contents inset-[46.32%_46.21%_8.86%_-15.13%]" data-node-id="652:12197">
          <div className="absolute contents inset-[46.32%_64.91%_11.14%_-15.13%]" data-node-id="652:12198" data-name="Group">
            <div className="absolute contents inset-[46.32%_64.91%_20.45%_-1.04%]" data-node-id="652:12199" data-name="store-graphic">
              <div className="absolute inset-[46.32%_64.91%_20.45%_-1.04%] opacity-52" data-node-id="652:12200">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup43} />
              </div>
            </div>
            <div className="absolute inset-[68.81%_82.94%_11.14%_-15.13%] opacity-52" data-node-id="652:12206" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div className="absolute inset-[70.06%_66.8%_21.3%_26.15%] opacity-52" data-node-id="652:12207" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup44} />
          </div>
          <div className="absolute inset-[73.17%_61.65%_18.19%_31.3%] opacity-52" data-node-id="652:12211" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup45} />
          </div>
          <div className="absolute inset-[76.28%_56.5%_15.08%_36.45%] opacity-52" data-node-id="652:12215" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup46} />
          </div>
          <div className="absolute inset-[79.39%_51.36%_11.97%_41.6%] opacity-52" data-node-id="652:12219" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup47} />
          </div>
          <div className="absolute inset-[82.49%_46.21%_8.86%_46.75%] opacity-52" data-node-id="652:12223" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup48} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[100.48px] items-center justify-center left-[calc(50%+23.33px)] top-[calc(50%-103.02px)] w-[109.836px]" data-node-id="652:12227">
        <div className="flex-none rotate-[-56.93deg]">
          <div className="h-[92px] relative w-[60px]" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
    </div>
  );
}


