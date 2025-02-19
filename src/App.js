// import logo from './logo.svg';
import './App.css';
import FormText from './components/FormText';
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
      <Navbar title="TextUtils" about="About"/>
      <div className="container my-5">
        <FormText></FormText>
      </div>
    </>
  );
}

export default App;
