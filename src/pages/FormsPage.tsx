import React from 'react';
import MyForm from '../components/MyForm/MyForm';
import FormCardList, {
  CardsProps,
} from '../components/FormCardList/FormCardList';

// const cardData = [
//   {
//     name: 'хуй',
//     time: '2023-01-01',
//     city: 'Mogilev',
//     gender: 'male',
//     file: 'bara.jpg',
//   },
//   {
//     name: 'пизда',
//     time: '2020-05-12',
//     city: 'Minsk',
//     gender: 'female',
//     file: 'shmara.jpg',
//   },
//   {
//     name: 'пистон',
//     time: '2000-07-31',
//     city: 'Grodno',
//     gender: 'male',
//     file: 'pip.jpg',
//   },
// ];

type cardData = Array<{
  name: string;
  time: string;
  city: string;
  isAgree: boolean;
  gender: string;
  file: string;
}>;

class FormsPage extends React.Component {
  state: cardData = [];
  render(): JSX.Element {
    return (
      <>
        <MyForm
          name={''}
          time={''}
          city={''}
          isAgree={false}
          gender={'male'}
          file={''}
        />
        {/* <FormCardList cardData={this.state} /> */}
      </>
    );
  }
}

export default FormsPage;
