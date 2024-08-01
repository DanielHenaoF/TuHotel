import { ChangeEvent, FC, useState, FormEvent, useRef } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const defaultTheme = createTheme();

type SignUpProps = object & {
  value?: any;
  onChange?: (value: any | null) => void;
};

const SignUp: FC<SignUpProps> = ({ value }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{
    first_name?: string;
    last_name?: string;
    email?: string;
    password_user?: string;
  } | null>(null);

  const snackbarRef = useRef<string | number | null>(null);

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch(
        "http://localhost:5000/api/usuarios/guardar-usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      if ("success" in data && !data.success) {
        const { msg } = data;

        if (snackbarRef.current) closeSnackbar(snackbarRef.current);

        snackbarRef.current = enqueueSnackbar(
          msg ? msg : "Ocurrio un error en el servidor. Reintentar",
          {
            variant: "error",
          }
        );

        if (snackbarRef.current) closeSnackbar(snackbarRef.current);

        snackbarRef.current = enqueueSnackbar("El usuario ha iniciado sesion");
        navigate("/login");
      }
    } catch (error) {
      if (snackbarRef.current) closeSnackbar(snackbarRef.current);

      snackbarRef.current = enqueueSnackbar("Ocurrio un error inesperado", {
        variant: "error",
      });
    }
  };

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event?.target?.value ?? null;

    setUserData((previousState) => ({
      ...previousState,
      first_name: value,
    }));
  };

  const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event?.target?.value ?? null;

    setUserData((previousState) => ({
      ...previousState,
      last_name: value,
    }));
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event?.target?.value ?? null;

    setUserData((previousState) => ({
      ...previousState,
      email: value,
    }));
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event?.target?.value ?? null;

    setUserData((previousState) => ({
      ...previousState,
      password_user: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 19,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            ÚNETE
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="Nombres"
                  name="firstName"
                  autoComplete="given-name"
                  // autoFocus
                  onChange={handleFirstName}
                  value={value}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleLastName}
                  value={value}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Dirección de correo electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                  value={value}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Contraseña"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onChange={handlePassword}
                  value={value}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ÚNETE
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
