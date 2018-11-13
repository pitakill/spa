// @flow
export type User = {
  avatar: string,
  name: string,
  email: string
}
export type AppProps = {}
export type AppState = {
  user: User & { loggedIn: boolean },
  locale: string
}
