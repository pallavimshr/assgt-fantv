import React from "react";
import Component1 from "./Component1";
import PropTypes from "prop-types";

const MainComponent = ({ className = "" }) => {
  return (
    <div
      className={`grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(294px,_1fr))] text-left text-13xl text-lavender font-nohemi mq750:gap-[16px] mq750:grid-cols-[minmax(294px,_1fr)] mq1050:my-0 mq1050:mx-auto mq1050:grid-cols-[repeat(2,_minmax(294px,_510px))] ${className}`}
    >
      <div className="h-64 rounded-3xl bg-mediumslateblue-100 overflow-hidden flex flex-col items-start justify-start pt-8 px-8 pb-48 box-border gap-[19px] max-w-full z-[1] mq1050:pt-[21px] mq1050:pb-[125px] mq1050:box-border mq450:pt-5 mq450:pb-[81px] mq450:box-border ">
        <div className="whitespace-nowrap">
        <h1 className="m-0 w-[230px] h-8 relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-[71%] mq1050:text-7xl mq450:text-lgi">
          Content Nodes
        </h1> </div>
        <div className="ml-[-121px] w-[571px] flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-[175%] text-base">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full">
            <div className="h-[58px] w-[336px] relative tracking-[0.02em] leading-[19.2px] inline-block shrink-0 max-w-full">
              Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN
            </div>
          </div>
          <div className="self-stretch h-[559.9px] relative">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                alt=""
                src="/pattern.svg"
              />
              <div className="absolute top-[17px] left-[340px] rounded-81xl bg-mediumpurple w-[200px] h-14 z-[1]" />
            </div>
            <button className="cursor-pointer [border:none] py-4 pr-[58px] pl-[59px] bg-white absolute top-[12px] left-[340px] rounded-81xl flex flex-row items-start justify-start gap-[6px] z-[2]">
              <div className="h-14 w-[200px] relative rounded-81xl bg-white hidden" />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative text-base tracking-[0.15px] font-semibold font-nohemi text-gray-300 text-left inline-block min-w-[53px] z-[3]">
                  Deploy
                </div>
              </div>
              <img
                className="h-6 w-6 relative z-[3]"
                alt=""
                src="/vuesaxboldarrowright-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <Component1
        orchestrators="Orchestrators"
        orchestratorsWillBeRespon="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
        pattern="/pattern-1.svg"
        frame512918690="/frame-512918690@2x.png"
      />
      <Component1
        orchestrators="Validators"
        orchestratorsWillBeRespon="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
        pattern="/pattern-2.svg"
        frame512918690="/frame-512918690-1@2x.png"
        propBackgroundColor="#adffe4"
      />
    </div>
  );
};

MainComponent.propTypes = {
  className: PropTypes.string,
};

export default MainComponent;
