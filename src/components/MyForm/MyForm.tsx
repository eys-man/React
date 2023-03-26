import React from 'react';
import './MyForm.css';

type Props = { name: string };

class MyForm extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement>;
  timeInput: React.RefObject<HTMLInputElement>;
  cityInput: React.RefObject<HTMLSelectElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = { isSubmit: false };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.timeInput = React.createRef<HTMLInputElement>();
    this.cityInput = React.createRef<HTMLSelectElement>();
    this.agreeInput = React.createRef<HTMLInputElement>();
    this.genderMaleInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const name = (this.nameInput.current as HTMLInputElement).value;
    const time = (this.timeInput.current as HTMLInputElement).value;
    const city = (this.cityInput.current as HTMLSelectElement).value;
    const isAgree = (this.agreeInput.current as HTMLInputElement).checked;
    let gender = '';
    if ((this.genderMaleInput.current as HTMLInputElement).checked === true)
      gender = 'male';
    else gender = 'female';
    const fileName = (this.fileInput.current as HTMLInputElement).value;

    alert(
      `name = ${name}, birthday = ${time}, city = ${city}, isAgree = ${isAgree}, gender = ${gender}, fileName = ${fileName}`
    );
  }

  render(): JSX.Element {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" defaultValue="" ref={this.nameInput} />
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
            defaultValue="2000-01-01"
          />
        </div>
        <div>
          <label htmlFor="city">Place of residence:</label>
          <select
            name="city"
            id="city"
            defaultValue="Mogilev"
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
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">female</label>
          </div>
        </div>
        <div>
          <label htmlFor="avatar">Choose file</label>
          <input type="file" id="avatar" name="file" ref={this.fileInput} />
        </div>
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
