import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addSkill } from '../../store/skillsSlice';
import { Notification } from '../Notification/Notification';
import styles from './AddSkillForm.module.scss';

interface FormValues {
  name: string;
  range: number | '';
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Укажите название навыка')
    .min(2, 'Минимум 2 символа')
    .max(40, 'Максимум 40 символов')
    .matches(/^[A-Za-zА-Яа-яЁё0-9\s./+#-]+$/, 'Разрешены только буквы, цифры и . / + # -'),
  range: Yup.number()
    .typeError('Уровень должен быть числом')
    .required('Укажите уровень владения')
    .min(1, 'Минимум 1%')
    .max(100, 'Максимум 100%'),
});

const initialValues: FormValues = { name: '', range: '' };

export const AddSkillForm = () => {
  const dispatch = useAppDispatch();
  const { addStatus, addError } = useAppSelector((state) => state.skills);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await dispatch(addSkill({ name: values.name, range: Number(values.range) }));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="skill-name">Навык</label>
            <Field id="skill-name" name="name" type="text" placeholder="Например, GraphQL" />
            <ErrorMessage name="name" component="span" className={styles.fieldError} />
          </div>
          <div className={styles.field}>
            <label htmlFor="skill-range">Уровень, %</label>
            <Field id="skill-range" name="range" type="number" min={1} max={100} />
            <ErrorMessage name="range" component="span" className={styles.fieldError} />
          </div>
          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            Добавить навык
          </button>
          {addStatus === 'failed' && (
            <Notification type="error">{addError ?? 'Не удалось сохранить навык'}</Notification>
          )}
        </Form>
      )}
    </Formik>
  );
};
