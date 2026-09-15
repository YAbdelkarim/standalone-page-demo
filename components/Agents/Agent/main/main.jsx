"use client";
import About from "./about";
import Properties from "./properties-grid";

const Main = ({
  firstName,
  about,
  memberSince,
  propertiesData = { propertiesData },
}) => {
  return (
    <main>
      <About firstName={firstName} about={about} memberSince={memberSince} />
      <Properties firstName={firstName} propertiesData={propertiesData} />
    </main>
  );
};

export default Main;
