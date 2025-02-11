import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TweetContext.Provider value={{user: user, theme: theme, setTheme: setTheme, tweets: tweets, setTweets: setTweets}}>
        <div className="container">
            <Header />
            <Tweets />
            <RightSide />
        </div>
        </TweetContext.Provider>
    )
}

export { App, TweetContext };
