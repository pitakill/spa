// @flow
export type HeaderProps = {
  changeLocale: Function,
  handleLogin: Function,
  handleLogout: Function,
  locale: string,
  user: {
    avatar: string,
    email: string,
    loggedIn: boolean,
    name: string,
  }
}
