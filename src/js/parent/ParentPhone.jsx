import React from 'react';

export default function ParentPhone({ parentTab, setParentTab, currentTime, images }) {
  return (
    <div className="phone-wrapper parent-phone">
        <h2 className="phone-title">Родитель</h2>
        <div className="phone">
            {/* Экраны родителя */}
            <div className="screen">        
                <div className="curtain">
                    <div className="notch"></div>
                    <div className="Time">{currentTime || "12:30"}</div>
                    <div className="status-bar">
                        <span className="signal"><img src={images.signal} alt="signal" /></span>
                        <span className="wi-fi"><img src={images.wifi} alt="wifi" /></span>
                        <span className="battery"><img src={images.battery} alt="battery" /></span>
                    </div>
                </div>
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
                <nav className="bottom-nav">
                    <button className={`nav-btn ${parentTab === 'main' ? 'active' : ''}`} onClick={() => setParentTab('main')}>
                        <span>Главная</span>
                    </button>
                    <button className={`nav-btn ${parentTab === 'rules' ? 'active' : ''}`} onClick={() => setParentTab('rules')}>
                        <span>Правила</span>
                    </button>
                    <button className={`nav-btn ${parentTab === 'settings' ? 'active' : ''}`} onClick={() => setParentTab('settings')}>
                        <span>Настройки</span>
                    </button>
                </nav>
            </div>
        </div>
    </div>
  );
}