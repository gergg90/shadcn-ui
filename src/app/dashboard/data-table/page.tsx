import { payments } from "@/data/payments.data";
import { Columns } from "./columns";
import { DataTable } from "./data-table";

const fetchData = async () => {
  return payments;
};

const DataTablePage = async () => {
  const data = await fetchData();
  const columns = Columns;
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default DataTablePage;
