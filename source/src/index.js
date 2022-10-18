import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export {default as Navbar} from './Components/Navbar/Navbar'
export { default as Home } from './Pages/Home/Home'

export {default as BannerImage} from './Assets/WebM Agency.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);