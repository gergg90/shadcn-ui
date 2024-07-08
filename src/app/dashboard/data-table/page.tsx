import { payments } from "@/data/payments.data";

const fetchData = async () => {
  return payments;
};

const DataTablePage = async () => {
  const data = await fetchData();

  return <div></div>;
};

export default DataTablePage;
