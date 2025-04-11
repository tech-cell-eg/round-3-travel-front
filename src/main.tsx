import ReactDOM from "react-dom/client";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import App from './App';
import './index.css';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

let projectRoot = ReactDOM.createRoot(document.getElementById('root')!);
projectRoot.render(
  <QueryClientProvider client={queryClient}>
      <App />

  </QueryClientProvider>
);
