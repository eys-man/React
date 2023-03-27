import React from 'react';
import MyForm from '../components/MyForm/MyForm';
import { CardsProps } from 'components/FormCardList/FormCardList';

class FormsPage extends React.Component<CardsProps> {
  render(): JSX.Element {
    return (
      <>
        <MyForm {...this.props} />
      </>
    );
  }
}

export default FormsPage;
