import ReactDom from "react-dom/client";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import App from './App';
import './index.css';

let projectRoot = ReactDom.createRoot(document.getElementById('root')!);
projectRoot.render(
  <App />
);
