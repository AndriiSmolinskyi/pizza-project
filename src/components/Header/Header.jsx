import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();

    const handleCart = () => {
        navigate('/cart')
    }

    const handleMain = () => {
        navigate('/')
    }

    
    return(
        <div className="header">
            <img src="imgs/logo.png" alt="" className="header__logo" />
            <div className="header__right">
                <FontAwesomeIcon icon={faCartShopping} className='header__right__item' onClick={handleCart}/>
                <FontAwesomeIcon icon={faHouse} className='header__right__item' onClick={handleMain}/>
            </div>   
        </div>    
    )
}