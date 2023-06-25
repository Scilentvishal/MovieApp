import Image from 'next/image';
import styles from '../style/common.module.css';
import Link from 'next/link';
const MovieCard = ({ id, title, synopsis, bg }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={bg} alt={title} width={400} height={300} />
        </div>
        <div className={styles.card_data}>
          <h2>{title}</h2>
          <p>{synopsis}</p>
          <Link href={`/movie/${id}`}>
            <button className={styles.btn}>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
