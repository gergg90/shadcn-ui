"use client";
import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data";
import { ColumnDef } from "@tanstack/react-table";

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
//   clientName: string;
// };

export const Columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const variant = {
        success: "colorCute",
        failed: "destructive",
        pending: "info",
        processing: "processing",
      }[status] as any;

      return (
        <Badge variant={variant} capitalize>
          {status}
        </Badge>
      );

      //! ejercicio realizado con ifelse
      // if (rowValue === "success") {
      //   return (
      //     <Badge variant="colorCute" className="gap-1">
      //       <IoCheckmarkCircle />
      //       {rowValue}
      //     </Badge>
      //   );
      // } else if (rowValue === "failed") {
      //   return (
      //     <Badge variant="destructive" className="gap-1">
      //       <IoCloseCircle /> {rowValue}
      //     </Badge>
      //   );
      // } else if (rowValue === "pending") {
      //   return (
      //     <Badge variant="info" className="gap-1">
      //       <IoEye />
      //       {rowValue}
      //     </Badge>
      //   );
      // } else {
      //   return (
      //     <Badge variant="processing" className="gap-1">
      //       <IoEllipsisHorizontalCircleSharp />
      //       {rowValue}
      //     </Badge>
      //   );
      // }
    },
  },
];
