import MarvelLogoV2 from "../../assets/logo_menor.svg";
import { Logo } from "../Logo/Logo";
import { SearchInput } from "../SearchInput/SearchInput";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="NavbarContainer">
      <Logo src={MarvelLogoV2} />
      <SearchInput
        aligment="left"
        setSearchInput={() => console.log("input")}
      />
    </nav>
  );
};
