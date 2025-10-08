import LanguageSwitcher from "../language/LanguageSwitcher";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const HeaderMobile = () => {
  return (
    <div className=" flex justify-between items-center mb-3 py-1 px-5 bg-[var(--main-light-transparent)]">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default HeaderMobile;