import Image from 'next/image';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        sizes="(max-width: 640px) 200px, (max-width: 750px) 250px, (max-width: 828px) 300px, (max-width: 1080px) 300px, (max-width: 1200px) 350px, (max-width: 1920px) 500px, (max-width: 2048px) 900px, 1230px"
        src='/images.png'
        width={1230}
        height={977}
        // className={styles.image}
      />
    </div>
  );
}
