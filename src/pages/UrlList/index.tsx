import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { Col, Form, Row, Table, TableProps } from "antd";
import {
  ButtonItem,
  Container,
  Description,
  InputItem,
  SelectItem,
  Title,
} from "./styles";
import { PRODUCT_TYPE_DISPLAY } from "../../utils/display";
import { PRODUCT_TYPE } from "../../utils/enum";
import { formatCpf, formatPhone } from "../../utils/formatters";
import { useNavigate } from "react-router-dom";

export interface UrlsType {
  originalUrl: string;
  accessCount: number;
  product: PRODUCT_TYPE;
  cpf: string;
  shortUrl: string;
  contract: string;
  service: string;
  phone: string;
}

export const UrlList = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    shortUrl: "",
    product: "",
    cpf: "",
    contract: "",
  });
  const navigate = useNavigate();

  const columns: TableProps<UrlsType>["columns"] = [
    {
      title: "URL Encurtada",
      dataIndex: "shortUrl",
      key: "shortUrl",
      render: (text, record) => {
        return (
          <a
            onClick={() =>
              navigate(`/detalhe-url`, { state: { details: record } })
            }
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {text}
          </a>
        );
      },
    },

    {
      title: "Produto",
      dataIndex: "product",
      key: "product",
      render: (product: PRODUCT_TYPE) => PRODUCT_TYPE_DISPLAY[product],
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      key: "cpf",
      render: (cpf) => formatCpf(cpf),
    },
    {
      title: "Contrato",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => contract || "--",
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => formatPhone(phone) || "--",
    },
    {
      title: "Acessos",
      dataIndex: "accessCount",
      key: "accessCount",
    },
  ];

  // Criar uma lista de opções para o Select a partir do enum e do display
  const productOptions = Object.entries(PRODUCT_TYPE_DISPLAY).map(
    ([key, label]) => ({
      label: label,
      value: key,
    })
  );

  // Função para atualizar o estado dos filtros
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value || "" }));
  };

  // Função para buscar as URLs com filtros
  const fetchUrls = useCallback(
    async (useFilters = true) => {
      setLoading(true);
      const params = new URLSearchParams();

      // Adiciona apenas os parâmetros que não estão vazios ou nulos, se useFilters for true
      if (useFilters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value && value.trim() !== "") {
            params.append(key, value);
          }
        });
      }

      try {
        const response = await api.get(`/encurta_byx?${params.toString()}`);
        setUrls(response.data);
      } catch (error) {
        console.error("Failed to fetch URLs:", error);
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  useEffect(() => {
    fetchUrls(false);
  }, []);

  return (
    <Container>
      <Title>Listagem de URLs Encurtadas</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        eligendi a autem reiciendis temporibus ad ab laborum architecto
        delectus. Laboriosam illum consequatur voluptate odit totam tempore,
        suscipit labore accusantium quasi.
      </Description>
      <Form onFinish={() => fetchUrls()}>
        <Row gutter={[15, 10]}>
          <Col lg={6}>
            <Form.Item>
              <InputItem
                value={filters.shortUrl}
                onChange={(e) => handleFilterChange("shortUrl", e.target.value)}
                placeholder="URL Encurtada"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            <Form.Item>
              <InputItem
                value={filters.cpf}
                onChange={(e) => handleFilterChange("cpf", e.target.value)}
                placeholder="CPF"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            <Form.Item>
              <SelectItem
                options={productOptions}
                allowClear
                optionFilterProp="label"
                onChange={(e) => handleFilterChange("product", e as string)}
                placeholder="Produto"
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            <Form.Item>
              <InputItem
                value={filters.contract}
                onChange={(e) => handleFilterChange("contract", e.target.value)}
                placeholder="Número do Contrato"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item>
              <ButtonItem type="primary" htmlType="submit">
                Buscar
              </ButtonItem>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Table columns={columns} dataSource={urls} loading={loading} />
    </Container>
  );
};
