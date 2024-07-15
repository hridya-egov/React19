import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UpdateName from './components/UpdateName';
//import SubmitForm from './components/SubmitForm';
//import TestFormStatus from './components/TestFormStatus';
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
//import Counter from './components/Counter';
import UseCallbackComponent from './components/UseCallbackComponent';
import StatusComponent from './components/StatusComponent';
import SimpleForm from './components/SimpleForm';
import FactorialCalculator from './components/FactorialCalculator';
import CounterTesting from './components/CounterTesting';
import TodoList from './components/TodoList';
import FormWithStatus from './components/FormWithStatus';

import FocusInput from './components/FocusInput';
import ParentComponent from './components/ParentComponent';
import DataFetchingComponent from './components/DataFetchingComponent';
import PromiseallFunc from './components/PromiseallFunc';
import Counter from './redux/Counter';
import StylesheetExample from './components/StylesheetExample';
import FetchData from './components/FetchData';
import { SimpleLayoutEffectComponent } from './components/SimpleLayoutEffectComponent';
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deferred-search" element={<DeferredSearch />} />
            <Route path="/fetch-data" element={<FetchData />} />
            
            <Route path="/update-name" element={<UpdateName />} />
            <Route path ="/useformstatus" element ={< FormWithStatus/>} />
            <Route path ="/pagewithmetadata" element ={< PageWithMetadata/>} />
            <Route path ="/forwardref" element ={< ParentComponent/>} />
            <Route path ="/ref" element ={< FocusInput/>} />
            <Route path="/server-component" element={<ServerComponent />} />
            <Route path="/client-component" element={<ClientComponent />} />
            <Route path="/server-action" element={<ServerAction />} />
            <Route path="/simple-heading" element={<SimpleHeading />} />
            <Route path="/useid" element={<SimpleForm />} />
            <Route path="/ref-component" element={<RefComponent />} />
            <Route path="/layouteffect" element={<SimpleLayoutEffectComponent />} />
            
            <Route path="/simple-context" element={<SimpleContext />} />
           
            
            <Route path="/simple-layout-effect" element={<SimpleLayoutEffectComponent />} />
           
            <Route path="/usecallback" element={<UseCallbackComponent />} />
            <Route path="/stylesheetexample" element={<StylesheetExample />} />
            <Route path="/statuscomponent" element={<StatusComponent />} />
            <Route path="/usememo" element={< FactorialCalculator/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
