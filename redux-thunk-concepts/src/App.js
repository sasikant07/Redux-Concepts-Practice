import './App.css';
import { Provider } from 'react-redux'
import UserComponent from './components/UserComponent';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserComponent />
      </Provider>
    </div>
  );
}

export default App;
