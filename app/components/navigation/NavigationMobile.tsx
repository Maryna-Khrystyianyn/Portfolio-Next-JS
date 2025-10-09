import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import { div } from "motion/react-client";
import OverlayMenu from "./OverlayMenu";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="relative">
      {/* main tail of menu */}
      <div className=" w-full flex justify-center z-50 bg-transparent">
        <div className="flex justify-between items-center px-6 py-4">
        
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="relative z-50"
          >
            <BurgerIcon isOpen={isOpen} />
          </button>
        </div>
        
      </div>

      {/* overlay menu */}
      <OverlayMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default NavigationMobile;
