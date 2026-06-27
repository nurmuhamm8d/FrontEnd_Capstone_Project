import { useEffect, useState } from 'react';
import { EditIcon } from '../../../assets/icons/nav/edit';
import { Skills } from '../../../components/Skills/Skills';
import { AddSkillForm } from '../../../components/AddSkillForm/AddSkillForm';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Notification } from '../../../components/Notification/Notification';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchSkills } from '../../../store/skillsSlice';
import styles from './SkillsSection.module.scss';

export const SkillsSection = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.skills);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSkills());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <Spinner label="Loading skills…" />;
  }

  if (status === 'failed') {
    return <Notification type="error">{error ?? 'Failed to load skills'}</Notification>;
  }

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <button type="button" className={styles.openEdit} onClick={() => setIsEditOpen((open) => !open)}>
          <EditIcon aria-hidden="true" />
          <span>Open edit</span>
        </button>
      </div>
      {isEditOpen && <AddSkillForm />}
      <Skills data={items} />
    </>
  );
};
