import './Form.css';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormCardData } from '../../types/types';

type FormProps = {
  onChange: (data: FormCardData) => void;
};

const Form: FC<FormProps> = ({ onChange }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCardData>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormCardData> = (data): void => {
    alert(`Карточка добавлена!`);

    if (data.file !== undefined)
      data.filePath = URL.createObjectURL(data.file[0]);
    onChange(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register('name', {
            required: true,
            pattern: /[A-Za-z0-9]{6,}/i,
          })}
          type="text"
          placeholder="enter name"
        />
      </div>
      <div>
        {errors?.name && (
          <p>
            The name must contain minimum six letters. Special characters are
            not allowed
          </p>
        )}
      </div>
      <div>
        <label htmlFor="date">Birthday</label>
        <input
          {...register('date', {
            required: true,
          })}
          type="date"
          min="1900-01-01"
          max="2010-01-01"
        />
      </div>
      <div>{errors?.date && <p>Enter birthday</p>}</div>
      <div>
        <label htmlFor="city">City</label>
        <select
          {...register('city', {
            required: true,
          })}
        >
          <option value="">-- select city --</option>
          <option value="Minsk">Minsk</option>
          <option value="Mogilev">Mogilev</option>
          <option value="Brest">Brest</option>
          <option value="Grodno">Grodno</option>
          <option value="Gomel">Gomel</option>
          <option value="Vitebsk">Vitebsk</option>
        </select>
      </div>
      <div>{errors?.city && <p>Choose city</p>}</div>
      <div>
        <span>Gender</span>
        <div>
          <input
            {...register('gender', { required: true })}
            name="gender"
            type="radio"
            value="male"
            id="male"
          />
          <label htmlFor="male">male</label>
          <input
            {...register('gender', { required: true })}
            name="gender"
            type="radio"
            value="female"
            id="female"
          />
          <label htmlFor="female">female</label>
        </div>
      </div>
      <div>{errors?.gender?.type === 'required' && <p>Choose gender</p>}</div>
      <div>
        <label htmlFor="picture">Choose file</label>
        <input
          {...register('file', { required: true })}
          type="file"
          id="picture"
        />
      </div>
      <div>{errors?.file && <p>Choose file</p>}</div>
      <div>
        <label htmlFor="agree">Agree to learn React</label>
        <input
          {...register('agree', { required: true })}
          type="checkbox"
          id="agree"
        />
      </div>
      <div>{errors?.agree && <p>If you want to learn React check it</p>}</div>
      <input type="submit" />
    </form>
  );
};

export default Form;
