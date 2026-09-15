"use client";
import { useState } from "react";
import styles from "./about.module.css";
import { translate } from "@/lib/translate";
import { BsPersonCircle, BsChevronUp, BsChevronDown } from "react-icons/bs";

const AboutAgent = ({ firstName, about, memberSince }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {about && (
        <div className={styles.card + " " + styles.about}>
          <div className={styles["card-head"]}>
            <h3>
              <BsPersonCircle className="text-[18px] text-[var(--primary)]"/> {translate("about")} {firstName}
            </h3>
            {memberSince && (
              <span style={{ fontSize: "12px", color: "#6b7280" }}>
                { translate("memberSince") }
                <strong style={{ color: "#282f39" }}>
                  {" " + memberSince}
                </strong>
              </span>
            )}
          </div>
          <div
            className={`${styles["card-body"]} ${isExpanded ? styles.expanded : styles.collapsed}`}
          >
            <p className={styles["about-text"]}>{about}</p>
            <span className={styles["read-more"]} onClick={toggleReadMore}>
              {isExpanded ? (
                <>
                  { translate("readLess") } <BsChevronUp />
                </>
              ) : (
                <>
                  { translate("readMore") } <BsChevronDown />
                </>
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutAgent;
