import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
const { Content: AntdContent } = AntdLayout;

export const Layout: typeof AntdLayout = styled(AntdLayout)`
  height: 100%;
`;

export const Content = styled(AntdContent)`
  height: 100%;
  overflow: auto;
`;
