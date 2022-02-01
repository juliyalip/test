import { NavLink } from 'react-router-dom';
import {memo} from 'react'
import s from './navigation.module.css'
const Navigation = () => (
    <nav>
        <ul className={s.navList}>
            <li className={s.navItem}><NavLink className={(navData) => (navData.isActive ? s.activeNav : s.nav)} to="/">WOMAN</NavLink></li>
            <li className={s.navItem}><NavLink  className={(navData) => (navData.isActive ? s.activeNav : s.nav)}  to="/men">MEN</NavLink></li>
            <li className={s.navItem}><NavLink  className={(navData) => (navData.isActive ? s.activeNav : s.nav)}  to="/kids">KIDS</NavLink></li>
        </ul>
    </nav>)


export default memo(Navigation) ;