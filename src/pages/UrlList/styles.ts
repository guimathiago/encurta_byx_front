import styled from "styled-components";
import { Button, Input, Select } from "antd";

export const Container = styled.div`
  padding: 3rem 3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.1rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const InputItem = styled(Input)`
  width: 100%;
  border-radius: 5px;
  border-color: #c4c4cc;

  &::placeholder {
    color: #c4c4cc; 
    opacity: 1; 
  }

  &:-ms-input-placeholder { 
    color: #c4c4cc;
  }

  &::-ms-input-placeholder { 
    color: #c4c4cc;
  }
`;

export const SelectItem = styled(Select)`
width: 100%;
border-radius: 5px;

.ant-select-selector {
  border-color: #c4c4cc !important;
}

.ant-select-selection-placeholder {
  color: #c4c4cc; 
}

&:hover .ant-select-selector {
  border-color: #c4c4cc !important; 
}

`;

export const ButtonItem = styled(Button)`
  width: 100%;
  border-radius: 5px;
  background-color: #0097BA;
`;