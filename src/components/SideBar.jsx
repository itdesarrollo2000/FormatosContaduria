import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";

function SideBar({ drawerWidth = 240 }) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar >
          <Typography variant="h6" noWrap component="div" >
          <GithubOutlined />
            EMPRESAS
          </Typography>
        </Toolbar>
        <Divider />
        <Button variant="contained" color="primary" >
        <PlusOutlined />
          Agregar Empresa
        </Button>
      </Drawer>
    </Box>
  );
}

export default SideBar;