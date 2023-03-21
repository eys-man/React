/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import Header from '../Header/Header';

type props = {
  title: string;
  content: JSX.Element;
};

class Layout extends React.Component<props> {
  public render(): JSX.Element {
    return (
      <>
        <Header title={this.props.title} />
        <main>{this.props.content}</main>
      </>
    );
  }
}

export default Layout;
