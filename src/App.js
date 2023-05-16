import React, { useState } from 'react';
import GameBoard from './components/UI/GameBoard';

function App() {
    const [values, setValues] = useState([
        [1, 2, 0, 0],
        [0, , 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, ]
    ]);

    return <GameBoard values={values} />;
}

export default App;
