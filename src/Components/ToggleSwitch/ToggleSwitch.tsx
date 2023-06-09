import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  defaultValue: () => boolean;
  handleChange: (filterValue: boolean) => void;
}

export const ToggleSwitch = ({
  defaultValue,
  handleChange,
}: ToggleSwitchProps) => {
  const handleCheck = (value: boolean) => {
    handleChange(value);
  };
  return (
    <label data-testid={"toggle-switch"} className="switch">
      <input
        data-testid={"toggle-switch-input"}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox"
        checked={defaultValue()}
      />
      <span className="slider round"></span>
    </label>
  );
};
