import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./login.scss";

const CLASS_NAME = "login-page";

const Login = ({ theme }: { theme?: object }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = (e: any) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid email or password")
    );
  };

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/react-admin.png"
              alt="React-Admin"
            />
            <h2>VisaPro</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Sign in to a React-Admin client with ready-made forms for creating
              and editing all the data models of your application.
            </div>
            <form onSubmit={submit}>
              <label>
                <span>Username</span>

                <input
                  name="username"
                  type="textbox"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <span>password</span>

                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <Button type="submit" variant="contained" color="primary">
                Log in
              </Button>
            </form>
          </div>
          <Notification />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
