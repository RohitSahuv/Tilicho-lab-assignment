
export const formateTableManagement = (tableManagementData: any, currentPage: number, pageSize: number) => {
  const formattedTableData = tableManagementData.map((tableData: any, index: number) => {
    return {
      ...tableData,
      assignedOn: tableData.assignedOn,
      id: (currentPage - 1) * pageSize + index + 1,
    };
  });

  return formattedTableData;
}
