import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

export const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <img
        src="/images/background-singup.svg"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Grid
          className="glass"
          sx={{
            width: 350,
            height: 350,
            padding: 3,
          }}
          container
          direction={"column"}
          gap={2}
        >
          <Typography fontSize={20} align="center">
            Crie sua conta
          </Typography>

          <FormControl
            color={"primary"}
            variant="standard"
            sx={{ marginBottom: 1 }}
          >
            <InputLabel focused htmlFor="email">
              <Typography>Email</Typography>
            </InputLabel>
            <Input id="email" />
          </FormControl>

          <FormControl variant="standard" color="primary">
            <InputLabel focused htmlFor="password" color="primary">
              <Typography>Senha</Typography>
            </InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ height: 14 }} />
                    ) : (
                      <Visibility sx={{ height: 14 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{ textTransform: "none", marginBottom: 1 }}
          >
            Cadastrar
          </Button>

          <Typography textAlign={"center"} fontSize={12}>
            Já poussui conta,{" "}
            <Link
              href="/"
              fontSize={"bold"}
              color={"secondary"}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Entrar
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
