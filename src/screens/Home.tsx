import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <img
          src="/images/background-home.jpg"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "blur(5px)",
          }}
        />
        <Grid item xs={8}>
          <Grid container justifyContent={"center"} marginBottom={10}>
            <img
              src="/images/task-manager-logo.png"
              style={{ width: 300, height: 300, borderRadius: "100%" }}
            />
          </Grid>
          <Typography fontSize={35} align="center" marginBottom={2}>
            As vezes, o que você mais precisa é manter as tarefas em ordem!{" "}
          </Typography>
          <Typography fontSize={20} align="center" marginBottom={10}>
            Chegou a hora de organizar suas tarefas, definir novas metas e objetivos e manter sua vida sob controle.{" "}
          </Typography>
          <Grid container justifyContent={"space-around"} alignItems={"center"}>
           
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{ height: 70, textTransform: "none", borderRadius: 4 }}
                variant="contained"
                onClick={() => navigate("/singup")}
              >
                Teste gratuitamente
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
              fullWidth
                sx={{ height: 70, textTransform: "none", borderRadius: 4 }}
                variant="contained"
                onClick={() => navigate("/singin")}
              >
                Entrar na sua conta
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
