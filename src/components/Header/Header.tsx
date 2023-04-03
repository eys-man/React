import './header.css';
import Nav from '../Nav/Nav';

type Props = { title: string };

const Header = (title: Props) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>{title.title}</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
