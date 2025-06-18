import React from 'react';
import './App.css';
import PromptLabContainer from './PromptLabContainer';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app" style={{ background: 'var(--main-bg, #181C23)' }}>
      <PromptLabContainer />
    </div>
  );
}

export default App;