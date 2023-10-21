import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {CheckBox} from "@material-ui/icons";

function Login() {
  return (
    <div>
      <TextField
        label="Email Address"
        required
        fullWidth
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        label="Password"
        type="password"
        required
        fullWidth
        name="password"
        autoComplete="current-password"
      />
      <CheckBox value="remember" color="primary"/>
      <Button type="submit">Sign in</Button>
    </div>
  );
}

export default Login;