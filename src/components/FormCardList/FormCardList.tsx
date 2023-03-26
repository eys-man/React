import React from 'react';
import FormCard, { FormCardProps } from '../FormCard/FormCard';

export type CardsProps = {
  cardData: FormCardProps[];
};

class FormCardList extends React.Component<CardsProps> {
  render(): JSX.Element {
    const { cardData } = this.props;
    return (
      <>
        {cardData.map((cardProps: FormCardProps): JSX.Element => {
          return <FormCard key={cardProps.name} {...cardProps} />;
        })}
      </>
    );
  }
}

export default FormCardList;
