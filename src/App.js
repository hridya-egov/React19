import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UpdateName from './components/UpdateName';
import SubmitForm from './components/SubmitForm';
import TestFormStatus from './components/TestFormStatus';
import Greeting from './components/Greeting';
import SimpleHeading from './components/SimpleHeading';
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';
import ServerAction from './components/ServerAction';
import RefComponent from './components/RefComponent';
import SimpleContext from './components/SimpleContext';
import DeferredSearch from './components/DeferredSearch';
import PageWithMetadata from './components/PageWithMetadata';
import AsyncFunc from './components/AsyncFunc';
import Home from './components/Home';
import Counter from './components/Counter';
import UseCallbackComponent from './components/UseCallbackComponent';
import StatusComponent from './components/StatusComponent';
import SimpleForm from './components/SimpleForm';
import FactorialCalculator from './components/FactorialCalculator';
import CounterTesting from './components/CounterTesting';
import TodoList from './components/TodoList';
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update-name" element={<UpdateName />} />
            <Route path="/submit-form" element={<SubmitForm />} />
            <Route path="/test-form-status" element={<TestFormStatus />} />
            <Route path="/greeting" element={<Greeting />} />
            <Route path="/simple-heading" element={<SimpleHeading />} />
            <Route path="/server-component" element={<ServerComponent />} />
            <Route path="/client-component" element={<ClientComponent />} />
            <Route path="/server-action" element={<ServerAction />} />
            <Route path="/ref-component" element={<RefComponent />} />
            <Route path="/simple-context" element={<SimpleContext />} />
            <Route path="/deferred-search" element={<DeferredSearch />} />
            <Route path="/metadata" element={<PageWithMetadata />} />
            <Route path="/async-func" element={<AsyncFunc />} />
            <Route path ="/counter" element ={<Counter/>} />
            <Route path="/async-func" element={<AsyncFunc />} />
            <Route path="/usecallback" element={<UseCallbackComponent />} />
            <Route path="/statuscomponent" element={<StatusComponent />} />
            <Route path="/useid" element={<SimpleForm />} />
            <Route path="/usememo" element={<FactorialCalculator />} />
            <Route path ="/usereducer" element ={<CounterTesting/>} />
            
            
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
