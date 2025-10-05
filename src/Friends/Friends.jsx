import styles from './Friends.module.css';

export const Friends = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <li className={styles.item} key={item.id}>
          <span
            className={`${styles.status} ${item.isOnline ? styles.online : styles.offline}`}
          ></span>
          <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </>
  );
}