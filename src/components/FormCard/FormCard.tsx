import React from 'react';
import './FormCard.css';

export type FormCardProps = {
  name: string;
  time: string;
  city: string;
  gender: string;
  file: string;
};

class FormCard extends React.Component<FormCardProps> {
  // constructor(props: FormCardProps) {
  //   super(props);
  //   this.state = props;
  // }

  render(): JSX.Element {
    return (
      <div className="form-card" data-testid="form-card-test">
        <h3>{this.props.name}</h3>
        <p>{this.props.time}</p>
        <p>{this.props.city}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.file}</p>
      </div>
    );
  }
}

export default FormCard;
