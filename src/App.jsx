import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

const App = () => {
    
    const elements = useRoutes(routes)

    return (
        <div>
            {elements}
        </div>
    );
}

export default App;
