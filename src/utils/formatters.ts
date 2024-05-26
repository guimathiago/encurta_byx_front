export const formatPhone = (phone?: string | number | null) => {
  if (!phone) return "";

  return phone
    .toString()
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
};

export const formatCpf = (cpf?: string) => {
  return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") || "";
};

export const formatDate = (dateString?: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna o mês de 0 a 11
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};
