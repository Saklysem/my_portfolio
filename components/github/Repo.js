import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import FlipMove from "react-flip-move";

const Repo = ({ repos }) => {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("stars");
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = (type) => {
    const map = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size",
    };
    const sortProperty = map[type];
    const sorted = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty]);

    setTopRepos(sorted);
  };
  const sortTypes = ["stars", "forks", "size"];

  useEffect(() => {
    if (repos.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType.toLowerCase()), [sortType]);

  return (
    <div className="text-left mt-10 ">
      <div className="flex flex-row items-center ">
        <h1 className="text-lg underline-offset-[15px] decoration-gray-500 underline tracking-widest decoration-dashed ">
          My Repo
        </h1>
        <select
          id="location"
          name="location"
          className="mt-1 text-lg  block w-28 rounded-md border-blue-500 bg-transparent py-2 pl-3 pr-5 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
          defaultValue="Canada"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option>Stars</option>
          <option>Forks</option>
          <option>Size</option>
        </select>
      </div>
      <div className="mt-6 w-full ">
        {topRepos.length > 0 ? (
          <>
            <FlipMove
              typeName="ul"
              className=" flex flex-row flex-wrap  justify-center items-stretch "
            >
              {topRepos.map((repo) => (
                <li
                  key={repo.id}
                  className="flex w-full md:w-64 border justify-between m-2 border-blue-500 text-white rounded-sm p-4 "
                >
                  <RepoCard repo={repo} />
                </li>
              ))}
            </FlipMove>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Repo;
