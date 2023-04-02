import React from 'react';
import Form from '../components/Form/Form';
import { CardsProps } from 'components/FormCardList/FormCardList';

class FormsPage extends React.Component<CardsProps> {
  render(): JSX.Element {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default FormsPage;
