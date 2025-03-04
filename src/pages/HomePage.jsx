import srcBanner from "/images/homeBanner.webp";
import HomeBanner from "../components/HomeBanner";
import HomeText from "../components/HomeText";

const HomePage = () => {
  return (
    <main className="homePage">
      <HomeBanner imgSrc={srcBanner} />
      <HomeText />
    </main>
  );
};

export default HomePage;
