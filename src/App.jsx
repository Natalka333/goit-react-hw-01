import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import user from './components/data/user.json'
import friends from './components/data/friends.json'
import transactions from './components/data/transaction.json'
import './App.css'


function App() {


  return (
    <>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  )
}

export default App;
