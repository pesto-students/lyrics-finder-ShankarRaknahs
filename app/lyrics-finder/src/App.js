import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouteWrapper from './components/Router/RouteWrapper';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Switch>
          <RouteWrapper path='/search' component={<SearchView />} />
          <RouteWrapper path='/' component={<HomeView />} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
