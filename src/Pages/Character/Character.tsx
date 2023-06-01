import { CharacterProfileSection } from "../../Components/CharacterProfileSection/CharacterProfileSection";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useCharacterDetail } from "../../Hooks/useCharacterDetail/useCharacterDetail";
import "./Character.css";

export const Character = () => {
  const arr = [3, 7, 12, 9, 5, 1, 8, 6, 2, 4, 15];
  const { routeParams, data } = useCharacterDetail();

  console.log(data?.stories);

  return (
    <div className="CharacterPageContainer">
      <Navbar />
      <div className="CharacterContent">
        {/* <div className="CharacterNameOnBackgroud">
          <span> {data?.characterDetail[0].name} </span>
        </div> */}
        <CharacterProfileSection
          name={data?.characterName}
          description={data?.characterDescprition}
          appearances={data?.stories.length}
          lastReleaseDate={data?.stories[0].lastReleaseDate}
        />
        <div>
          <img className="CharacterProfileImage" src={data?.image} />
        </div>
      </div>
      <span>
        <strong> Ultimos lançamentos </strong>
      </span>
      <div className="LastComicsShowCase">
        {data?.stories.map((story: any) => (
          <div className="LastComicsShowCaseItem">
            <img src={story.image} />
            <span>{story.title} </span>
          </div>
        ))}
      </div>
    </div>
  );
};
