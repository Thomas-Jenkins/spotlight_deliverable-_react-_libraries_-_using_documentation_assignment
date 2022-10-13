import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './Components/Table';
import Chart from './Components/Chart';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className="font-bold text-3xl bg-blue-300">Table Libary</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
