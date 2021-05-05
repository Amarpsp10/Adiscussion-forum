import {Switch, Route} from 'react-router-dom'

import HomePage from './components/Home'
import NavBar from './components/nav-bar/Nav'
import TopicPage from './components/topic-view/Topic'
function App() {
  return (
    <div>
       <NavBar/>
       <Switch>
       <Route path="/" component={HomePage} exact/>
       <Route path='/topic' component={TopicPage} exact/>
       </Switch>
    </div>
  );
}

export default App;
