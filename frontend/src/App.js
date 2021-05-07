import {Switch, Route} from 'react-router-dom'

import HomePage from './components/Home'
import NavBar from './components/nav-bar/Nav'
import TopicPage from './components/topic-view/Topic'
import NetworkPage from './components/network/network-page/Network'
import ProfilePage from  './components/personal-profile/PersonalProfile'
import InboxPage from './components/inbox/Inbox'
import SavedPage from './components/saved-posts/SavedPost'
function App() {
  return (
    <div>
       <NavBar/>
       <Switch>
       <Route path="/" component={HomePage} exact/>
       <Route path='/topic' component={TopicPage} />
       <Route path='/network' component={NetworkPage}/>
       <Route path='/profile' component={ProfilePage} exact/>
       <Route path='/inbox'  component={InboxPage} exact/>
       <Route path='/saved-post' component={SavedPage} exact/>
       </Switch>
    </div>
  );
}

export default App;
