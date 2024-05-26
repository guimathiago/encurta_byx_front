import { Outlet } from "react-router-dom";

import { Sidebar } from "../Sidebar";
import { Content, Layout } from "./styles";
const { Sider } = Layout;

export const PageLayout = () => {
  return (
    <Layout>
      <Sider width={216} breakpoint="sm" collapsedWidth="60" theme="light">
        <Sidebar />
      </Sider>

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
