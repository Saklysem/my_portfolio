import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { useState } from "react";
import Github from "../components/Github";
import Event from "../components/Event";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Project from "../components/Project";
import { fetchEvent } from "../utils/fetchEvent";
import { fetchProject } from "../utils/fetchProject";
import { fetchProfile } from "../utils/fetchProfile";
import { fetchRepo } from "../utils/fetchRepo";
const index = ({ projects, event, profile, repos }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen font-poppins  flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>LYSEM | Project</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Event event={event} />

      <main className="md:max-w-screen-md flex w-full flex-1 flex-col mb-10 items-center  md:px-20 px-10 text-center text-white">
        <NavBar />
        <div className="w-full pt-10 text-blue-500">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl text-left font-bold  underline-offset-[13px] decoration-gray-500 underline tracking-widest decoration-dashed ">
              {open ? " " : "My Project "}
            </h1>
          </div>
          <div className="w-fit h-2 bg-blue-500 " />
          <div className="mt-10">
            {open ? (
              <Github profile={profile} repos={repos} />
            ) : (
              <Project projects={projects} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
export async function getServerSideProps({ req, res }) {
  const projects = await fetchProject();
  const event = await fetchEvent();
  const profile = await fetchProfile();
  const repos = await fetchRepo();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // console.log()
  return {
    props: {
      projects,
      event,
      profile,
      repos,
    },
  };
}
