import { MenuOutlined } from "@ant-design/icons";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";


function NavBar ({drawerWidth = 240 }) {
  return (
    <AppBar
        position="fixed" 
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#001524"
        }}>
      <Toolbar>
        <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" noWrap component="div">REMISIONES</Typography>

        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
