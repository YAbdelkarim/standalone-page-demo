import Link from "next/link";
import styles from "./contact-card.module.css";
import { translate } from "@/lib/translate";
import { PiHeadsetFill } from "react-icons/pi";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiShareNetworkLight } from "react-icons/pi";

const ContactCard = ({ email, phone, address, handleShare }) => {
  return (
    <div className={styles["contact-card"]}>
      <div className={styles.top}>
        <PiHeadsetFill className="text-[24px] text-[var(--accent)]"/>
        <div>
          <h4>{ translate("getInTouch") }</h4>
          <span>{translate("typicallyReplies")} 1 {translate("hour")}</span>
        </div>
      </div>
      <div className={styles["contact-list"]}>
        {email && (
          <Link href={`mailto:${email}`} className={styles["contact-row"]}>
            <span className={styles["ci"] + " " + styles.email}>
              <FaRegEnvelope className="text-[15px] text-[var(--primary)]"/>
            </span>
            <span className={styles["contact-text"]}>
              <small>{ translate("email") }</small>
              <span>{email}</span>
            </span>
          </Link>
        )}
        {phone && (
          <Link href="#" className={styles["contact-row"]}>
            <span className={styles["ci"] + " " + styles.wa}>
              <FaWhatsapp className="text-[18px] text-[var(--whatsapp-700)]"/>
            </span>
            <span className={styles["contact-text"]}>
              <small>{ translate("whatsappChat") }</small>
              <span>{phone}</span>
            </span>
          </Link>
        )}
        {address && (
          <div className={styles["contact-row"]}>
            <span className={styles["ci"] + " " + styles.loc}>
              <FaLocationDot className="text-[18px]"/>
            </span>
            <span className={styles["contact-text"]}>
              <small>{ translate("officeAdd") }</small>
              <span>{address}</span>
            </span>
          </div>
        )}
      </div>
      <div className={styles["contact-actions"]}>
        {phone && (
          <Link className={styles["btn"] + " " + styles["btn-wa"]} href="#">
            <FaWhatsapp className="text-[18px] text-white"/> <span className="text-white">{ translate("messageOnWhatsapp") }</span>
          </Link>
        )}
        <button type="button" onClick={handleShare} className={styles["btn"] + " " + styles["btn-outline"]}>
           <PiShareNetworkLight className="text-[18px]"/> { translate("shareProfile") }
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
