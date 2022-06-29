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
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { LOGIN } from '../graphql/Mutations';
import { userInfo } from '../graphql/Store';
import { Mutation } from '../generated/graphql';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

interface ILogin {
  email: string;
  password: string;
  showPassword: boolean;
  loginError: {
    loginFailed?: boolean;
    errorCode?: string;
    errorMessage?: string;
    isInvalidEmail?: boolean;
    isInvalidPassword?: false;
  };
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<ILogin>({
    email: '',
    password: '',
    showPassword: false,
    loginError: {},
  });
  const [initiateLogin, { loading }] = useMutation<Mutation>(LOGIN, {
    update(proxy, result) {
      userInfo(result?.data?.login);
      window.localStorage.setItem(
        'accessToken',
        result?.data?.login?.accessToken as string,
      );
    },
    variables: {
      username: values.email,
      password: values.password,
    },
  });
  const updateEmail = (e: any) => {
    setValues({ ...values, email: e.currentTarget.value });
  };

  const updatePassword = (e: any) => {
    setValues({ ...values, password: e.currentTarget.value });
  };

  const toggleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleSubmit = async () => {
    await initiateLogin().then(() => navigate('/dashboard'));
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
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
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
              VisaPro NZ
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={values.loginError.loginFailed}
                onChange={(e) => updateEmail(e)}
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  fullWidth
                  id="outlined-adornment-passwor  d"
                  type={values.showPassword ? 'text' : 'password'}
                  error={values.loginError.loginFailed}
                  value={values.password}
                  onChange={(e) => updatePassword(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? 'Logging you in' : 'Sign In'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
