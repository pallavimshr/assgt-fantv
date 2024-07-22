import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const Component1 = ({
  className = "",
  orchestrators,
  orchestratorsWillBeRespon,
  pattern,
  frame512918690,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`h-64 rounded-3xl bg-violet overflow-hidden flex flex-col items-start justify-start pt-8 px-8 pb-48 box-border gap-[19px] max-w-full z-[1] text-left text-13xl text-gray-200 font-nohemi mq1050:pt-[21px] mq1050:pb-[125px] mq1050:box-border mq450:pt-5 mq450:pb-[81px] mq450:box-border ${className}`}
      style={frameDivStyle}
    >
      <h1 className="m-0 w-[218px] h-8 relative text-inherit font-medium font-bold font-inherit inline-block shrink-0 max-w-[67%] text-[1.875rem] md:text-4xl lg:text-6xl xl:text-7xl">
        {orchestrators}
      </h1>
      <div className="ml-[-121px] w-[571px] h-[629px] relative shrink-0 max-w-[175%] text-base sm:max-w-[150%] md:max-w-[125%] lg:max-w-[100%]">
        <div className="absolute top-[0px] left-[121px] tracking-[0.02em] leading-[19.2px] inline-block w-[370px] z-[1] text-base sm:text-sm md:text-base lg:text-lg xl:text-xl sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]">
          {orchestratorsWillBeRespon}
        </div>
        <div className="absolute top-[70px] left-[0px] w-full h-[559px] flex flex-row items-start justify-start">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={pattern}
            />
            <img
              className="absolute top-[31px] left-[381.3px] rounded-xl w-[160px] h-[80px]  object-contain z-[1] sm:top-[20px] sm:left-[300px] md:w-[200px] md:h-[100px] lg:w-[240px] lg:h-[120px] lg:top-[40px] lg:left-[350px]"
              alt=""
              src={frame512918690}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  orchestrators: PropTypes.string,
  orchestratorsWillBeRespon: PropTypes.string,
  pattern: PropTypes.string,
  frame512918690: PropTypes.string,
  propBackgroundColor: PropTypes.any,
};

export default Component1;
