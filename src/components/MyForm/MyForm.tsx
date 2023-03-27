import React from 'react';
import './MyForm.css';
import { validateName } from '../../utils/utils';
import FormCardList, { CardsProps } from '../FormCardList/FormCardList';

class MyForm extends React.Component<CardsProps> {
  nameInput: React.RefObject<HTMLInputElement>;
  isNameInputValid: boolean;
  timeInput: React.RefObject<HTMLInputElement>;
  cityInput: React.RefObject<HTMLSelectElement>;
  isCityInputValid: boolean;
  agreeInput: React.RefObject<HTMLInputElement>;
  isAgreeInputValid: boolean;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  genderFemaleInput: React.RefObject<HTMLInputElement>;
  isGenderInputValid: boolean;
  fileInput: React.RefObject<HTMLInputElement>;
  isFileInputValid: boolean;

  cardList: CardsProps;
  constructor(props: CardsProps) {
    super(props);
    this.state = props;
    this.state = { isSubmit: false };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.timeInput = React.createRef<HTMLInputElement>();
    this.cityInput = React.createRef<HTMLSelectElement>();
    this.agreeInput = React.createRef<HTMLInputElement>();
    this.genderMaleInput = React.createRef<HTMLInputElement>();
    this.genderFemaleInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.isNameInputValid = true;
    this.isAgreeInputValid = true;
    this.isCityInputValid = true;
    this.isFileInputValid = true;
    this.isGenderInputValid = true;

    this.cardList = { cardData: [] };
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    let isAllValid = true;

    const name = (this.nameInput.current as HTMLInputElement).value;
    const time = (this.timeInput.current as HTMLInputElement).value;
    const city = (this.cityInput.current as HTMLSelectElement).value;
    const isAgree = (this.agreeInput.current as HTMLInputElement).checked;

    let gender = '';
    if (
      (this.genderMaleInput.current as HTMLInputElement).checked === false &&
      (this.genderFemaleInput.current as HTMLInputElement).checked === false
    ) {
      this.isGenderInputValid = false;
    } else if (
      (this.genderMaleInput.current as HTMLInputElement).checked === true
    ) {
      gender = 'male';
      this.isGenderInputValid = true;
    } else {
      gender = 'female';
      this.isGenderInputValid = true;
    }
    isAllValid &&= this.isGenderInputValid;

    const fileName = (this.fileInput.current as HTMLInputElement).value;

    if (validateName(name) !== '') {
      this.isNameInputValid = false;
    } else this.isNameInputValid = true;
    isAllValid &&= this.isNameInputValid;

    if (city === '') {
      this.isCityInputValid = false;
    } else this.isCityInputValid = true;
    isAllValid &&= this.isCityInputValid;

    if (!fileName) {
      this.isFileInputValid = false;
    } else this.isFileInputValid = true;
    isAllValid &&= this.isFileInputValid;

    if (!isAgree) {
      this.isAgreeInputValid = false;
    } else this.isAgreeInputValid = true;
    isAllValid &&= this.isAgreeInputValid;

    if (isAllValid === true) {
      alert(
        `CARD ADDED TO THE LIST\nname = ${name}\nbirthday = ${time}\ncity = ${city}\ngender = ${gender}\nfileName = ${fileName}\nisAgree = ${isAgree}`
      );
      this.cardList.cardData.push({
        name,
        time,
        city,
        gender,
        file: fileName,
        isAgree,
      });
      this.setState({ isSubmit: true });
    } else this.setState({ isSubmit: true });
  }

  render(): JSX.Element {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="birthdate">Birthdate:</label>
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
            <select name="city" id="city" defaultValue="" ref={this.cityInput}>
              <option value=""></option>
              <option value="Minsk">Minsk</option>
              <option value="Mogilev">Mogilev</option>
              <option value="Brest">Brest</option>
              <option value="Gomel">Gomel</option>
              <option value="Vitebsk">Vitebsk</option>
              <option value="Grodno">Grodno</option>
            </select>
          </div>
          {this.isCityInputValid === false && (
            <div className="warning">
              <p>Choose city</p>
            </div>
          )}
          <div>
            <span>Gender</span>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                ref={this.genderMaleInput}
              />
              <label htmlFor="male">male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                ref={this.genderFemaleInput}
              />
              <label htmlFor="female">female</label>
            </div>
          </div>
          {this.isGenderInputValid === false && (
            <div className="warning">
              <p>Choose gender</p>
            </div>
          )}
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
        <div>
          <h2>Card List</h2>
          <FormCardList cardData={this.cardList.cardData} />
        </div>
      </>
    );
  }
}

export default MyForm;
