import React from "react";
import "./Footer.css"

export const Footer = () => {

    return(

        <div className="main_footer">

            <div className="container">

                <div className="row">

                    <p>8 800 301 27 43
                        <br/>
                        Звонок по России бесплатный
                    </p>

                    <button>
                        Задать вопрос
                    </button>
                    <hr/>
                    {/*Column1*/}
                    <div className="col">

                        <h4>Покупателям</h4>

                        <ul className="list_unstyled">
                            <li>Клуб сомелье</li>
                            <li>Дисконтная система</li>
                            <li>Новости и акции</li>
                            <li>Корпоративным клиентам</li>
                            <li>Предложения для свадеб</li>
                            <li>Фотоотчеты</li>
                            <li>Мнение блогеров</li>
                            <li>Контакты</li>
                        </ul>
                    </div>

                    {/*Column2*/}
                    <div className="col">

                        <h4>Партнерам</h4>

                        <ul className="list_unstyled">
                            <li>Партнерам</li>
                            <li>Поставщикам</li>
                            <li>Рекламные возможности</li>
                        </ul>
                    </div>

                    {/*Column3*/}
                    <div className="col">

                        <h4>О компании</h4>

                        <ul className="list_unstyled">
                            <li>История</li>
                            <li>Группа компаний</li>
                            <li>Карьера</li>
                            <li>Контакты</li>
                            <li>Адреса магазинов</li>
                            <li>Наша жизнь</li>
                        </ul>
                    </div>

                    {/*Column4*/}
                    <div className="col">

                        <h4>Это интересно</h4>

                        <ul className="list_unstyled">
                            <li>Рецепты коктелей</li>
                            <li>Алкоголь в кулинарии</li>
                            <li>Справочник сомелье</li>
                        </ul>
                    </div>

                    <hr/>

                    <div className="row">

                        <div>
                
                            18+ Минздрав предупреждает: чрезмерное уротребление алкоголя вредит вашему здоровью
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
