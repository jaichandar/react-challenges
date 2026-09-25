import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
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
// import Table from './challenges/Table';
// import TodoList from './challenges/TodoList/TodoList';
// import Grid from './challenges/GridSystem/Grid';
// import Debounce from './challenges/debounce/Debounce';
// import Effects from './challenges/Effects/Effect';
// import Parent from './challenges/RenderProps/Parent';
// const Accordion = lazy(() => import('./challenges/Accordion/Accordion'));
const WebWorkers = lazy(() => import('./challenges/WebWorkers/WebWorker'));

function App() {
  return (
    <>
      <ToastContainer />
      <WebWorkers />
    </>
  )
}

export default App
