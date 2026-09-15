"use client";
import PropertyCard from "./property-card";
import { useState } from "react";
import styles from "./properties.module.css";
import { translate } from "@/lib/translate";
import { BsHousesFill, BsArrowDownCircle } from "react-icons/bs";
import { FaSortAmountDown } from "react-icons/fa";

const Properties = ({ firstName, propertiesData }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortOption, setSortOption] = useState("Newest first");

  const handleLoadMore = () => {
    if (visibleCount < propertiesData.length) {
      if (propertiesData.length - visibleCount >= 6) {
        setVisibleCount(visibleCount + 6);
      } else {
        setVisibleCount(propertiesData.length);
      }
    }
  };
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <div
        className={
          styles["section-head"] +
          " max-[720px]:flex-col max-[720px]:items-start"
        }
      >
        <div className={styles["section-title"]}>
          <BsHousesFill className="text-[26px] text-[var(--primary)]"/>
          <h2>{ translate("propertiesBy") } {firstName}</h2>
          <span className={styles["section-count"]}>
            {propertiesData.length}
          </span>
        </div>
        <div className={styles.sort}>
          <FaSortAmountDown className="text-[12px]"/>
          <span>{ translate("sortBy") }:</span>
          <select onChange={handleSortChange}>
            <option value="Newest first">{ translate("newestFirst") }</option>
            <option value="Price: low to high">{ translate("lowToHigh") }</option>
            <option value="Price: high to low">{ translate("highToLow") }</option>
            <option value="Most popular">{ translate("mostPopular") }</option>
          </select>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.results}>
          {translate("showing")} <strong>1 – {visibleCount}</strong> {translate("of")}{" "}
          <strong>{propertiesData.length}</strong> {translate("properties")}
        </div>
      </div>
      <div className={styles.props + " max-[720px]:grid-cols-1"}>
        {sortOption === "Newest first" &&
          propertiesData
            .sort((a, b) => b.id - a.id)
            .slice(0, visibleCount)
            .map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
        {sortOption === "Price: low to high" &&
          propertiesData
            .sort((a, b) => a.priceRaw - b.priceRaw)
            .slice(0, visibleCount)
            .map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
        {sortOption === "Price: high to low" &&
          propertiesData
            .sort((a, b) => b.priceRaw - a.priceRaw)
            .slice(0, visibleCount)
            .map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
        {/* Most popular? */}
      </div>
      {visibleCount < propertiesData.length && (
        <div className={styles["load-more"]}>
          <button className={styles["btn-load"]} onClick={handleLoadMore}>
            Load More Properties <BsArrowDownCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default Properties;
