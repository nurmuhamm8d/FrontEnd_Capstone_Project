import { useState } from 'react';
import { portfolioCategories, portfolioData } from '../../assets/data/portfolio';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const visibleItems =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className={styles.tabs}>
        {portfolioCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? `${styles.tab} ${styles.active}` : styles.tab}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className={styles.grid}>
        {visibleItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3 className={styles.title}>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
