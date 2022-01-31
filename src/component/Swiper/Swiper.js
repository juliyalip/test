import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Left } from '../../data/icon/left.svg';
import { ReactComponent as Rigth } from '../../data/icon/right.svg';
import s from './swiper.module.css'

function Swiper({ items }) {
    const [images, setImages] = useState(items);
    const [activeIndex, setActiveIndex] = useState(0);

    const lastSlide = () => {
        if (activeIndex <= 2 && activeIndex > 0 ) 
        setActiveIndex(prevState => prevState - 1)
    }

    const nextSlide = () => {
        if (activeIndex >= 0 && activeIndex < 2) 
      setActiveIndex(prevState => prevState + 1)
    }

    return (
        <div className={s.container}>
            <img src={images[activeIndex]} width={200} alt="foto" />
            <div className={s.containerSpan}>
                <span onClick={lastSlide} className={s.span} ><Left /></span>   
                  <span onClick={nextSlide} className={s.span} ><Rigth /></span>  
            </div>

        </div>
    )
};

Swiper.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Swiper