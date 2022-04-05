import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
