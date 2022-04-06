import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
      </Provider>
    </div>
  );
}

export default App;
