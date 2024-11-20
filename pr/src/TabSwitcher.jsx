import React, {useState} from 'react';

const TabSwitcher = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <button
                onClick={() => setActiveTab('tab1')}
                style={{background: activeTab === 'tab1' ? '#ddd' : '#fff'}}
            >
                Вкладка 1
            </button>
            <button
                onClick={() => setActiveTab('tab2')}
                style={{background: activeTab === 'tab2' ? '#ddd' : '#fff'}}
            >
                Вкладка 2
            </button>

            <div style={{marginTop: '50px'}}>
                {activeTab === 'tab1' && <p>Содержимое вкладки 1</p>}
                {activeTab === 'tab2' && <p>Содержимое вкладки 2</p>}
            </div>
        </div>
    );
};

export default TabSwitcher;
