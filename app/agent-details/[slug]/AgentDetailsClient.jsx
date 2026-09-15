"use client";
import Crumb from "@/components/Crumb/crumb";
import { translate } from "@/lib/translate";
import AgentDetailsBody from "@/components/Agents/Agent/body";
import styles from "./agent-details.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";

const AgentDetailsClient = () => {
  const params = useParams();
  const slug = params?.slug;

  const [isLoading, _setIsLoading] = useState(false);
  const [agentData, _setAgentData] = useState({});

  const handleShare = () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      navigator.share({
        title: agentData?.name || "Agent",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      Swal.fire({
        icon: "success",
        title: translate("linkCopied") || "Link copied!",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {}, [slug]);

  const propertiesData = [
    {
      id: 1,
      title: "Marina Heights — 2BR Sea View",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=70",
      type: "For Sale",
      isFavorite: false,
      price: "AED 2.8M",
      priceRaw: 2800000,
      location: "Dubai Marina, UAE",
      specs: {
        beds: 2,
        baths: 2,
        sqft: 1420,
      },
    },
    {
      id: 2,
      title: "Palm Jumeirah Signature Villa",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=70",
      type: "For Rent",
      isFavorite: true,
      price: "AED 145K / yr",
      priceRaw: 145000,
      location: "Palm Jumeirah, UAE",
      specs: {
        beds: 4,
        baths: 5,
        sqft: 4800,
      },
    },
    {
      id: 3,
      title: "Downtown Burj Residence",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=70",
      type: "For Sale",
      isFavorite: false,
      price: "AED 4.5M",
      priceRaw: 4500000,
      location: "Downtown Dubai",
      specs: {
        beds: 3,
        baths: 3,
        sqft: 2150,
      },
    },
    {
      id: 4,
      title: "Business Bay Modern Loft",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=70",
      type: "For Sale",
      isFavorite: false,
      price: "AED 1.95M",
      priceRaw: 1950000,
      location: "Business Bay, UAE",
      specs: {
        beds: 1,
        baths: 2,
        sqft: 980,
      },
    },
    {
      id: 5,
      title: "JBR Beachfront Apartment",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop&q=70",
      type: "For Rent",
      isFavorite: false,
      price: "AED 95K / yr",
      priceRaw: 95000,
      location: "Jumeirah Beach Residence",
      specs: {
        beds: 2,
        baths: 2,
        sqft: 1200,
      },
    },
    {
      id: 6,
      title: "Emirates Hills Family Villa",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=70",
      type: "For Sale",
      isFavorite: false,
      price: "AED 7.2M",
      priceRaw: 7200000,
      location: "Emirates Hills, UAE",
      specs: {
        beds: 5,
        baths: 6,
        sqft: 6200,
      },
    },
  ];

  const agentDataStat = [
    {
      id: 21,
      name: "Sarah Al-Mansouri",
      firstName: "Sarah",
      pronouns: {
        they: "she",
        them: "her",
        theirs: "hers",
      },
      lastName: "Al-Mansouri",
      email: "sarah@beyotech.com",
      phone: "+971 50 123 4567",
      officeAddress: "123 Business Avenue, Dubai, UAE",
      responseTime: "~ 1 hour",
      averagePriceRange: "AED 1M - AED 10M",
      primaryArea: "Dubai Marina",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=70",
      verified: true,
      role: "Senior Property Consultant",
      tagline:
        "Specializing in luxury residential & off-plan investments across the UAE.",
      location: "Dubai Marina, UAE",
      languages: ["Arabic", "English", "Hindi"],
      langs: ["AR", "EN", "HI"],
      experience: "8 years experience",
      certifications: ["RERA Certified"],
      memberSince: "2016",
      about:
        "With nearly a decade of experience in the UAE real-estate market, Sarah has guided hundreds of clients through buying, selling, and investing in premium properties. Her portfolio spans waterfront apartments in Dubai Marina, family villas on Palm Jumeirah, and high-yield off-plan opportunities in Downtown Dubai. She blends local market insight with a no-pressure, advisory approach — clients keep coming back because she treats every transaction as a long-term relationship, not a one-off sale.",
      stats: {
        listings: 128,
        rating: 4.9,
        dealsClosed: 540,
      },
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        youtube: "#",
        linkedIn: "#",
      },
    },
    {
      id: 22,
      name: "Doha Ayman",
      firstName: "Doha",
      lastName: "Ayman",
      email: "doha@beyotech.com",
      pronouns: {
        they: "she",
        them: "her",
        theirs: "hers",
      },
      memberSince: "2022",
      about:
        "Doha is a rising star in the Dubai real estate scene, known for her dedication to first-time buyers and renters. With a background in customer service and a passion for helping people find their perfect home, Doha has quickly built a loyal client base. She specializes in affordable apartments and family-friendly communities across Dubai, always going the extra mile to ensure her clients feel supported throughout their property journey.",
      responseTime: "~ 1 hour",
      averagePriceRange: "AED 1M - AED 10M",
      primaryArea: "Dubai Marina",
      phone: "+971 50 123 4567",
      officeAddress: "123 Business Avenue, Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=70",
      verified: false,
      role: "Junior Property Consultant",
      tagline: "Does cool stuff.",
      location: "Cairo, Egypt",
      languages: ["Arabic", "English"],
      langs: ["AR", "EN"],
      experience: "2 years experience",
      certifications: ["ABET Certified"],
      stats: {
        listings: 23,
        rating: 5.0,
        dealsClosed: 34,
      },
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        youtube: "#",
        linkedIn: "#",
      },
    },
  ];

  const agentInfo =
    agentDataStat.find((a) => String(a.id) === slug) || agentDataStat[0];
  const breadcrumbItems = [
    { label: translate("home"), href: "/" },
    { label: translate("allAgents"), href: "/agent-details" },
    { label: agentInfo.name },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div>
        <div className="pt-[88px]"></div>
        <Crumb items={breadcrumbItems} />
        <AgentDetailsBody
          agentInfo={agentInfo}
          propertiesData={propertiesData}
          langCode={"en"}
          handleShare={handleShare}
        />
      </div>
    </div>
  );
};

export default AgentDetailsClient;
