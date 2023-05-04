import React,{useState,useEffect} from "react";
import ContributorCard from "./ContributorCard";
import axios from "axios";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  const getContributors = async () => {
    const { data } = await axios.get(
      "https://api.github.com/repos/gabrysia694/Gym-Junkies/contributors"
    );
    setContributors(data);
  };

  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-xl p-5">
      <h1 className="text-3xl font-bold mb-4">Contributors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.map((contributor, index) => {
          if(contributor.type === "User"){
            return (
              <ContributorCard
                key={index}
                login={contributor.login}
                html_url={contributor.html_url}
                avatar_url={contributor.avatar_url}
              />
            );
          }
        })}
      </div>
    </div>
    </>
  )
}

export default Contributors
