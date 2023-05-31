import { CharacterProfileSection } from "../../Components/CharacterProfileSection/CharacterProfileSection";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Character.css";

export const Character = () => {
  const arr = [3, 7, 12, 9, 5, 1, 8, 6, 2, 4, 15];

  return (
    <div className="CharacterPageContainer">
      <Navbar />
      <div className="CharacterContent">
        {/* <div className="CharacterNameOnBackgroud">
          <span> Hulk</span>
        </div> */}
        <CharacterProfileSection />
        <div>
          <img
            className="CharacterProfileImage"
            src={
              "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            }
          />
        </div>
      </div>
      <span>
        <strong> Ultimos lançamentos </strong>
      </span>
      <div className="LastComicsShowCase">
        {arr.map((el) => (
          <div>
            <img
              src={
                "http://i.annihil.us/u/prod/marvel/i/mg/a/10/4dd6881eb9e35.jpg"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
