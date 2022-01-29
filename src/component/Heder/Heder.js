import NavAction from "../NavAction/NavAction";
import Navigation from "../Navigation/Navigation";
import s from './heder.module.css';
import { ReactComponent as Logo } from './logo.svg';


const Header = () => (
    <header >
        <div className={s.container}>
        <Navigation />
        <Logo />
            <NavAction  />
            </div>
    </header>
);

export default Header;