import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        <Router>
            <div className="container">
                <h3>Hello, World!</h3>
            </div>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/socials" component={Socials}/>
            <Route path="/goals" component={Goals}/>
            <Route path="/contact" component={Contact}/>
        </Router>
    }
}

export default App;