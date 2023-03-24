import React from 'react';
import './card.css';

export type props = {
  id: number;
  image: string;
  title: string;
  description: string;
};

class Card extends React.Component<props> {
  render(): JSX.Element {
    return (
      <div className="card-wrapper" data-testid="card-test">
        <h3 className="card-title">
          <b>{this.props.id}</b>. {this.props.title}
        </h3>
        <img
          className="card-image"
          src={this.props.image}
          alt={this.props.title}
        />
        <p className="card-description">{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
