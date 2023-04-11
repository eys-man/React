import Header from '../Header/Header';

type Props = {
  title: string;
  content: JSX.Element;
};

const Layout = (prop: Props) => {
  return (
    <>
      <Header title={prop.title} />
      <main>{prop.content}</main>
    </>
  );
};

export default Layout;
