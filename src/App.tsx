import { useState } from 'react';

import './App.css';
import { Checkbox } from 'primereact/checkbox';

function App() {
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
