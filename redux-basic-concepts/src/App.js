import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
      </Provider>
    </div>
  );
}

export default App;
