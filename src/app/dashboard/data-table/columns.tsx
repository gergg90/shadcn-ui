"use client";
import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data";
import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: any,
  addMeta: (meta: any) => void
) => {
  filterValue = filterValue.toLowerCase();
  const filterPats = filterValue.split(" ");

  const rowValues =
    `${row.original.clientName} ${row.original.email} ${row.original.status}`.toLowerCase();

  // if (row.original.email.includes(filterValue)) {
  //   return true;
  // }
  // if (row.original.status.includes(filterValue)) {
  //   return true;
  // }
  // if (row.original.clientName.includes(filterValue)) {
  //   return true;
  // }

  // return false

  return filterPats.every((part: any) => rowValues.includes(part));
};

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") return <IoArrowUp />;
  if (isSorted === "desc") return <IoArrowDown />;

  return null;
};

export const Columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
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
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast("Hello!!! Your ID has been successfully copied", {
                  position: "top-right",
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
