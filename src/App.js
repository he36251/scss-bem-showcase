import React from 'react';

import './styles/main.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="home">
                    <h3 className="home__title">This is a test title</h3>
                    <h3 className="home__title home__title--danger">This is a test title</h3>
                </div>
            </header>
        </div>
    );
}

export default App;
