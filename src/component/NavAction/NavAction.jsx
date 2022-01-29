import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCartSelector, getGlobalCurrencuSelector } from '../../redux/cart-selector';
// import {ReactComponent as Dolar} from '../../data/icon/dolar.svg'
import { ReactComponent as Open } from '../../data/icon/open.svg';
import { ReactComponent as Cart } from '../../data/icon/cart.svg';
import VisibleCurrencuMenu from '../VisibleCurrencuMenu/VisibleCurrencuMenu';
import ModalCart from '../ModalCart/ModalCart';
import {changeCurrentSuccess } from '../../redux/cart-action'
import s from './navAction.module.css'


export default function NavAction() {
  const value = useSelector(getTotalCartSelector);
  const currencu = useSelector(getGlobalCurrencuSelector);
  const dispatch = useDispatch()

  const [visibleMenu, setVisibleMenu] = useState(false)
  
  const openChangeMenu = () => {
    setVisibleMenu(prevVisibleMenu => !prevVisibleMenu)
   
  };

    const [showModal, setShowModal] = useState(false);

    
    const toggleModal = useCallback(() => {
      setShowModal(prevState => !prevState)
    
}, [])
 
  const changeInput = e => {
    dispatch(changeCurrentSuccess(e.target.value));
    setVisibleMenu(prevVisibleMenu => !prevVisibleMenu);
    console.log(currencu)


  }

    return (
      <div className={s.container}>
        <ul className={s.iconList}>
          <li className={s.iconItem} onClick={openChangeMenu}><span> { currencu}</span></li>

          <li className={s.iconItem} onClick={ toggleModal} >  <Open /></li>
          <li className={s.iconItem} > <Link to="/cart"> <Cart /></Link></li>
        </ul>
        <span className={s.span}>{value}</span>

        {visibleMenu && <VisibleCurrencuMenu
          currencu={currencu} changeInput={changeInput} />}
        

        {showModal && <ModalCart toggleModal={toggleModal} />}
        
      </div>
    )
  }

;

