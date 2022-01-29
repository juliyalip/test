import React from 'react';
import Header from '../Heder/Heder';
import s from './container.module.css';

const Container = ({ children }) => {

 

    return (<div className={s.container}>
    
     <Header  />

{children}
        
    </div>)
}
;

export default Container;
