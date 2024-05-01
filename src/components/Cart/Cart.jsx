import './Cart.scss'
import { CartContext } from '../../CartContext'
import { useState, useContext, useEffect } from 'react'

export const Cart = () => {
    const {cartItems, setCartItems} = useContext(CartContext)

    // Функція для обчислення загальної кількості товарів у кошику
    const calculateTotalQuantity = () => {
        let sum = cartItems.length;
        console.log(sum)
        return sum;
    }

    const calculateTotalPrice = () => {
        let sum = 0;
        for (let index = 0; index < cartItems.length; index++) {
            sum += cartItems[index].price;        
        }
        return sum;
    }

    const handleDelete = (itemId) => {
        // Фільтруємо масив cartItems, залишаючи тільки айтеми, що не мають переданого itemId
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        // Оновлюємо стан кошика, передаючи оновлений масив айтемів
        setCartItems(updatedCartItems);
    }
    


    // Функція для відправлення замовлення
    const placeOrder = () => {
        setCartItems([]);
    }

    return(
        <div className='cart'>
            <div className="cart__left">
                <h2 className="cart__left__title">Ваше замовлення</h2>
                <p className="cart__left__text">Кількість товарів: {calculateTotalQuantity()}</p>
                <p className="cart__left__text">Загальна ціна: {calculateTotalPrice()}</p>
                <form onSubmit={placeOrder} className='cart__form'>
                    <div className="cart__form__item">
                        <label htmlFor="name" className='cart__form__label'>Ваше імя</label>
                        <input type="text" placeholder="Ваше ім'я" required className='cart__form__input' id='name'/>
                    </div>
                    <div className="cart__form__item">
                        <label htmlFor="tel" className='cart__form__label'>Ваш телефон</label>
                        <input type="tel" placeholder="Ваш номер телефону" required className='cart__form__input' id='tel'/>
                    </div>
                    <div className="cart__form__item">
                        <label htmlFor="post" className='cart__form__label'>Ваша адреса</label>
                        <input type="text" placeholder="Ваша адреса" required className='cart__form__input' id='post'/>
                    </div>
                    <button type="submit" className='cart__form__button'>Замовити</button>
                </form>
            </div>
            <div className="cart__right">
                {cartItems.map(item => (
                    <div key={item.id} className='cart__right__card'>
                        <div className="cart__right__card__right">
                            <img src={item.img} alt="pizza" className='cart__right__card__img'/>
                            <div className="text">
                                <p className="cart__right__card__name">{item.name }</p>
                                <p className="cart__right__card__ing">{item.ing}</p>
                                <button onClick={() => handleDelete(item.id)} className='cart__right__card__btn'>Видалити</button>
                            </div>
                        </div>
                        <div className="cart__right__card__left"> 
                            <p className="cart__right__card__price">{item.price} грн.</p>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>    
    )
}