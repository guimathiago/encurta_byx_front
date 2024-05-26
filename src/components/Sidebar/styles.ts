import styled from "styled-components";
import { Menu as AntdMenu, Layout as AntdLayout } from "antd";
import { Link } from "react-router-dom";
const { Content: AntdContent } = AntdLayout;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 46px;
  padding: 10px 16px;
  border-color: #cbd0dd;
  border-width: 1px 0 0;

  @media (min-width: 576px) {
    height: 104px;
    padding: 20px 40px;
  }
`;

export const Footer = styled(AntdContent)`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.token.colorTextLabel};
  font-size: 0.85em;
  margin-bottom: 4px;

  :hover {
    color: ${({ theme }) => theme.token.colorPrimary};
  }
`;

export const Menu = styled(AntdMenu)`
  .ant-menu-item-group {
    .ant-menu-item-group-title {
      font-weight: bold;
      display: none;

      @media (min-width: 576px) {
        display: inherit;
      }
    }

    .ant-menu-item {
      @media (min-width: 576px) {
        height: auto;
        min-height: 40px;
        white-space: normal;
        line-height: 20px;
        padding-top: 4px;
        padding-bottom: 4px;
      }
    }
  }

  .ant-menu-item-divider {
    border-color: #cbd0dd;
    border-width: 1px 0 0;

    &:first-child {
      margin-top: 0;
    }
  }
`;
