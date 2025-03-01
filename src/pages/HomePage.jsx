import srcBanner from "/images/homeBanner.webp";
import HomeBanner from "../components/HomeBanner";
import HomeText from "../components/HomeText";

const HomePage = () => {
  return (
    <main>
      <HomeBanner imgSrc={srcBanner} />
      <HomeText />
    </main>
  );
};

export default HomePage;
