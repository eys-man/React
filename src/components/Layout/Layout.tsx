import Header from '../Header/Header';

type Props = {
  title: string;
  content: JSX.Element;
};

const Layout = (prop: Props) => {
  return (
    <div>
      <Header title={prop.title} />
      <main>{prop.content}</main>
    </div>
  );
};

export default Layout;
