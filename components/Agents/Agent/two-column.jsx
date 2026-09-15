"use client";
import Main from "./main/main";
import Sidebar from "./sidebar/sidebar";

const TwoColumn = ({ agentInfo, propertiesData, handleShare }) => {
  return (
    <div className="grid grid-cols-[1fr_340px] gap-7 mt-7 max-[1024px]:grid-cols-1">
      <Main
        firstName={agentInfo.firstName}
        about={agentInfo.about}
        memberSince={agentInfo.memberSince}
        propertiesData={propertiesData}
      />
      <Sidebar agentInfo={agentInfo} handleShare={handleShare} />
    </div>
  );
};

export default TwoColumn;
