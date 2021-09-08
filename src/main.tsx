import React, { FC } from 'react'
import ReactDOM from 'react-dom'

const App: FC = () => {
  return (
    <div id="fullpage" className="App">
      <div className="section">Some section</div>
      <div className="section">Some section</div>
      <div className="section">Some section</div>
      <div className="section">Some section</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
