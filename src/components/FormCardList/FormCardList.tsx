import React from 'react';
import FormCard, { CardData } from '../FormCard/FormCard';

export type CardsProps = {
  cardData: CardData[];
};

class FormCardList extends React.Component<CardsProps> {
  render(): JSX.Element {
    const { cardData } = this.props;
    return (
      <>
        {cardData.map((card: CardData): JSX.Element => {
          return <FormCard key={card.name} {...card} />;
        })}
      </>
    );
  }
}

export default FormCardList;
