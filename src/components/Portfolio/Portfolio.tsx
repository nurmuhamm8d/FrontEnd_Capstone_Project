import { useState } from 'react';
import { portfolioCategories, portfolioData } from '../../assets/data/portfolio';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const visibleItems = portfolioData.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div>
      <div className={styles.tabs}>
        {portfolioCategories.map((category, index) => (
          <span key={category} className={styles.tabWrap}>
            <button
              type="button"
              className={category === activeCategory ? `${styles.tab} ${styles.active}` : styles.tab}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
            {index < portfolioCategories.length - 1 && (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            )}
          </span>
        ))}
      </div>
      <ul className={styles.grid}>
        {visibleItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <a
                href={item.resourceUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                View resource
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
