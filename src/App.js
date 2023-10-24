import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import Gallery from './components/Gallery';

function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const botRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (scrolling) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
      setScrolling(false);
    }
  }, [scrolling]);

  useEffect(() => {
    swiperInstance.current.swiper.slideTo(activeSlideIndex, 0, false);
  }, [activeSlideIndex]);

  const scrollToBot = (index) => {
    setActiveSlideIndex(index);
    setScrolling(true);
  };

  const swiperInstance = useRef(null);

  const sections = [
    {
      title: 'Додо Бот Розница',
      text: 'Информационный бот, разработан для сотрудников розничной сети Додо Пицца.',
      text2: 'Бот предоставляет информацию о стандартах работы, выплатах, бонусах и новостях компании, как для новичков, так и для опытных сотрудников. Каждый новый сотрудник изучает базовую информацию о новой работе в удобном формате через телеграм. Также этот бот умеет собирать статистику о пользователях и оформлять ее в виде отчета по запросу командой. ',
      images: ['./img/botInfo/dodoInfo/0.png', './img/botInfo/dodoInfo/1.png', './img/botInfo/dodoInfo/2.png', './img/botInfo/dodoInfo/3.png', './img/botInfo/dodoInfo/4.png', './img/botInfo/dodoInfo/5.png'],
    },
    {
      title: 'Нам важен каждый',
      text: 'Бот разработан для сбора обратной связи для сотрудников пиццерии сети Додо пицца.',
      text2: 'Бот создан для сбора обратной связи после увольнения от сотрудников пиццерий сети Додо пицца. Собирает данные о каждой оставленной обратной связи в Гугл таблицу в виде отчета с данными о каждом пользователе в реальном времени.',
      images: ['./img/botInfo/dodoImportant/0.png', './img/botInfo/dodoImportant/1.png', './img/botInfo/dodoImportant/2.png'],
    },
    {
      title: 'Union',
      text: 'Копия одного очень популярного бота, по продаже кроссовок.',
      text2: 'Бот веб-приложение разработан как шаблон для любого интернет-магазина. Может быть переделан под любой запрос заказчика. Предоставляет новый опыт клиентам заказчика, т.к формат Web-App еще не распространен среди пользователей и вызывает заинтересованность.',
      images: ['./img/botInfo/union/0.png', './img/botInfo/union/1.png', './img/botInfo/union/2.png', './img/botInfo/union/3.png', './img/botInfo/union/4.png', './img/botInfo/union/5.png'],
    },

    {
      title: 'Додо Напоминания',
      text: 'Бот напоминаний о плановых работах.',
      text2: 'Телеграм бот берет информацию из Гугл таблиц, где у заказчика уже расписаны плановые работы для пиццерий, после чего присылает уведомление в чаты (может быть сколько угодно) сотрудников о необходимости провести какую-либо проверку оборудования, чистку или работу. Также в боте есть возможность создавать динамические напоминания прямо через чат в телеграмме.',
      images: ['./img/botInfo/reminders/0.png', './img/botInfo/reminders/1.png', './img/botInfo/reminders/2.png', './img/botInfo/reminders/3.png'],
    },

    {
      title: 'Табак 13',
      text: 'Интернет-магазин табачных изделий.',
      text2: 'Работающий пример интернет-магазина по продаже табака и табачных изделий, разработанного с помощью Web App внутри Телеграм. Клиент заказчика может оформить заказ и произвести оплату не выходя из Телеграмма.',
      images: ['./img/botInfo/tabak/0.png', './img/botInfo/tabak/1.png', './img/botInfo/tabak/2.png', './img/botInfo/tabak/3.png', './img/botInfo/tabak/4.png', './img/botInfo/tabak/5.png'],
    },

    {
      title: 'Приведи друга в Додо',
      text: 'Бот реферальной программы Додо',
      text2: 'Бот реализует внутреннюю акцию для сотрудников "Приведи друга". Для получения премии сотрудник выбирает конкретную пиццерию куда бы хотел пригласить работать своего друга и вводит его данные, далее данные о кандидате попадают в Гугл таблицу, откуда менеджер по найму берет информацию и приглашает кандидата на собеседывание.',
      images: ['./img/botInfo/dodoFriend/0.png', './img/botInfo/dodoFriend/1.png', './img/botInfo/dodoFriend/2.png'],
    },

    {
      title: 'Приведи друга в Додо (акция для клиентов)',
      text: 'Бот внешней реферальной программы Додо',
      text2: 'Бот работает по тому же принципу что и внутренняя реферальная программа, но используется для клиентов пиццерии. Ссылка на бота в виде QR-кода используется в рекламных кампаниях Додо. Для получения вознаграждения клиент выбирает конкретную пиццерию куда бы хотел пригласить работать своего друга и вводит его данные, далее данные о кандидате попадают в Гугл таблицу, откуда менеджер по найму берет информацию и приглашает кандидата на собеседывание.',
      images: ['./img/botInfo/dodoGuest/0.png', './img/botInfo/dodoGuest/1.png', './img/botInfo/dodoGuest/2.png'],
    },

    {
      title: 'Работа в Додо',
      text: 'Бот-анкета для соискателей',
      text2: 'Данный бот используется в рекламных кампаниях Додо различной сети и предлагает соискателю сначала выбрать ближайшую к его дому пиццерию с помощью передачи геопозиции, либо выбрать желаемую самостоятельно, далее кандидат заполняет желаемую должность и данные о себе, после данные о кандидате попадают в Гугл таблицу, откуда менеджер по найму берет информацию и приглашает кандидата на собеседывание.',
      images: ['./img/botInfo/dodoWork/0.png', './img/botInfo/dodoWork/1.png', './img/botInfo/dodoWork/2.png', './img/botInfo/dodoWork/3.png', './img/botInfo/dodoWork/4.png', './img/botInfo/dodoWork/5.png'],
    },

    {
      title: 'Sugi Loft Bot',
      text: 'Бот по продаже билетов на мероприятия',
      text2: 'С помощью этого бота любой желающий может купить билет на ближайшее мероприятие, которое проводит Sugi Loft. Информацию об оплате проверяет администратор в отдельном чате, после подтверждения, клиент получает личный QR-код и несколько напиток в баре.',
      images: ['./img/botInfo/sugiloft/0.png', './img/botInfo/sugiloft/1.png', './img/botInfo/sugiloft/2.png', './img/botInfo/sugiloft/3.png', './img/botInfo/sugiloft/4.png', './img/botInfo/sugiloft/5.png'],
    },

  ];

  return (
    <div className="app-container">
      <div className='circle-group-1'>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
      </div>

      <section className='hello'>
        <div className="header-wrapper">
          <h2 className="header-title">Добро пожаловать</h2>
          <p className="header-text">
            В этом портфолио представлены мои работы и проекты в области создания ботов и веб-приложений. Моя цель - воплотить ваши идеи в реальность и предоставить вам инновационные решения для вашего бизнеса.
          </p>
          <MdOutlineKeyboardArrowDown className="arrow-icon" onClick={scrollToBot} />
        </div>
        <div className="bot-wrapper">
          {Array(9)
            .fill()
            .map((_, index) => (
              <div key={index} className="bot" data-bot={index}>
                <img
                  className="bot-img"
                  src={'./img/' + index + '.png'}
                  alt={`Bot ${index}`}
                  onClick={() => scrollToBot(index)}
                />
              </div>
            ))}
        </div>
      </section>

      <div className='circle-group-2'>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
      </div>

      <Swiper
        ref={swiperInstance}
        className='bots'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        initialSlide={activeSlideIndex}
      >
        {sections.map((section, index) => (
          <SwiperSlide className='gallery-slide' key={index}>
            <Gallery botRef={botRef} {...section} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
