export const LoginStatus = ({isLoggedIn}) => {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>;
}