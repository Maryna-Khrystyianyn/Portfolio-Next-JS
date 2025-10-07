"use client";
import { motion } from "motion/react";
import Image from "next/image";

const ContactLinks = () => {
  return (
    <div className="flex flex-col gap-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full flex justify-center items-center border border-[#ed453c] w-[30px] h-[30px] bg-">
            <Image
              src="/contacts/email.png"
              width={20}
              height={20}
              alt="e-mail"
            />
          </div>
          <a href="mailto:svitlamarina@gmail.com">svitlamarina@gmail.com</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full flex justify-center items-center border border-[#eeb810] w-[30px] h-[30px] bg-">
            <Image
              src="/contacts/papierflieger.png"
              width={20}
              height={20}
              alt="e-mail"
            />
          </div>
          <a href="https://t.me/@svitla_marina">@svitla_marina</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full flex justify-center items-center border border-[#1fc25f] w-[30px] h-[30px] bg-">
            <Image
              src="/contacts/phone.png"
              width={20}
              height={20}
              alt="e-mail"
            />
          </div>
          <a href="#">+49 160 *********</a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactLinks;
