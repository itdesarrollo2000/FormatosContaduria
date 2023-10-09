import { Button, Form, Input } from "antd";

function AgregarEMP() {
  const Rules = { require: true };
  return (
    <Form
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
      }}
    >
      <Form.Item label="Alias" name="username" rules={[Rules]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="A super long label text"
        name="password"
        rules={[Rules]}
      >
        <Input />
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AgregarEMP;
