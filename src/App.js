import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {
    isDark: localStorage.getItem('isDark') === 'true',
  }

  changeTheme = () => {
    this.setState(prevState => {
      const newTheme = !prevState.isDark
      localStorage.setItem('isDark', String(newTheme))
      return {isDark: newTheme}
    })
  }

  getProtectedRoute = (Page, isDark, changeTheme) => routeProps => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return <Page {...routeProps} isDark={isDark} changeTheme={changeTheme} />
  }

  getLoginRoute = () => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return <Login />
  }

  render() {
    const {isDark, changeTheme} = this

    const protectedHome = this.getProtectedRoute(Home, isDark, changeTheme)

    const protectedTrending = this.getProtectedRoute(
      Trending,
      isDark,
      changeTheme,
    )

    const protectedGaming = this.getProtectedRoute(Gaming, isDark, changeTheme)

    const protectedSavedVideos = this.getProtectedRoute(
      SavedVideos,
      isDark,
      changeTheme,
    )

    const protectedVideoDetails = this.getProtectedRoute(
      VideoItemDetails,
      isDark,
      changeTheme,
    )

    return (
      <Switch>
        <Route exact path="/login" render={this.getLoginRoute} />

        <Route exact path="/" render={protectedHome} />

        <Route exact path="/trending" render={protectedTrending} />

        <Route exact path="/gaming" render={protectedGaming} />

        <Route exact path="/saved-videos" render={protectedSavedVideos} />

        <Route exact path="/videos/:id" render={protectedVideoDetails} />
      </Switch>
    )
  }
}

export default App
