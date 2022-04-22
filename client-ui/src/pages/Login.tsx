import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  createTheme,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { LOGIN } from '../graphql/Mutations';
import { Credentials } from '../generated/graphql';

const theme = createTheme();

interface ILogin {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const [values, setValues] = useState<ILogin>({
    email: '',
    password: '',
    showPassword: false,
  });
  // const [initiateLogin] = useMutation(
  //   LOGIN,
  //   {
  //     variables: {
  //       username: values.email,
  //       password: values.password,
  //     },
  //   },
  // );
  const updateEmail = (e: any) => {
    setValues({ ...values, email: e.currentTarget.value });
  };

  const updatePassword = (e: any) => {
    setValues({ ...values, password: e.currentTarget.value });
  };

  const toggleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleSubmit = () => {
    // initiateLogin();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              // eslint-disable-next-line max-len
              'url(https://onechelofanadventure.com/wp-content/uploads/2017/05/New-Zealand-South-Island-Things-to-Do.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to VisaPro NZ
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => updateEmail(e)}
              />
              <OutlinedInput
                required
                fullWidth
                name="password"
                label="Password"
                type={values.showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={(e) => updatePassword(e)}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="https://google.com" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://google.com" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
