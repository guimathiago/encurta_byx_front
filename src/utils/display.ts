import { PRODUCT_TYPE } from "./enum";

export const PRODUCT_TYPE_DISPLAY: Record<PRODUCT_TYPE, string> = {
  [PRODUCT_TYPE.CARTAO_BENEFICIO]: "Cartão Benefício",
  [PRODUCT_TYPE.PORTABILIDADE]: "Portabilidade",
  [PRODUCT_TYPE.SAQUE_COMPLEMENTAR]: "Saque Complementar",
  [PRODUCT_TYPE.CARTAO_CONSIGNADO]: "Cartão Consignado",
  [PRODUCT_TYPE.MARGEM_LIVRE]: "Margem Livre",
  [PRODUCT_TYPE.PORTABILIDADE_REFIN]: "Portabilidade + Refinanciamento",
};