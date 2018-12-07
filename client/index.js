const React = require('react');
//
let ReactDOM = require("react-dom");
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import More from './components/more/More';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <main>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/more" component={More}/>
        </main>
      </div>
    </Router>
  );

}
// class App extends  React.Component{
//   render() {
//     return(
//       <p>test</p>
//     )
//   }
// }

ReactDOM.render(<App/>, document.getElementById('root'));



