import React from 'react';

type Props = { ref: HTMLInputElement };

class NameInput extends React.Component<Props> {
  public state = { name: '' };

  render(): JSX.Element {
    return (
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" />
      </div>
    );
  }
}

export default NameInput;
