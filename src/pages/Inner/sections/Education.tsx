import { useEffect } from 'react';
import { TimeLine } from '../../../components/TimeLine/TimeLine';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Notification } from '../../../components/Notification/Notification';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchEducation } from '../../../store/educationSlice';

export const Education = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.education);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEducation());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <Spinner label="Loading education…" />;
  }

  if (status === 'failed') {
    return <Notification type="error">{error ?? 'Failed to load the education section'}</Notification>;
  }

  return (
    <TimeLine
      data={items.map(({ date, title, description }) => ({ date, title, text: description }))}
    />
  );
};
