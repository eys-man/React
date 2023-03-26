import React from 'react';
import './MyForm.css';
import { validateName } from '../../utils/utils';

type Props = {
  name: string;
  time: string;
  city: string;
  isAgree: boolean;
  gender: string;
  file: string;
};

class MyForm extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement>;
  isNameInputValid: boolean;
  timeInput: React.RefObject<HTMLInputElement>;
  cityInput: React.RefObject<HTMLSelectElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  isAgreeInputValid: boolean;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  isFileInputValid: boolean;
  constructor(props: Props) {
    super(props);
    this.state = props;
    this.state = { isSubmit: false };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.timeInput = React.createRef<HTMLInputElement>();
    this.cityInput = React.createRef<HTMLSelectElement>();
    this.agreeInput = React.createRef<HTMLInputElement>();
    this.genderMaleInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.isNameInputValid = true;
    this.isAgreeInputValid = true;
    this.isFileInputValid = true;
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    let isAllValid = true;

    const name = (this.nameInput.current as HTMLInputElement).value;
    const time = (this.timeInput.current as HTMLInputElement).value;
    const city = (this.cityInput.current as HTMLSelectElement).value;
    const isAgree = (this.agreeInput.current as HTMLInputElement).checked;
    let gender = 'female';
    if ((this.genderMaleInput.current as HTMLInputElement).checked === true)
      gender = 'male';
    const fileName = (this.fileInput.current as HTMLInputElement).value;

    // валидация
    if (validateName(name) !== '') {
      alert(
        'The name must contain at least six letters. Numbers and special characters are not allowed'
      );
      this.isNameInputValid = false;
    } else this.isNameInputValid = true;
    isAllValid &&= this.isNameInputValid;

    if (!fileName) {
      alert('choose a file');
      this.isFileInputValid = false;
    } else this.isFileInputValid = true;
    isAllValid &&= this.isFileInputValid;

    if (!isAgree) {
      alert('give your agreement');
      this.isAgreeInputValid = false;
    } else this.isAgreeInputValid = true;
    isAllValid &&= this.isAgreeInputValid;

    // если валидация прошла, вывести карточки
    if (isAllValid === true) {
      alert(
        `name = ${name}, birthday = ${time}, city = ${city}, isAgree = ${isAgree}, gender = ${gender}, fileName = ${fileName}`
      );
      this.setState({ isSubmit: true });
    } else this.setState({ isSubmit: true });
  }

  render(): JSX.Element {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" defaultValue="" ref={this.nameInput} />
        </div>
        {this.isNameInputValid === false && (
          <div className="warning">
            <p>
              The name must contain at least six letters. Numbers and special
              characters are not allowed
            </p>
          </div>
        )}
        <div>
          <label htmlFor="birthdate">Birthdate: </label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            min="1900-01-01"
            max="2010-01-01"
            ref={this.timeInput}
            defaultValue="2000-01-01"
          />
        </div>
        <div>
          <label htmlFor="city">Place of residence:</label>
          <select
            name="city"
            id="city"
            defaultValue="Minsk"
            ref={this.cityInput}
          >
            <option value="Minsk">Minsk</option>
            <option value="Mogilev">Mogilev</option>
            <option value="Brest">Brest</option>
            <option value="Gomel">Gomel</option>
            <option value="Vitebsk">Vitebsk</option>
            <option value="Grodno">Grodno</option>
          </select>
        </div>
        <div>
          <span>Gender</span>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              defaultChecked
              ref={this.genderMaleInput}
            />
            <label htmlFor="male">male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">female</label>
          </div>
        </div>
        <div>
          <label htmlFor="avatar">Choose file</label>
          <input type="file" id="avatar" name="file" ref={this.fileInput} />
        </div>
        {this.isFileInputValid === false && (
          <div className="warning">
            <p>Choose file</p>
          </div>
        )}
        <div>
          <label htmlFor="agree">Agree to learn React</label>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            ref={this.agreeInput}
          />
        </div>
        {this.isAgreeInputValid === false && (
          <div className="warning">
            <p>Give your agreement</p>
          </div>
        )}
        <div>
          <button type="submit" value="submit">
            Submit
          </button>
          <button type="reset" value="reset">
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default MyForm;
