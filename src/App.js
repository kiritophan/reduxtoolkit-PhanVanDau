import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoModal from './Components/TodoModal';
import AppHeader from './Components/AppHeader';
import CheckButton from './Components/CheckButton';
import Form from 'react-bootstrap/Form';
import TodoItem from './Components/TodoItem';

function App() {
  return (
    <div className="container">
      <AppHeader />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <CheckButton />
        </div>
        <div>
          <TodoModal />
        </div>
        <div>
          <Form.Select>
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </Form.Select>
        </div>
        
      </div>
      <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
        <TodoItem />
      </div>
      
    </div>
  );
}

export default App;
