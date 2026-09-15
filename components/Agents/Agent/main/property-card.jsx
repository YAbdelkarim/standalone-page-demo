import Link from "next/link";
import styles from "./properties.module.css";
import { translate } from "@/lib/translate";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { LuDoorClosed } from "react-icons/lu";
import { PiDoorLight, PiDropLight, PiArrowsOutLight } from "react-icons/pi";
import { BsGeoAlt } from "react-icons/bs";

const PropertyCard = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`} className={styles.prop}>
      <article className={styles.prop}>
        <div className={styles.thumb}>
          <Image
            loading="lazy"
            src={property?.image}
            width={150}
            height={150}
          />
          <span
            className={
              styles.tag +
              (property.type === "For Rent" ? " " + styles.rent : "")
            }
          >
            {translate(property.type)}
          </span>
          <span className={styles.fav}>
            <FaRegHeart style={{ fontSize:"15px" }}/>
          </span>
          <span className={styles["price-overlay"]}>{property.price}</span>
        </div>
        <div className={styles.info}>
          <h5 className={styles.title}>{property.title}</h5>
          <div className={styles.loc}>
            <BsGeoAlt className="12px"/> {property.location}
          </div>
          <div className={styles.specs}>
            <span className={styles.spec}>
              <PiDoorLight className="text-[18px] text-[var(--primary)]"/> {property.specs.beds} { translate("beds") }
            </span>
            <span className={styles.spec}>
              <PiDropLight className="text-[18px] text-[var(--primary)]"/> {property.specs.beds} { translate("baths") }
            </span>
            <span className={styles.spec}>
              <PiArrowsOutLight className="text-[18px] text-[var(--primary)]"/> {property.specs.sqft}{" "}
              { translate("sqft") }
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;
