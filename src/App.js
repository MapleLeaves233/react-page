import './global.scss';

import {Layout} from "./components/Layout/Layout";
import {Container} from "./components/Container/Container";
import { Footer } from './components/Footer/Footer';
import "./App.css";




function App() {

  return (
        <Layout>
           
            <Container>
           
    
    
    <div className="all">
        <p>Главная > Оформление заказа</p>
        <div className="name_of_page">
            <h2>Оформление заказа</h2>
            <div className="part1">
                <p>Мы не продаем алкоголь дистанционно!</p>
                <br/>
                <p>Закакз резервируется, оплатить и забрать его можно только в магазине</p>
              
            </div>
            <br/>
            

            <div className="part2">
                <h3>Контакты</h3>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Номер телефона"/>
          
               
                <hr/>
                <h3>Магазин для самовывоза</h3>
                <p>Каждую секунду мы отпускаем товары на кассах в офлайн-магазинах. Товар может исчезнуть</p>
                <br/>
                <p>из наличия в процессе оформления заказа</p>
                
                <hr/>
                <label class="container">Днепровский переулок, 4
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                </label>
                <hr/>


                <label class="container">Адмирала Юмашева, 6
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>
                <hr/>


                <label class="container">Бестужева, 23
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>
                <hr/>


                <label class="container">Гамарника, 19
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>
                <hr/>


                <label class="container">40 лет ВЛКСМ, 4
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>
                <hr/>

                <p>Показать все v </p>
            </div>
            <br/>

            <div className="part3">
                <h3>Итого</h3>
                <p>Товаров..............6 шт</p>
                <br/>
                <p>К оплате..........6 276 ₽</p>
                <button className='btn'> Оформить заказ</button>
            </div>
        </div>
    </div>
    


            </Container>

        </Layout>
  );
}

export default App;
