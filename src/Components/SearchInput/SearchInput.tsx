import "./SearchInput.css";

interface SearchInputProps {
  setSearchInput: (value: string) => void;
  aligment?: string;
}

export const SearchInput = ({ setSearchInput, aligment }: SearchInputProps) => {
  let timeout: any;

  const handleChange = (e: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setTimeout(() => {
      setSearchInput(e.target.value);
    }, 500);
  };

  const selectAligmentType = () => {
    if (aligment === "left") {
      return "SearchInputContainerLeftAlign";
    }
    if (aligment === "right") {
      return "SearchInputContainerRightAlign";
    }
    return "";
  };

  return (
    <div className={`SearchInputContainer ${selectAligmentType()}`}>
      <input
        data-testid={"searchInput"}
        onChange={(e) => handleChange(e)}
        className="SearchInput"
        placeholder="Procure por herois"
      />
    </div>
  );
};
