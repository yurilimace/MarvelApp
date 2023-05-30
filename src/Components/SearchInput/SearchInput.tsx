import "./SearchInput.css";

interface SearchInputProps {
  setSearchInput: (value: string) => void;
}

export const SearchInput = ({ setSearchInput }: SearchInputProps) => {
  let timeout: any;

  const handleChange = (e: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setTimeout(() => {
      setSearchInput(e.target.value);
    }, 500);
  };

  return (
    <div className="SearchInputContainer">
      <input
        onChange={(e) => handleChange(e)}
        className="SearchInput"
        placeholder="Procure por herois"
      />
    </div>
  );
};
