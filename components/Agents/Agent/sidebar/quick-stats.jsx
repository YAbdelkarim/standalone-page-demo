import styles from "./quick-stats.module.css";
import { translate } from "@/lib/translate";
import { MdBarChart } from "react-icons/md";

const QuickStats = ({
  responseTime,
  listingsPosted,
  averagePriceRange,
  primaryArea,
  langs,
}) => {
  const showQuickStats =
    responseTime || listingsPosted || averagePriceRange || primaryArea || langs;
  return (
    <>
      {showQuickStats && (
        <div className={styles.quick}>
          <h4>
            <MdBarChart className="text-[20px] text-[var(--primary)]"/> { translate("atAGlance") }
          </h4>

          <ul>
            {responseTime && (
              <li>
                { translate("responseTime") } <b>{responseTime}</b>
              </li>
            )}
            {listingsPosted && (
              <li>
                { translate("listingsPosted") } <b>{listingsPosted}</b>
              </li>
            )}
            {averagePriceRange && (
              <li>
                { translate("avgPriceRange") } <b>{averagePriceRange}</b>
              </li>
            )}
            {primaryArea && (
              <li>
                { translate("primaryArea") } <b>{primaryArea}</b>
              </li>
            )}
            {langs && (
              <li>
                { translate("languages") } <b>{langs.join(" · ")}</b>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default QuickStats;
