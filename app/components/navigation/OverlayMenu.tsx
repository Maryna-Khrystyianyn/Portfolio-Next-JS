import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import BtnSciRow from "../btnSci/BtnSciRow";

type MyLink = {
  text: string;
  path: string;
};

const OverlayMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
  const menuItems: MyLink[] = [
    {
      text: t("home"),
      path: "/",
    },
    {
      text: t("about"),
      path: "/about",
    },
    {
      text: t("projects"),
      path: "/projects",
    },
    {
      text: t("contacts"),
      path: "/contacts",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-[150px] left-0 w-full h-[calc(100vh-150px)] bg-[var(--bg-menu)] bg-opacity-80 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.ul
            className="flex flex-col items-center justify-center h-full space-y-8 text-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                className=" text-center w-[80%] border-b p-3"
                variants={{
                  hidden: { opacity: 0, y: 70 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <Link href={item.path} onClick={onClose}>
                  {item.text}
                </Link>
              </motion.li>
            ))}

            <motion.li
            className="mt-20"
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}>
<BtnSciRow/>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
