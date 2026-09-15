import Link from "next/link";
import styles from "./request-match.module.css";
import { translate } from "@/lib/translate";
import { FaArrowRightLong } from "react-icons/fa6";

const RequestMatch = ({ firstName, they }) => {
  return (
    <div className={styles["side-cta"]}>
      <h4>{ translate("perfectProb?") }</h4>
      <p>
        { translate("tell") } {firstName} { translate("perfectProbBody") }
      </p>
      <Link href="#" className={styles["btn-side"]}>
        { translate("requestMatch") } <FaArrowRightLong className="text-[13px]"/>
      </Link>
    </div>
  );
};

export default RequestMatch;
