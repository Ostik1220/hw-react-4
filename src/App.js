import './App.css';
import { Statistics } from './Statistics/Statistics';
import {Friends} from './Friends/Friends'
import data from './statisticInfo.json'
import info from './friends.json'

function App() {
  return (

    <div className="App">
      {/* 1 */}
              <section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
      <Statistics info={data}/>
      </ul>
</section>
<br/>
{/* 2 */}
<ul class="friend-list">
 <Friends data={info}/>
</ul>
    </div>

  );
}

export default App;
