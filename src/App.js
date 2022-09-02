import './App.css';
import { Button } from 'react-bootstrap';
import AddForm from './AddForm';

function App() {
  return (
    <div className="App">
      <div className='primary'>
       <Button>hello</Button>
      </div>
      <AddForm/>
      <img src={process.env.PUBLIC_URL + "/test.jpg"} />
      
    </div>
  );
}

export default App;
