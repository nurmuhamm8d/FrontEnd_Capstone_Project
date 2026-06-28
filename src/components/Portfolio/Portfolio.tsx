import { useState } from 'react';
import { portfolioCategories, portfolioData } from '../../assets/data/portfolio';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  return (
    <div>
      <div className={styles['portfolio__tabs']}>
        {portfolioCategories.map((category, index) => (
          <span key={category} className={styles['portfolio__tab-wrap']}>
            <button
              type="button"
              className={
                category === activeCategory
                  ? `${styles['portfolio__tab']} ${styles['portfolio__tab--active']}`
                  : styles['portfolio__tab']
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
            {index < portfolioCategories.length - 1 && (
              <span className={styles['portfolio__separator']} aria-hidden="true">
                /
              </span>
            )}
          </span>
        ))}
      </div>
      <ul className={styles['portfolio__grid']}>
        {portfolioData.map((item) => {
          const isHidden = activeCategory !== 'All' && item.category !== activeCategory;
          return (
            <li
              key={item.id}
              className={
                isHidden
                  ? `${styles['portfolio__item']} ${styles['portfolio__item--hidden']}`
                  : styles['portfolio__item']
              }
              aria-hidden={isHidden ? 'true' : undefined}
            >
              <img src={item.image} alt={item.title} className={styles['portfolio__image']} />
              <div className={styles['portfolio__overlay']}>
                <h3 className={styles['portfolio__title']}>{item.title}</h3>
                <p className={styles['portfolio__description']}>{item.description}</p>
                <a
                  href={item.resourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles['portfolio__link']}
                >
                  View resource
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
