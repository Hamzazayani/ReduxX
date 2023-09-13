
import './App.css';
import ListTask from './ListTask';
import { Routes,Route,Link } from 'react-router-dom';
import AddTask from './AddTask';
import Edit from './Edit';
import Search from './search';
function App() {
  return (
    <div className='App'>
<Routes>
  <Route path='/' element ={<><Search/><Link  to={"/add"} className="add-link" >add</Link> <ListTask/></>}/>
  <Route path='/add' element ={<AddTask/>}/>
  <Route path='/edit/:id' element ={<Edit/>}/>
    </Routes>
    </div>
  );
}

export default App;
