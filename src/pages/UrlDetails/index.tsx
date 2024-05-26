import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { UrlsType } from "../UrlList";
import { Container, Title } from "../UrlList/styles";
import { Breadcrumb, Descriptions, Divider, Table, TableProps } from "antd";
import { TableTitle } from "./styles";
import { PRODUCT_TYPE_DISPLAY } from "../../utils/display";

interface UrlDetailsType {
  ip: string;
  dateTime: string;
  device: string;
  geolocation: {
    lat: string;
    long: string;
    region: string;
    city: string;
  };
}

export const UrlDetails = () => {
  const [urlDetails, setUrlDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { details } = location.state as { details: UrlsType };

  const fetchUrlDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/access-log?shortUrl=${details.shortUrl}`
      );
      setUrlDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch URL details:", error);
      setLoading(false);
    }
  }, [details.shortUrl]);

  useEffect(() => {
    fetchUrlDetails();
  }, [fetchUrlDetails]);

  const itemsBreadcrumb = [
    {
      title: <a href="/">Listagem</a>,
    },
    {
      title: "Detalhes da URL",
    },
  ];

  const columns: TableProps<UrlDetailsType>["columns"] = [
    {
      title: "Data e Hora",
      dataIndex: "dateTime",
      key: "dateTime",
      render: (dateTime) => new Date(dateTime).toLocaleString(),
    },

    {
      title: "Dispositivo",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Localização",
      dataIndex: "geolocation",
      key: "geolocation",
      render: (geolocation) =>
        `${geolocation.city}, ${geolocation.region} (${geolocation.lat}, ${geolocation.long})`,
    },
  ];

  return (
    <Container>
      <Title>{details.shortUrl}</Title>
      <Breadcrumb items={itemsBreadcrumb} />
      <Divider />
      <Descriptions
        title="Detalhes da URL"
        column={{ sm: 1, xs: 1, md: 1, lg: 1 }}
      >
        <Descriptions.Item label="Original">
          {details.originalUrl}
        </Descriptions.Item>
        <Descriptions.Item label="Encurtada">
          {details.shortUrl}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title="Mais informações" column={2}>
        <Descriptions.Item label="CPF">{details.cpf}</Descriptions.Item>
        <Descriptions.Item label="Produto">
          {PRODUCT_TYPE_DISPLAY[details.product]}
        </Descriptions.Item>
        <Descriptions.Item label="Contrato">
          {details.contract || "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Telefone">
          {details.phone || "-"}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <TableTitle>Histórico de acessos</TableTitle>
      <Table columns={columns} dataSource={urlDetails} loading={loading} />
    </Container>
  );
};
