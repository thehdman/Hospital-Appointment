import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import PatientList from './components/PatientList';
import Hospital from './components/Hospital';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path='Hospital' element={<Hospital></Hospital>}></Route>
          <Route path='AppointmentForm' element={<AppointmentForm></AppointmentForm>}></Route>
          <Route path='PatientList' element={<PatientList></PatientList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
