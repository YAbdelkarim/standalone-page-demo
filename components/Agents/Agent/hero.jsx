import Link from "next/link";
import Image from "next/image";
import styles from "./hero.module.css";
import { placeholderImage, translate } from "@/lib/translate";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
  FaCheckCircle
} from "react-icons/fa";
import { PiShareNetworkLight } from "react-icons/pi";
import {
  FaLocationDot,
  FaXTwitter
} from "react-icons/fa6";
import { MdOutlineGTranslate } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsClockHistory } from "react-icons/bs";

const Hero = ({ agentInfo, langCode, handleShare }) => {
  return (
    <section className={styles["agent-hero"]}>
      <div className={styles["hero-inner"]}>
        <div className={styles.avatar}>
          <div className={styles["avatar-img"]}>
            <Image
              width={140}
              height={140}
              loading="lazy"
              src={agentInfo?.image}
              className="avatar-img"
              alt="Agent Profile"
              onError={placeholderImage}
            />
          </div>
          {agentInfo.verified && (
            <span className={styles.verify} title="Verified Agent">
              <FaCheckCircle className="text-[15px]"/>
            </span>
          )}
        </div>

        <div className={styles["agent-id"]}>
          <h1>
            {agentInfo.name}
            <span className={styles.role}>
              <GoDotFill className="text-[10px] text-[var(--accent)]"/> {agentInfo.role}
            </span>
          </h1>
          <div className={styles.tagline}>{agentInfo.tagline}</div>
          <div className={styles["hero-meta"]}>
            <span className={styles.pill}>
              <FaLocationDot className="text-[12px] text-[var(--accent)]"/> {agentInfo.location}
            </span>
            <span className={styles.pill}>
              <MdOutlineGTranslate className="text-[15px] text-[var(--accent)]"/> {" "}
              {agentInfo.languages.join(" · ")}
            </span>
            <span className={styles.pill}>
              <BsClockHistory className="text-[15px] text-[var(--accent)]"/> {agentInfo.experience}
            </span>
            <span className={styles.pill}>
              <IoShieldCheckmark className="text-[15px] text-[var(--accent)]"/> {" "}
              {agentInfo.certifications.join(" · ")}
            </span>
          </div>
        </div>

        {agentInfo.phone && (
          <div className={styles["hero-cta"]}>
            <Link className={`${styles.btn} ${styles["btn-wa"]}`} href="#">
              <FaWhatsapp className="text-[20px]"/>
              { translate("chatOnWhatsapp") }
            </Link>
            <Link
              className={`${styles.btn} ${styles["btn-call"]} text-black`}
              href="#"
            >
              <FaPhoneAlt className="text-[14px]"/>
              { translate("callNow") }
            </Link>
            <Link className={`${styles.btn} ${styles["btn-ghost"]}`} href="#">
              <FaRegEnvelope className="text-[17px]"/>
              { translate("sendMessage") }
            </Link>
          </div>
        )}
      </div>

      {/* <!-- Hero stats --> */}
      <div className={styles["hero-stats"]}>
        <div className={`${styles.stat} ${langCode === "en-new" ? "border-r border-white/[0.12]" : ""}`}>
          <div className={styles.value}>{agentInfo.stats.listings}</div>
          <div className={styles.label}>{ translate("activeListings") }</div>
        </div>
        <div className={`${styles.stat} border-r border-white/[0.12]`}>
          <div className={styles.value}>
            {agentInfo.stats.rating}
            <em>★</em>
          </div>
          <div className={styles.label}>{ translate("clientRating") }</div>
        </div>
        <div className={`${styles.stat} ${langCode === "en-new" ? "" : "border-r border-white/[0.12]"}`}>
          <div className={styles.value}>{agentInfo.stats.dealsClosed}+</div>
          <div className={styles.label}>{ translate("dealsClosed") }</div>
        </div>
      </div>

      <div className={styles["hero-footer"]}>
        <div className={styles.social}>
          {agentInfo.socialLinks.facebook && (
            <Link href={agentInfo.socialLinks.facebook} aria-label="Facebook">
              <FaFacebook className="text-[16px]"/>
            </Link>
          )}
          {agentInfo.socialLinks.instagram && (
            <Link href={agentInfo.socialLinks.instagram} aria-label="Instagram">
              <FaInstagram className="text-[17px]"/>
            </Link>
          )}
          {agentInfo.socialLinks.twitter && (
            <Link href={agentInfo.socialLinks.twitter} aria-label="Twitter / X">
              <FaXTwitter className="text-[15px]"/>
            </Link>
          )}
          {agentInfo.socialLinks.youtube && (
            <Link href={agentInfo.socialLinks.youtube} aria-label="YouTube">
              <FaYoutube className="text-[17px]"/>
            </Link>
          )}
          {agentInfo.socialLinks.linkedIn && (
            <Link href={agentInfo.socialLinks.linkedIn} aria-label="LinkedIn">
              <FaLinkedin className="text-[15px]"/>
            </Link>
          )}
        </div>

        <button type="button" onClick={handleShare} className={`${styles.share} flex items-center gap-1.5 focus:outline-none`}>
          <PiShareNetworkLight className="text-[18px]"/> { translate("shareThisAgentProfile") }
        </button>
      </div>
    </section>
  );
};

export default Hero;
