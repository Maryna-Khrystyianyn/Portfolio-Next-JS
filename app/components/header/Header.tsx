import LanguageSwitcher from "../language/LanguageSwitcher";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
  return (
    <div className=" flex justify-between items-center mb-3">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
