import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface TableProps {
  data: any[];
  columns: any[];
  getRowClassName?: (row: any) => string;
}

export function Table({ data, columns, getRowClassName }: TableProps) {
  const dataMemo = useMemo(() => data, [data]);
  const columnsMemo = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: dataMemo,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="my-6 table th-rounded w-full">
      {/* <div>{title && <h3>{title}</h3>}</div>{" "} */}
      <table className="table-fixed w-full">
        <thead className="bg-neutral-100 rounded-t-md">
          {dataMemo?.length ? (
            table.getHeaderGroups().map((headerGroup) => (
              <tr className="" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="text-xs uppercase text-neutral-400 text-left px-1 sm:px-3"
                      key={header.id}
                      colSpan={header.colSpan}
                      scope="col"
                    >
                      {header.isPlaceholder ? null : (
                        <div className="p-2">
                          <div className="w-full">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr className="my-6 flex flex-col w-full gap-1 items-center th-rounded py-6">
              <div className="font-medium text-neutral-600">No data</div>
              <div className="text-sm text-neutral-400">Check back again later</div>
            </tr>
          )}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className={`border-b border-neutral-100 ${getRowClassName?.(row.original) || ''}`} key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      <div className="p-2 sm:px-5 sm:py-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
