import { useEffect } from 'react';
import { Skills } from '../../../components/Skills/Skills';
import { AddSkillForm } from '../../../components/AddSkillForm/AddSkillForm';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Notification } from '../../../components/Notification/Notification';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchSkills } from '../../../store/skillsSlice';

export const SkillsSection = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.skills);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSkills());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <Spinner label="Загружаем навыки…" />;
  }

  if (status === 'failed') {
    return <Notification type="error">{error ?? 'Не удалось загрузить навыки'}</Notification>;
  }

  return (
    <>
      <Skills data={items} />
      <AddSkillForm />
    </>
  );
};
