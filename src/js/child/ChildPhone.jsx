// {
//   category: "Метро",          // Категория (по ней подставится нужная иконка)
//   description: "Проезд",       // Описание покупки
//   leftMoney: 120,            // Сколько денег осталось доступно
//   totalMoney: 120,           // Общая разрешенная сумма
//   progress: 100,             // Процент заполненности полосы (от 0 до 100)
//   timeLeft: "7 ч"            // Оставшееся время (или таймер)
// }

import React, { useState } from 'react';

export default function ChildPhone({ balance, activePurchases, childTab, setChildTab, currentTime, images }) {
    const favorites = [
    { id: 1, name: 'Мама', avatar: '👩' },
    { id: 2, name: 'Папа', avatar: '👨' },
    { id: 3, name: 'Бабушка', avatar: '👵' },
  ];

  // Пример данных для заданий
    const tasks = [
      { id: 1, title: 'Убрать в комнате', reward: '100 ₽', status: 'done', icon: '🧹' },
      { id: 2, title: 'Прочитать 10 страниц', reward: '150 ₽', status: 'pending', icon: '📚' },
      { id: 3, title: 'Помыть посуду', reward: '50 ₽', status: 'pending', icon: '🍽️' },
    ];

    // Словарь иконок для разных категорий
    const categoryIcons = {
        'Метро': images.metro,
        'Прочее': images.defaultPic,
        'Магазин': images.foodShop,
        'Снять наличные': images.atm,
        'Онлайн Платёж': images.onlinePayment,
        'Детский мир': images.toyBlocks,
        // Добавь сюда те категории, которые будет присылать нейросеть
    };

    // Если пришла неизвестная категория, подставим дефолтную иконку
    const getCategoryIcon = (categoryName) => {
        return categoryIcons[categoryName] || images.default; 
    };

    const [currentScreen, setCurrentScreen] = useState('main');

  return (
    <div className="phone-wrapper child-phone">
        <h2 className="phone-title">Ребёнок</h2>
        <div className="phone">
            <div className="screen">
                {/* Статус-бар (шапка) */}
                <div className="curtain">
                    <div className="notch"></div>
                    <div className="Time">{currentTime || "12:30"}</div>
                    <div className="status-bar">
                    <span className="signal"><img src={images.signal} alt="signal" /></span>
                    <span className="wi-fi"><img src={images.wifi} alt="wifi" /></span>
                    <span className="battery"><img src={images.battery} alt="battery" /></span>
                    </div>
                </div>
                <div className="content-container">
                    {/* Экраны ребенка */}
                    {childTab === 'main' && (
                        <div className="screen-tab active child-home-screen">
                            {/* 1. ВЕРХНЯЯ ШАПКА С АВАТАРКОЙ И БОНУСАМИ */}
                            <div className="child-header">
                                <div className="child-profile">
                                    <img src={images.profilePic} alt="Аватар" className="avatar-img"/>
                                </div>
                                <span className="bonuses-badge">
                                    <div className="bonus-num">820</div>
                                    <div className="bonus-icon">
                                        <img src={images.bonus} alt="Бонусы" />
                                    </div>
                                </span>
                            </div>

                            {/* 2. БАНКОВСКАЯ КАРТА */}
                            <div className="bank-card">
                                <img src={images.cardChild} alt="Банковская карта" className="bank-card-image" />
                                {/* передавать сюда актуальное число из базы или от нейросети */}
                                <div className="bank-card-balance">
                                    {balance ? `${balance.toLocaleString('ru-RU')} ₽` : "2 450,99 ₽"}
                                </div>
                            </div>

                            {/* 3. ПЕРСОНАЖ (ПИТОМЕЦ) */}
                            <div className="character-container">
                                <div className="character-avatar-big">
                                <img src={images.mascot} alt="Питомец" />
                                </div>
                            </div>

                            {/* 4. ТРИ КНОПКИ БЫСТРЫХ ДЕЙСТВИЙ */}
                            <div className="action-buttons">
                                <button className="action-card" onClick={() => setCurrentScreen('call')}>
                                    <img src={images.phoneCall} alt="Позвонить" className='phoneCall'/>
                                    <span>Позвонить</span>
                                </button>
                                <button className="action-card" onClick={() => setCurrentScreen('receipt')}>
                                    <img src={images.receipt} alt="Загрузить чек" className='receipt'/>
                                    <span>Загрузить чек</span>
                                </button>
                                <button className="action-card" onClick={() => setCurrentScreen('chat')}>
                                    <img src={images.chatBubble} alt="Написать" className='chatBubble'/>
                                    <span>Написать</span>
                                </button>
                            </div>

                            {/* 5. БЛОК "МОЖНО СЕЙЧАС" */}
                            <div className="section-block">
                                <div className="section-header">
                                    <h3>Можно сейчас</h3>
                                    {/* Показываем количество: если массив пустой, пишем 1 (для примера) или 0 */}
                                    <span className="active-badge">
                                        {activePurchases && activePurchases.length > 0 ? `${activePurchases.length} активн.` : "1 активн."}
                                    </span>
                                </div>

                                {/* Проверяем, есть ли данные от нейросети */}
                                {activePurchases && activePurchases.length > 0 ? (activePurchases.map((limit, index) => (
                                    <div className="limit-card" key={index}>
                                        <div className="limit-icon-wrap">
                                            <img src={getCategoryIcon(limit.category)} alt={limit.category} className="limit-icon" />
                                        </div>
                                        <div className="limit-info">
                                            <div className="limit-title-row">
                                                <span className="limit-name">{limit.category}</span>
                                            </div>
                                            <p className="limit-desc">{limit.description}</p>
                                            <div className="progress-bar-bg">
                                                <div className="progress-bar-fill" style={{ width: `${limit.progress}%` }}></div>
                                            </div>
                                            <p className="limit-footer">
                                                осталось <strong>{limit.leftMoney} ₽</strong> из {limit.totalMoney} ₽
                                            </p>
                                        </div>
                                        <div className="limit-timer">
                                            <span>{limit.timeLeft}</span>
                                        </div>
                                    </div>))) : (/* ЕСЛИ ДАННЫХ НЕТ: выводим заглушку */
                                    <div className="limit-card">
                                        <div className="limit-icon-wrap">
                                            <img src={images.metro} alt="Иконка лимита" className="limit-icon" />
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
                                    </div>)
                                }
                            </div>
                        </div>                      
                    )}

                    {childTab === 'transfer-btn' && (
                        <div className="screen-tab active child-transfer-screen">
                            {/* Шапка страницы */}
                            <header className="page-header">
                                <h1>Платежи</h1>
                            </header>
                            <main className="main-content">
                                {/* Секция: Избранные платежи */}
                                <section className="section favorites-section">
                                    <h2>Избранное</h2>
                                    <div className="favorites-list">
                                        {favorites.map((item) => (
                                            <button key={item.id} className="favorite-card">
                                                <div className="avatar-wrapper">
                                                    <span className="avatar-emoji">{item.avatar}</span>
                                                    <div className="heart-badge">
                                                        <Heart size={12} fill="#FF5252" color="#FF5252" />
                                                    </div>
                                                </div>
                                                <span className="favorite-name">{item.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* Секция: Быстрые действия (3 кнопки в ряд) */}
                                <section className="section actions-section">
                                    <div className="actions-grid">
                                        <button className="action-btn btn-transfer">
                                            <div className="icon-badge">
                                                <Send size={24} />
                                            </div>
                                            <span>Перевести</span>
                                        </button>

                                        <button className="action-btn btn-qr">
                                            <div className="icon-badge">
                                                <QrCode size={24} />
                                            </div>
                                            <span>QR-код</span>
                                        </button>

                                        <button className="action-btn btn-topup">
                                            <div className="icon-badge">
                                                <PlusCircle size={24} />
                                            </div>
                                            <span>Пополнить</span>
                                        </button>
                                    </div>
                                </section>

                                {/* Секция: Задания для ребёнка */}
                                <section className="section tasks-section">
                                    <div className="tasks-header">
                                        <h2>Задания</h2>
                                        <span className="tasks-subtitle">Выполняй и получай награды! 🌟</span>
                                    </div>
                                    <div className="tasks-list">
                                        {tasks.map((task) => (
                                            <div key={task.id} className={`task-card ${task.status}`}>
                                                <div className="task-icon">{task.icon}</div>
                                                <div className="task-info">
                                                    <span className="task-title">{task.title}</span>
                                                    <span className="task-reward">+{task.reward}</span>
                                                </div>
                                                <div className="task-status">
                                                    {task.status === 'done' ? 
                                                    (<span className="status-badge done"><CheckCircle2 size={16} /> Сделано</span>) 
                                                    : (<span className="status-badge pending"><Clock size={16} /> В процессе</span>)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </main>
                        </div> 
                    )}
                </div> 
                {currentScreen !== 'call' && currentScreen !== 'chat' && currentScreen !== 'receipt' && (
                    <nav className="bottom-nav">
                        <div className="nav-wrapper">
                            <button className={`nav-btn home-btn ${childTab === 'main' ? 'active' : ''}`} 
                                onClick={() => setChildTab('main')}>
                                <img src={images.home} alt="Главная" className='home'/>
                                <span>Главная</span>
                            </button>
                            <button className={`nav-btn transfer-btn ${childTab === 'pay' ? 'active' : ''}`} 
                                onClick={() => setChildTab('pay')}>
                                <img src={images.transfer} alt="Оплатить" className='transfer'/>
                                <span>Оплатить</span>
                            </button>
                            <button className={`nav-btn history-btn ${childTab === 'history' ? 'active' : ''}`} 
                                onClick={() => setChildTab('history')}>
                                <img src={images.history} alt="История" className='history'/>
                                <span>История</span>
                            </button>
                        </div>
                        <button className={`nav-btn mascot-btn ${childTab === 'mascot' ? 'active' : ''}`} 
                        onClick={() => setChildTab('mascot')}>
                            <img src={images.mascotPanel} alt="Маскот" className='mascotPanel'/>
                        </button>
                    </nav>
                )}
                {/* ================= 2. ЭКРАН ЗВОНКА НЕЙРОСЕТИ ================= */}
                {currentScreen === 'call' && (
                    <div className="screen-tab active call-screen">
                        <button className="back-btn" onClick={() => setCurrentScreen('main')}>← Назад</button>
                        <div className="ai-call-content">
                            <div className="ai-avatar-pulse">
                                <img src={images.profilePic} alt="Тоша" className="ai-pulse-img" />
                            </div>
                            <h3 className="ai-call-title">Идет дозвон до нейросети...</h3>
                            <p className="ai-call-desc">Тоша анализирует ваш запрос на покупку</p>
                        </div>
                    </div>
                )}

                {/* ================= 3. ЭКРАН ЧАТА С НЕЙРОСЕТЬЮ ================= */}
                {currentScreen === 'chat' && (
                    <div className="screen-tab active chat-screen">
                        <div className="chat-header-row">
                            <button className="back-btn" onClick={() => setCurrentScreen('main')}>← Назад</button>
                            <h3 className="chat-title">Чат с нейросетью Тошей</h3>
                        </div>
                        <div className="chat-messages">
                            <div className="chat-bubble">
                                Привет! На что тебе согласовать покупку?
                            </div>
                        </div>
                        <div className="chat-input-area">
                            <input type="text" placeholder="Введите сообщение..." className="chat-input" /> 
                        </div>
                    </div>
                )}

                {/* ================= 4. ЭКРАН ЗАГРУЗКИ ЧЕКА ================= */}
                {currentScreen === 'receipt' && (
                    <div className="screen-tab active receipt-screen">
                        <button className="back-btn" onClick={() => setCurrentScreen('main')}>← Назад</button>
                        <h3 className="receipt-title">Загрузка чека</h3>
                        <div className="receipt-dropzone">
                            <p>Перетащите чек сюда или нажмите для выбора файла</p>
                        </div>
                        <button className="receipt-upload-btn">Загрузить</button>
                    </div>
                )} 
            </div>
        </div>
    </div>
  )
}