import {} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { LogoLink } from "./styles";
import LogoImage from "/logo_byx.png";

export function Sidebar() {
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      type: "divider",
    },
    {
      key: "sub1",
      label: "Listagem de URLs",
    },
    {
      type: "divider",
    },
  ];

  return (
    <>
      <LogoLink to="/">
        <img style={{ maxWidth: "100%" }} src={LogoImage} />
      </LogoLink>

      <Menu
        style={{ height: "90vh" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
}
