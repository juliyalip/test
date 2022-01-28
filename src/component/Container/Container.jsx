import React from 'react';
import Header from '../Heder/Heder';
import ModalCart from '../ModalCart/ModalCart';
import s from './container.module.css';

const Container = ({ children, openModal, showModal }) => {

 

    return (<div className={s.container}>
    
     <Header openModal={openModal} />
{ showModal &&    <ModalCart toggleModal={openModal}/>}
{children}
        
    </div>)
}
;

export default Container;
