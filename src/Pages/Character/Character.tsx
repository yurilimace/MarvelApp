import { CharacterProfileSection } from "../../Components/CharacterProfileSection/CharacterProfileSection";
import { Loading } from "../../Components/Loading/Loading";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useCharacterDetail } from "../../Hooks/useCharacterDetail/useCharacterDetail";
import "./Character.css";

export const Character = () => {
  const { data, isLoading } = useCharacterDetail();

  return (
    <div className="CharacterPageContainer">
      <Navbar />

      {isLoading && <Loading />}

      {data && (
        <>
          <div className="CharacterContent">
            <div className="CharacterNameOnBackgroud">
              <span> {data.name} </span>
            </div>
            <CharacterProfileSection data={data} />
            <div>
              <img className="CharacterProfileImage" src={data?.image} />
            </div>
          </div>
          <span className="LastComicsShowCaseTitle">
            <strong> Ultimos lançamentos </strong>
          </span>
          <div className="LastComicsShowCase">
            {data?.stories.map((story) => (
              <div className="LastComicsShowCaseItem">
                <img src={story.image} />
                <span>
                  <strong> {story.title} </strong>
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
