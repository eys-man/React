import React from 'react';
import Form from '../components/Form/Form';
import { FormCardData } from '../Types/Types';
// import CardList from '../components/CardList/CardList';

class FormPage extends React.Component<FormCardData> {
  render(): JSX.Element {
    return (
      <>
        <Form />
        {/* <CardList /> */}
      </>
    );
  }
}

export default FormPage;
