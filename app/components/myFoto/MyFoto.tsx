import styles from './myFoto.module.css';
import Image from "next/image";

const MyFoto=()=> {
  return (
    <div className="grid-area-foto flex justify-center items-center">
      <div className={styles.imgBox}>
        <div className={styles.imgItem}>
          <Image src="/me4.jpg" width={300} height={300} alt="Maryna Khrystyianyn" className={styles.mainFotoImg} />
        </div>
      </div>
    </div>
  );
}

export default MyFoto