import { NavLink } from 'react-router-dom';
import {memo} from 'react'
import s from './navigation.module.css'
const Navigation = () => (
    <nav>
        <ul className={s.navList}>
            <li className={s.navItem}><NavLink to="/">WOMAN</NavLink></li>
            <li className={s.navItem}><NavLink to="men">MEN</NavLink></li>
            <li className={s.navItem}><NavLink to="kids">KIDS</NavLink></li>
        </ul>
    </nav>)


export default memo(Navigation) ;