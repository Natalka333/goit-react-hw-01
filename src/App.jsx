import Profile from './components/Profile'
import FriendList from './components/FriendList'
import TransactionHistory from './components/TransactionHistory'

import user from './components/Data/user.json'
import friends from './components/Data/friends.json'
import transactions from './components/Data/transaction.json'
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
