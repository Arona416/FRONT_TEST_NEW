import './App.css'
import FeedBackComponent from './Components/FeedBackComponent'
import InfoComponent from './Components/InfoComponent'

function App() {

  return (
    <>
      <div className="app">
          <h1  className='app-title'>Д У Ш Н И Л А</h1>
          <div className="main-info">
              <FeedBackComponent/>
              <InfoComponent/>
          </div>
      </div>

    </>
      
  )
}

export default App
