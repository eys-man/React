import React from 'react';
import './FormCard.css';

export type CardData = {
  name: string;
  time: string;
  city: string;
  isAgree: boolean;
  gender: string;
  file: string;
};

class FormCard extends React.Component<CardData> {
  render(): JSX.Element {
    return (
      <div className="form-card" data-testid="form-card-test">
        <h3>{this.props.name}</h3>
        <p>{this.props.time}</p>
        <p>{this.props.city}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.file}</p>
        <p>{this.props.isAgree}</p>
      </div>
    );
  }
}

export default FormCard;
