import ContactCard from "./contact-card";
import QuickStats from "./quick-stats";
import RequestMatch from "./request-match";

const Sidebar = ({ agentInfo, handleShare }) => {
  return (
    <aside className="flex flex-col gap-[18px] sticky top-[88px] self-start max-lg:static max-[1024px]:static">
      <ContactCard
        email={agentInfo.email}
        phone={agentInfo.phone}
        address={agentInfo.officeAddress}
        handleShare={handleShare}
      />
      <QuickStats
        responseTime={agentInfo.responseTime}
        averagePriceRange={agentInfo.averagePriceRange}
        primaryArea={agentInfo.primaryArea}
        listingsPosted={agentInfo.stats.listings}
        langs={agentInfo.langs}
      />
      <RequestMatch
        firstName={agentInfo.firstName}
        they={agentInfo.pronouns.they}
      />
    </aside>
  );
};

export default Sidebar;
