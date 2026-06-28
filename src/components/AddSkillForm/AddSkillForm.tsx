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
    .required('Skill name is required')
    .min(2, 'Minimum 2 characters')
    .max(40, 'Maximum 40 characters')
    .matches(/^[A-Za-z0-9\s./+#-]+$/, 'Only letters, numbers and . / + # - are allowed'),
  range: Yup.number()
    .typeError('Skill range must be a number')
    .required('Skill range is required')
    .min(1, 'Minimum 1%')
    .max(100, 'Maximum 100%'),
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
        <Form className={styles['add-skill-form']}>
          <div className={styles['add-skill-form__field']}>
            <label htmlFor="skill-name">Skill name:</label>
            <Field id="skill-name" name="name" type="text" placeholder="Enter skill name" />
          </div>
          <ErrorMessage name="name" component="span" className={styles['add-skill-form__field-error']} />
          <div className={styles['add-skill-form__field']}>
            <label htmlFor="skill-range">Skill range:</label>
            <Field id="skill-range" name="range" type="number" min={1} max={100} placeholder="Enter skill range" />
          </div>
          <ErrorMessage name="range" component="span" className={styles['add-skill-form__field-error']} />
          <button type="submit" className={styles['add-skill-form__submit']} disabled={isSubmitting}>
            Add skill
          </button>
          {addStatus === 'failed' && (
            <Notification type="error">{addError ?? 'Failed to save the skill'}</Notification>
          )}
        </Form>
      )}
    </Formik>
  );
};
