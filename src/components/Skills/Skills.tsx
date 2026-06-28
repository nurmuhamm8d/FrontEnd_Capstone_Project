import type { SkillItem } from '../../assets/data/skills';
import styles from './Skills.module.scss';

const SCALE_LABELS = ['Beginner', 'Proficient', 'Expert', 'Master'];

export interface SkillsProps {
  data: SkillItem[];
  onRemove?: (name: string) => void;
}

export const Skills = ({ data, onRemove }: SkillsProps) => (
  <div className={styles.skills}>
    <ul className={styles['skills__bars']}>
      {data.map(({ name, range, children }) => (
        <li key={name}>
          <div className={styles['skills__row']}>
            <span className={styles['skills__bar']} style={{ width: `${range}%` }}>
              {name}
            </span>
            {onRemove && (
              <button
                type="button"
                className={styles['skills__remove']}
                onClick={() => onRemove(name)}
                aria-label={`Remove ${name}`}
              >
                ×
              </button>
            )}
          </div>
          {children && (
            <ul className={styles['skills__sub-bars']}>
              {children.map((child) => (
                <li key={child.name} className={styles['skills__row']}>
                  <span className={styles['skills__sub-bar']} style={{ width: `${child.range}%` }}>
                    {child.name}
                  </span>
                  {onRemove && (
                    <button
                      type="button"
                      className={styles['skills__remove']}
                      onClick={() => onRemove(child.name)}
                      aria-label={`Remove ${child.name}`}
                    >
                      ×
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    <div className={styles['skills__scale']}>
      {SCALE_LABELS.map((label) => (
        <span key={label} className={styles['skills__scale-item']}>
          <span className={styles['skills__scale-tick']} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  </div>
);
