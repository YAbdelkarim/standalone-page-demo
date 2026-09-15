import TwoColumn from "./two-column";
import Hero from "./hero";

const AgentDetailsBody = ({ agentInfo, propertiesData, langCode, handleShare }) => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto px-6 pb-[64px]">
        <Hero agentInfo={agentInfo} langCode={langCode} handleShare={handleShare} />
        <TwoColumn agentInfo={agentInfo} propertiesData={propertiesData} handleShare={handleShare} />
      </div>
    </>
  );
};

export default AgentDetailsBody;
