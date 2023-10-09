import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AgregarEMP from "../auth/Pages/AgregarEMP";

function SideBar({ drawerWidth = 240 }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <GithubOutlined />
            EMPRESAS
          </Typography>
        </Toolbar>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          style={{ top: 10, margin: 10 }}
          onClick={handleOpenModal}
        >
          <PlusOutlined />
          Agregar Empresa
        </Button>
        <Modal
          title="Agregar Empresa"
          visible={modalVisible}
          onOk={handleCloseModal}
          onCancel={handleCloseModal}
        >
          {/* Aquí puedes poner el contenido del modal */}
          <AgregarEMP />
        </Modal>
      </Drawer>
    </Box>
  );
}

export default SideBar;
