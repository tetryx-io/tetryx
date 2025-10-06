import React, { useRef } from "react";
import "@glideapps/glide-data-grid/dist/index.css";
import useTheme from "@/lib/hooks/useTheme";
import {
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from "@glideapps/glide-data-grid";
import glideDataGridTheme from "@/lib/utils/theme";

const DatasetTable = ({ tableData, tableColumns, height = 400 }) => {
  const containerRef = useRef(null);
  const className = ''; // Add your desired className if needed

  const theme = glideDataGridTheme(containerRef, className)
  



  if (!tableData.length || !tableColumns.length) {
    return (
      <div
        role="status"
        className="flex items-center justify-center bg-gray-400 rounded-lg animate-pulse dark:bg-gray-700 w-full"
        style={{ height: `${height}px` }}
      ></div>
    );
  }

  const columns: GridColumn[] = tableColumns;

  const getCellContent = ([col, row]: Item): GridCell => {
    const indexes = Object.keys(tableData[row]);
    const key = indexes[col];
    let content = tableData[row][key];
    try {
      if (typeof content === "object") content = content?.result || "";
      content = content.toString();
    } catch (_) {
      content = "";
    }

    return {
      kind: GridCellKind.Text,
      data: content,
      allowOverlay: false,
      displayData: content,
    };
  };

  return (
    <div ref={containerRef}>
      <DataEditor
        columns={columns}
        getCellContent={getCellContent}
        rows={tableData.length}
        className=""
        height={height}
        smoothScrollY={true}
        theme={theme}
      />
    </div>
  );
};

export default DatasetTable;
