import './App.css';
import TodoListModal from './Components/TodoModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutVariable from './Components/AppContent';

function App() {
  return (
    <div className="container">
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>To Do List</h1>
      <div>
        <TodoListModal />

      </div>
      <div>
        <LayoutVariable />
      </div>

    </div>
  );
}

export default App;
