import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoModal from './Components/TodoModal';
import AppHeader from './Components/AppHeader';
import CheckButton from './Components/CheckButton';
import TodoItem from './Components/TodoItem';
import Button from './Components/Button';
import appContent from './Components/AppContent';
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
          <Button/>
        </div>
        
      </div>
      <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
        <TodoItem />
      </div>
      <div>
        <appContent />
      </div>
      
    </div>
  );
}

export default App;
