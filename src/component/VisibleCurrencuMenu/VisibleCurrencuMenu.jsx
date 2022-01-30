import React from 'react';
import s from './visibleMenu.module.css'

export default function VisibleCurrencuMenu({currencu, changeInput}) {
    return (<ul className={s.list}>
          <li data-action="usd" className={s.changeItem}>
            <label className={s.label}> 
              <input type="radio" name={currencu} value="$" onChange={changeInput} checked={currencu === "&#36"} />
             $ USD
            </label> </li>
          <li data-action="eur" className={s.changeItem}>
            <label className={s.label}>
                <input  type="radio" name={currencu} value="€"  onChange={changeInput} checked={currencu ==="&#8364"} />
                € EUR
             </label>
           </li>
          <li data-action="jpy" className={s.changeItem}>
            <label className={s.label}>
              <input type="radio" name={currencu} value="¥" onChange={changeInput} checked={currencu==="&#165"}   />
             ¥ JPY
            </label>
            </li>
        </ul>)
}