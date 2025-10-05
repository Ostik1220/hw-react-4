import styles from './statistics.module.css';

export const Statistics = ({ info }) => {
  return (
    <>
      {info.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </>
  );
};
