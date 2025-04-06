import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>Hello world</p>

      <div className="card flex justify-content-center">
        <Checkbox
          onChange={(e:any) => setChecked(e.checked)}
          checked={checked}
        />
      </div>
    </>
  );
}

export default App;
