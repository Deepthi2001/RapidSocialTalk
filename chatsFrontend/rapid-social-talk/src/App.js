import { Route } from 'react-router-dom';
import "./App.css"
import HomePage from './components/Pages/HomePage';
import ChatsPage from './components/Pages/ChatsPage';

function App() {
  return (
    <div className="App">
          <Route path='/' component={HomePage} exact />
          <Route path='/chats' component={ChatsPage} />
    </div>
  );
}

export default App;
