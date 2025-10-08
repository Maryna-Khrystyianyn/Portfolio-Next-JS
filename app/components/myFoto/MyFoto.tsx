import styles from "./myFoto.module.css";

import { useState } from "react";
import Image from "next/image";

function MyFoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="grid-area-foto flex justify-center items-center">
      <div className={styles.imgBox}>
        <div className={styles.imgItem}>
          <Image
            src="/me4.jpg"
            width={300}
            height={300}
            alt="Maryna Khrystyianyn"
            className={`${styles.mainFotoImg} ${loaded ? styles.loaded : ''}`}
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default MyFoto;
