import Left from './components/Left'
import Right from './components/Right'
import './App.css'
import { Provider } from 'react-redux'
import store from './components/redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className='mobile-wait'>
        <div className="mob-notice">
        <div className="image-circle mnp">
            <img src="https://avatars.githubusercontent.com/u/117144028?v=4" alt="me-pic" className="me-pic" />
          </div>
        </div>
        <div className="mob-notice">MOBILE VERSION STILL IN PRODUCTION</div>
      </div>
      <div className="full-page">
        <Left />
        <Right />
      </div>
    </Provider>
  )
}

export default App
