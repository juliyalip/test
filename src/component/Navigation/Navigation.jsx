import { NavLink } from 'react-router-dom';
import {memo} from 'react'
import s from './navigation.module.css'
const Navigation = () => {

    const onClick =(navData) => (navData.isActive ? s.activeNav : s.nav)
 return  ( <nav>
        <ul className={s.navList}>
            <li className={s.navItem}><NavLink className={onClick} to="/">WOMAN</NavLink></li>
            <li className={s.navItem}><NavLink  className={onClick}  to="/men">MEN</NavLink></li>
            <li className={s.navItem}><NavLink  className={onClick}  to="/kids">KIDS</NavLink></li>
        </ul>
    </nav>)}


export default memo(Navigation) ;