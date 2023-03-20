/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card, { props } from '../Card/card';
import cardData from '../../mock/mock';

type CardsProps = {
  cardData: typeof cardData;
};

class CardList extends React.Component<CardsProps> {
  render(): JSX.Element {
    const { cardData } = this.props;
    return (
      <>
        {cardData.map((cardProps: props): JSX.Element => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Card key={cardProps.id} {...cardProps} />;
        })}
      </>
    );
  }
}

export default CardList;
