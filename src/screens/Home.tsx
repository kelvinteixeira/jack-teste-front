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
          <Grid container justifyContent={"center"}>
            <img
              src="/images/task-manager-logo.png"
              style={{ width: 150, height: 150, borderRadius: 100 }}
            />
          </Grid>
          <Typography fontSize={35} align="center">
            As vezes tudo que você mais precisa é mantes as coisas no lugares
            certos!{" "}
          </Typography>
          <Grid container justifyContent={"space-around"} alignItems={"center"}>
            <Grid container item xs={4} className="glass" padding={3}>
              <ul>
                <li>
                  <Typography fontSize={18}>Organize suas tarefas</Typography>
                </li>
                <li>
                  <Typography fontSize={18}>Defina suas metas</Typography>
                </li>
                <li>
                  <Typography fontSize={18}>Faça novos objetivos</Typography>
                </li>
                <li>
                  <Typography fontSize={18}>Controle sua vida</Typography>
                </li>
              </ul>
            </Grid>
            <Button
              sx={{ height: 70, textTransform: "none", borderRadius: 4 }}
              variant="contained"
              onClick={() => navigate("/singup")}
            >
              Teste gratuitamente
            </Button>
            <Button
              sx={{ height: 70, textTransform: "none", borderRadius: 4 }}
              variant="contained"
              onClick={() => navigate("/singin")}
            >
              Entrar na sua conta
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
