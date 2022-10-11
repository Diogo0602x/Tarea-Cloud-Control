import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './input.css'

const rootConst: HTMLElement | null = document.getElementById('root');

if(rootConst === null) {
  console.error('Please provide a root component');
}
else {
  ReactDOM.createRoot(rootConst).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


