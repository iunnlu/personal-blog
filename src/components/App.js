import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './appStyles.scss';

class App extends React.Component{
    render(){
        return(
            <div style={{ display: "flex", flexDirection:"column" }}>
                <Home />
                <About />
                <Blog />
                <Contact />
            </div>
        )
    }
};

export default App;