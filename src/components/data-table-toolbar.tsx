"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Trash2, Send, Filter } from "lucide-react";
import { useCallback, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table-view-options";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onBulkAction?: (action: string, selectedRows: TData[]) => void;
  filterPlaceholder?: string;
}

export function DataTableToolbar<TData>({
  table,
  onBulkAction,
  filterPlaceholder = "Filter...",
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const hasSelection = selectedRows.length > 0;

  // Get the first visible column that's not the select column
  const filterableColumn = useMemo(() => {
    const columns = table.getAllColumns();
    return columns.find((column) => column.getCanFilter() && column.id !== "select" && column.id !== "actions");
  }, [table]);

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (filterableColumn) {
        filterableColumn.setFilterValue(event.target.value);
      }
    },
    [filterableColumn],
  );

  const currentFilter = filterableColumn?.getFilterValue() as string;

  if (!filterableColumn) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={filterPlaceholder}
          value={currentFilter ?? ""}
          onChange={handleFilterChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        {hasSelection && (
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="px-3 py-1">
              {selectedRows.length} selected
            </Badge>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" className="h-8">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Selected Items</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete the selected submissions? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      onBulkAction?.(
                        "delete",
                        selectedRows.map((row) => row.original),
                      )
                    }
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="mr-2 h-4 w-4" />
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    onBulkAction?.(
                      "mark-sent",
                      selectedRows.map((row) => row.original),
                    )
                  }
                >
                  <Send className="mr-2 h-4 w-4" />
                  Mark as Sent
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
