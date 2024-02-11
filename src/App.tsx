import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert children='My Alert' onClick={() => setAlertVisible(false)}></Alert>
      )}
      <Button children='My button' onClick={() => setAlertVisible(true)} />
    </div>
  );
}

export default App;
