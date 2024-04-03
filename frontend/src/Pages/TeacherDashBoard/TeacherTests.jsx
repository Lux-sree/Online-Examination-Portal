import { useState } from "react";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import Buttons from "../../Components/Buttons";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const TeacherTests = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  

  const handleSubmitForm = (formData) => {
     console.log(formData);
  };
  
  return (
    <div className="teacher-home">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <NavBar num={2} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
              <Breadcrumb.Item>
                <h1>Hello Teacher!</h1>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* HomePage */}
              <Cards
                card1Title="CREATE A TEST:"
                card1Content={
                  <Buttons name={"+ Create Test"} to="/create-test-form" />
                }
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default TeacherTests;

