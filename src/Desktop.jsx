import React from "react";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import MainComponent from "./components/MainComponent";


const Desktop = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-px px-0 pb-64 box-border leading-[normal] tracking-[normal]">
     <Component3/>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[166px] box-border max-w-full lg:pb-[108px] lg:box-border mq750:pb-[70px] mq750:box-border">
        <div className="flex-1 bg-gray-100 flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[100.1px] max-w-full lg:pt-[65px] lg:pb-[65px] lg:box-border mq750:gap-[50px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq450:gap-[25px]">
          <div className="w-[1440px] h-[1348px] relative bg-gray-100 hidden max-w-full" />
          <Component2 />
          <MainComponent />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-13xl text-lightgray font-nohemi">
        <div className="w-[793px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 w-[405px] relative text-inherit tracking-[0.02em] leading-[39px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
              The transition CDN-dCDN
            </h1>
          </div>
          <div className="self-stretch h-24 relative text-base tracking-[0.02em] leading-[19.2px] inline-block">
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud's dCDN network and experience the
            future of seamless, secure and community- driven consumption.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;