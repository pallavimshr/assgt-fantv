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
      <h1 className="m-0 w-[218px] h-8 relative text-inherit font-medium font-bold font-inherit inline-block shrink-0 max-w-[67%] mq1050:text-7xl mq450:text-lgi">
        {orchestrators}
      </h1>
      <div className="ml-[-121px] w-[571px] h-[629px] relative shrink-0 max-w-[175%] text-base">
        <div className="absolute top-[0px] left-[121px] tracking-[0.02em] leading-[19.2px] inline-block w-[370px] z-[1]">
          {orchestratorsWillBeRespon}
        </div>
        <div className="absolute top-[70px] left-[0px] w-[571px] h-[559px] flex flex-row items-start justify-start">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={pattern}
            />
            <img
              className="absolute top-[31px] left-[381.3px] rounded-xl w-[160px] h-[80px]  object-contain z-[1]"
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
