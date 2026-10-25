import React, { useState, useEffect } from 'react';
import '../css/style.css';

// Импорты иконок для статус-бара (убедитесь, что пути совпадают с вашими палками)
import signal from '../img/status-bar/signal.png';
import wifi from '../img/status-bar/wifi.png';
import battery from '../img/status-bar/battery.png';
import profilePic from '../img/profile-pic.png';
import bonus from '../img/bonus.png';
import cardChild from '../img/card-child.png';
import mascot from '../img/masсot.png';
import phoneCall from '../img/phone-call.png';
import receipt from '../img/receipt.png';
import chatBubble from '../img/chat-bubble.png';
import metro from '../img/metro.png';
import home from '../img/panel-child/home.png';
import transfer from '../img/panel-child/transfer.png';
import history from '../img/panel-child/history.png';
import mascotPanel from '../img/panel-child/mascotPanel.png';

export default function App() {
  // Состояния для переключения вкладок
  const [childTab, setChildTab] = useState('main');
  const [parentTab, setParentTab] = useState('main');

  // Живые часы для статус-бара
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phones-container">

      {/* ================= ТЕЛЕФОН 1: РЕБЁНОК ================= */}
      <div className="phone-wrapper child-phone">
        <h2 className="phone-title">Ребёнок</h2>
        
        <div className="phone">
          <div className="screen">
            {/* Статус-бар (шапка) */}
            <div className="curtain">
              <div className="notch"></div>
              <div className="Time">{currentTime || "12:30"}</div>
              <div className="status-bar">
                <span className="signal"><img src={signal} alt="signal" /></span>
                <span className="wi-fi"><img src={wifi} alt="wifi" /></span>
                <span className="battery"><img src={battery} alt="battery" /></span>
              </div>
            </div>

            {/* Экраны ребенка */}
            {childTab === 'main' && (
              <div className="screen-tab active child-home-screen">
                
                {/* 1. ВЕРХНЯЯ ШАПКА С АВАТАРКОЙ И БОНУСАМИ */}
                <div className="child-header">
                  <div className="child-profile">
                    <img 
                      src={profilePic} 
                      alt="Аватар" 
                      className="avatar-img"
                    />
                  </div>
                  <span className="bonuses-badge">
                    <div className="bonus-num">820</div>
                    <div className="bonus-icon">
                      <img src={bonus} alt="Бонусы" />
                    </div>
                  </span>
                </div>

                {/* 2. БАНКОВСКАЯ КАРТА */}
                <div className="bank-card">
                  <img src={cardChild} alt="Банковская карта" className="bank-card-image" />
                  <div className="bank-card-balance">2 450,99 ₽</div>
                </div>

                {/* 3. ПЕРСОНАЖ (ПИТОМЕЦ) */}
                <div className="character-container">
                  {/* Здесь вы позже сможете заменить emoji или div на вашу картинку леопарда через <img src="..." /> */}
                  <div className="character-avatar-big">
                    <img src={mascot} alt="Питомец" />
                  </div>
                </div>

                {/* 4. ТРИ КНОПКИ БЫСТРЫХ ДЕЙСТВИЙ */}
                <div className="action-buttons-grid">
                  <button className="action-card">
                    <img src={phoneCall} alt="Позвонить" className='phoneCall'/>
                    <span>Позвонить</span>
                  </button>
                  <button className="action-card">
                      <img src={receipt} alt="Загрузить чек" className='receipt'/>
                    <span>Загрузить чек</span>
                  </button>
                  <button className="action-card">
                      <img src={chatBubble} alt="Написать" className='chatBubble'/>
                    <span>Написать</span>
                  </button>
                </div>

                {/* 5. БЛОК "МОЖНО СЕЙЧАС" */}
                <div className="section-block">
                  <div className="section-header">
                    <h3>Можно сейчас</h3>
                    <span className="active-badge">1 активн.</span>
                  </div>

                  <div className="limit-card">
                    <div className="limit-icon-wrap">
                      <img src={metro} alt="Иконка лимита" className="limit-icon" />
                    </div>
                    <div className="limit-info">
                      <div className="limit-title-row">
                        <span className="limit-name">Метро</span>
                      </div>
                      <p className="limit-desc">Проезд</p>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                      </div>
                      <p className="limit-footer">осталось <strong>120 ₽</strong> из 120 ₽</p>
                    </div>
                    <div className="limit-timer">
                      <span>7 ч</span>
                    </div>
                  </div>
                  <div className="limit-card">
                    <div className="limit-icon-wrap">
                      <img src={metro} alt="Иконка лимита" className="limit-icon" />
                    </div>
                    <div className="limit-info">
                      <div className="limit-title-row">
                        <span className="limit-name">Метро</span>
                      </div>
                      <p className="limit-desc">Проезд</p>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                      </div>
                      <p className="limit-footer">осталось <strong>120 ₽</strong> из 120 ₽</p>
                    </div>
                    <div className="limit-timer">
                      <span>7 ч</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Нижнее меню ребенка */}
            <nav className="bottom-nav">
              <div className="nav-wrapper">
                <button className={`nav-btn home-btn ${childTab === 'main' ? 'active' : ''}`} 
                  onClick={() => setChildTab('main')}>
                  <img src={home} alt="Главная" className='home'/>
                  <span>Главная</span>
                </button>
                <button className={`nav-btn transfer-btn ${childTab === 'pay' ? 'active' : ''}`} 
                  onClick={() => setChildTab('pay')}>
                  <img src={transfer} alt="Оплатить" className='transfer'/>
                  <span>Оплатить</span>
                </button>
                <button className={`nav-btn history-btn ${childTab === 'history' ? 'active' : ''}`} 
                  onClick={() => setChildTab('history')}>
                  <img src={history} alt="История" className='history'/>
                  <span>История</span>
                </button>
              </div>
              <button className={`nav-btn mascot-btn ${childTab === 'mascot' ? 'active' : ''}`} 
                onClick={() => setChildTab('mascot')}>
                <img src={mascotPanel} alt="Маскот" className='mascotPanel'/>
              </button>
            </nav>
          </div>
        </div>
      </div>


      {/* ================= ТЕЛЕФОН 2: РОДИТЕЛЬ ================= */}
      <div className="phone-wrapper parent-phone">
        <h2 className="phone-title">Родитель</h2>

        <div className="phone">
          
          {/* Статус-бар родителя (можно использовать те же часы) */}
          <div className="curtain">
            <div className="notch"></div>
            <div className="Time">{currentTime || "12:30"}</div>
            <div className="status-bar">
              <span className="signal"><img src={signal} alt="signal" /></span>
              <span className="wi-fi"><img src={wifi} alt="wifi" /></span>
              <span className="battery"><img src={battery} alt="battery" /></span>
            </div>
          </div>

          {/* Экраны родителя */}
          <div className="screen">
            {parentTab === 'main' && (
              <div className="screen-tab active">
                <h3>Кабинет родителя</h3>
                <p>Контрольный экран...</p>
              </div>
            )}

            {parentTab === 'rules' && (
              <div className="screen-tab active">
                <h3>Правила и лимиты</h3>
              </div>
            )}

            {parentTab === 'settings' && (
              <div className="screen-tab active">
                <h3>Настройки родителя</h3>
              </div>
            )}
          </div>

          {/* Нижнее меню родителя */}
          <nav className="bottom-nav">
            <button 
              className={`nav-btn ${parentTab === 'main' ? 'active' : ''}`} 
              onClick={() => setParentTab('main')}
            >
              <span>Главная</span>
            </button>
            <button 
              className={`nav-btn ${parentTab === 'rules' ? 'active' : ''}`} 
              onClick={() => setParentTab('rules')}
            >
              <span>Правила</span>
            </button>
            <button 
              className={`nav-btn ${parentTab === 'settings' ? 'active' : ''}`} 
              onClick={() => setParentTab('settings')}
            >
              <span>Настройки</span>
            </button>
          </nav>

        </div>
      </div>

    </div>
  );
}