import React, { useState } from "react";
import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import { Button, Modal, Radio, Tabs, Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";
import AgregarEMP from "../auth/Pages/AgregarEMP";
import { Link } from "react-router-dom";

function SideBar({ drawerWidth = 240 }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState("left"); // Cambiado a "left"
  const [empresas, setEmpresas] = useState([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const handleAgregarEmpresa = (empresa) => {
    // Agrega la nueva empresa a la matriz de empresas
    setEmpresas([...empresas, empresa]);

    // Cierra el modal
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

        <Link to="/prueba">
          <Button
            variant="contained"
            color="primary"
            style={{
              top: 2,
              margin: 10,
              width: 219,
              height: 100,              
            }}
          >
            <PlusOutlined />
            PRUEBA
          </Button>
        </Link>

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
          open={modalVisible}
          onOk={handleCloseModal}
          onCancel={handleCloseModal}
        >
          <AgregarEMP onAgregarEmpresa={handleAgregarEmpresa} />
        </Modal>
        <div>
          <Radio.Group
            onChange={handleModeChange}
            value={mode}
            style={{
              marginBottom: 8,
            }}
          ></Radio.Group>
          {empresas.length > 0 ? (
            <Tabs
              defaultActiveKey="1"
              tabPosition={mode}
              style={{
                height: 800,
                padding: 10,
              }}
            >
              {empresas.map((empresa, index) => (
                <Tabs.TabPane tab={`Empresa-${index + 1}`} key={`${index + 1}`}>
                  {/* Aquí puedes mostrar la información de la empresa */}
                  <p> {empresa.alias}</p>
                  {/* <p>Descripción: {empresa.description}</p> */}
                </Tabs.TabPane>
              ))}
            </Tabs>
          ) : (
            <Empty description="Agrega una empresa para que aparezca aquí en la tabla" />
          )}
        </div>
      </Drawer>
    </Box>
  );
}

export default SideBar;
