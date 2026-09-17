import { ToastContainer } from 'react-toastify';
import './App.css'
// import LocalStorage from './challenges/Localstorage'
// import ProgressBar from './challenges/ProgressBar';
// import CheckBoxList from './challenges/checkbox';
// import ReactionTime from './challenges/ReactionTime'
// import Testing from './challenges/testing'
// import Timer from './challenges/Timer/Timer'
// import FormValidation from './challenges/FormValidation/FormValidation'
// import { Filters } from './challenges/Filters/Filters';
// import { Theme } from './challenges/Theme/Theme';
import ProductsFilters from './challenges/ProductFilters'


function App() {
  return (
    <>
      <ToastContainer />
      <ProductsFilters />
    </>
  )
}

export default App
