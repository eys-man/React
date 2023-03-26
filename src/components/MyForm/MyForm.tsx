import React from 'react';
import './MyForm.css';

type Props = { name: string };

class MyForm extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement>;
  timeInput: React.RefObject<HTMLInputElement>;
  cityInput: React.RefObject<HTMLSelectElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  genderFemaleInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.nameInput = React.createRef<HTMLInputElement>();
    this.timeInput = React.createRef<HTMLInputElement>();
    this.cityInput = React.createRef<HTMLSelectElement>();
    this.agreeInput = React.createRef<HTMLInputElement>();
    this.genderMaleInput = React.createRef<HTMLInputElement>();
    this.genderFemaleInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();
  }

  render(): JSX.Element {
    return (
      <div className="form">
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" ref={this.nameInput} />
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate: </label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            min="1900-01-01"
            max="2023-01-01"
            ref={this.timeInput}
          />
        </div>
        <div>
          <label htmlFor="city">Place of residence:</label>
          <select name="city" id="city" ref={this.cityInput}>
            <option value="Minsk">Minsk</option>
            <option value="Mogilev">Mogilev</option>
            <option value="Brest">Brest</option>
            <option value="Gomel">Gomel</option>
            <option value="Vitebsk">Vitebsk</option>
            <option value="Grodno">Grodno</option>
          </select>
        </div>
        <div>
          <label htmlFor="agree">Agree to learn React</label>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            ref={this.agreeInput}
          />
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
        <div>
          <label htmlFor="avatar">Choose file</label>
          <input type="file" id="avatar" name="file" ref={this.fileInput} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default MyForm;
