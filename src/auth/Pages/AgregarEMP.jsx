import React from "react";
import { Button, Form, Input, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function AgregarEMP(props) {
  const Rules = { required: true };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.onAgregarEmpresa(values);

    form.resetFields();
  };

  return (
    <Form 
      form={form}
      name="wrap"
      labelCol={{
        flex: "110px",
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      style={{
        maxWidth: 600,
        padding: 20,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="Alias" name="alias" rules={[Rules]}>
        <Input />
      </Form.Item>

      <Form.Item label="Descripción" name="description" rules={[Rules]}>
        <Input />
      </Form.Item>

      <Form.Item label="RFC" name="rfc" rules={[Rules]}>
        <Input />
      </Form.Item>

      <Form.Item label="Domicilio" name="domicilio" rules={[Rules]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="LOGO"
        name="logo"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[Rules]}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Subir Logo</Button>
        </Upload>
      </Form.Item>

      <Form.Item label=" ">
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Limpiar
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default AgregarEMP;
