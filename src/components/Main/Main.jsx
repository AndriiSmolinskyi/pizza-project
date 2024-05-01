import { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Main.scss'

export const Main = () => {

    const {cartItems, setCartItems} = useContext(CartContext)

    const items = [
        {
            id: 1,
            img: 'imgs/1p.png',
            name: '4 сири',
            ing: 'Вершки, моцарела, горгонзола, гауда, пармезан.',
            size: '30 см',
            weight: '430 г.',
            price: 195
        }, 
        {
            id: 2,
            img: 'imgs/2p.png',
            name: 'Ла Віта',
            ing: 'Вершки, моцарела, лосось, вершковий сир, рукола, оливкова олія',
            size: '30 см.',
            weight: '530 г.',
            price: 330
        },
        {
            id: 3,
            img: 'imgs/3p.png',
            name: 'Баварія',
            ing: 'Томати подрібнені, моцарела, печериці, салямі, бекон, мисливські ковбаски.',
            size: '30 см.',
            weight: '550 г.',
            price: 230
        },
        {
            id: 4,
            img: 'imgs/4p.png',
            name: 'З білими грибами',
            ing: 'Вершки, моцарела, вершковий сир, білі гриби, оливкова олія, пармезан.',
            size: '30 см.',
            weight: '510 г.',
            price: 250
        },
        {
            id: 5,
            img: 'imgs/5p.png',
            name: 'Дитяча',
            ing: 'Подрібнені томати, моцарела, курка, ананаси, помідори чері, кукурудза.',
            size: '30 см.',
            weight: '560 г.',
            price: 205
        },
        {
            id: 6,
            img: 'imgs/6p.png',
            name: 'Жульєн',
            ing: 'Моцарела, печериці, курка, вершки, оливкова олія.',
            size: '30 см.',
            weight: '560 г.',
            price: 205
        },
        {
            id: 7,
            img: 'imgs/7p.png',
            name: 'Кальцоне',
            ing: 'Тісто для піци, подрібнені томати, моцарела, соус болоньезе.',
            size: '30 см.',
            weight: '560 г.',
            price: 220
        },
        {
            id: 8,
            img: 'imgs/8p.png',
            name: 'З креветками',
            ing: 'Подрібнені томати, моцарела, креветки, помідори чері, соус песто, оливки, оливкова олія, пармезан.',
            size: '30 см.',
            weight: '590 г.',
            price: 340
        },
        {
            id: 9,
            img: 'imgs/9p.png',
            name: 'Маргарита',
            ing: 'Томати подрібнені, моцарела, помідори чері, пармезан.',
            size: '30 см.',
            weight: '440 г.',
            price: 160
        },
        {
            id: 10,
            img: 'imgs/10p.png',
            name: 'Мікс',
            ing: 'Салямі, подрібнені томати, моцарела, бекон, мисливські ковбаски, помідори чері, маслини, маринована цибуля, оливкова олія.',
            size: '30 см.',
            weight: '580 г.',
            price: 240
        }
    ]

    const addPiza = (item) => {
        setCartItems([...cartItems, item])
    }


    return(
        <div className='main'>

            <div className="main__up">
                <h1 className='main__up__title'>Lucky - смачна піца</h1>
                <p className="main__up__text">Ми готуємо у закладі, а також здійснюємо доставку. Доставляємо з 10.30 до 21.00 без вихідних.</p>
            </div>
            
            <div className="main__block">
                {items.map(item => (
                    <div key={item.id} className='main__block__card'>
                        <div className="up">
                        <img src={item.img} alt="pizza" className='main__block__card__img'/>
                        <p className="main__block__card__name">{item.name }</p>
                        <p className="main__block__card__ing">{item.ing}</p>
                        <p className="main__block__card__table">
                            <p className="main__block__card__table__item">{item.size}</p>
                            <p className="main__block__card__table__item">{item.weight}</p>
                        </p>
                        <p className="main__block__card__price">{item.price} грн</p>
                        </div>
                        
                        <button className='main__block__card__button' onClick={() => addPiza(item)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                ))}
            </div>

        </div>    
    )
}