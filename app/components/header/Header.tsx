import LanguageSwitcher from "../language/LanguageSwitcher";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
  return (
    <div className=" p-3 bg-[var(--bg-main)] m-3 rounded-md border border-sky-950">
      <div className=" flex justify-between items-center mb-3">
<LanguageSwitcher />
      <ThemeSwitcher />

      </div>
      
      <h1 className="text-4xl font-bold">Hallo. Das ist meine Portfolio.</h1>
    </div>
  );
};

export default Header;
