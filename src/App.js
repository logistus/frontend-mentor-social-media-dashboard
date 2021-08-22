import {useContext} from 'react';
import CardTotal from './components/CardTotal';
import ThemeSwitch from './ThemeSwitch';
import {ThemeContext} from './Provider';
import { Helmet } from "react-helmet";
import {totals, overviews} from "./data";
import CardOverview from './components/CardOverview';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container">
      <Helmet>
        <body className={`${theme}-bg`} />
      </Helmet>
      <div className={`bg-pattern ${theme}`}></div>
      <main>
        <h1 className={theme}>Social Media Dashboard</h1>
        <header>
          <div>Total Followers: 23,004</div>
          <div className={`theme-switch switch-${theme}`}>
            <div>Dark Mode</div>
            <div><ThemeSwitch /></div>
          </div>
        </header>
        <div className="totals">
          {
            totals.map((total) =>
            <CardTotal data={total} key={total.id} />)
          }
        </div>
        <h3>Overview - Today</h3>
        <div className="overviews">
          {
          overviews.map((overview) =>
            <CardOverview data={overview} key={overview.id} />)
          }
        </div>
      </main>
      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className={theme}>Frontend Mentor</a>.
          Coded by <a href="https://github.com/logistus" target="_blank" rel="noreferrer" className={theme}>Sinan Yilmaz</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
