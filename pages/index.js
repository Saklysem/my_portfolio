import Head from "next/head";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import BtnProject from "../components/BtnProject";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { fetchExperience } from "../utils/fetchExperience";
import Event from "../components/Event";
import { fetchEvent } from "../utils/fetchEvent";
import { fetchPersonalInfo } from "../utils/fetchPersonalInfo";

const Home = ({ personalInfo, experiences, event }) => {
  return (
    <div className="flex min-h-screen font-poppins flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>LYSEM</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Event event={event} />
      <main className="md:max-w-screen-md flex w-full flex-1 flex-col items-center md:px-20 px-10 text-center text-white">
        <NavBar />
        <Profile personalInfo={personalInfo} />
        <BtnProject />
        {/* <Work experiences={experiences} /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ req, res }) {
  const experiences = await fetchExperience();
  const event = await fetchEvent();
  const personalInfo = await fetchPersonalInfo();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  console.log("done .. ");
  return {
    props: {
      experiences,
      event,
      personalInfo,
    },
  };
}
