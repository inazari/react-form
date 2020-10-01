import React from 'react';
import './App.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ReactHookForm from "./components/ReactHookForm";
import Step1 from "./components/MultiStepForm/Step1";
import Step2 from "./components/MultiStepForm/Step2";
import Step3 from "./components/MultiStepForm/Step3";
import Result from "./components/MultiStepForm/Result";
import Header from "./components/Header";
import {HomePage} from "./components/HomePage";

function App() {
    return (
        <div className="App">
            <main>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/step1' component={Step1}/>
                        <Route exact path='/step2' component={Step2}/>
                        <Route exact path='/step3' component={Step3}/>
                        <Route exact path='/result' component={Result}/>
                        <Route exact path='/form-ex' component={ReactHookForm}/>
                    </Switch>
                </Router>
            </main>
        </div>
    );
}

export default App;
