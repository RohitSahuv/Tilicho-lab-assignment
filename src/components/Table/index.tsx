import {
  faSortAmountDesc,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import {
  Row,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import styled from "styled-components";
import { TableContainer } from "../../../styles/globalStyles";
import { AppColors } from "../../lib/constant";
import {
  HeaderGroup,
  TableColumnProps,
  TableContentProps,
  TableOuterContainerProps,
  useTableProps,
} from "../../lib/types";
import NoData from "../NoData";
import ResponsivePagination from "../Pagination";

interface TableProps {
  columns: Array<TableColumnProps> | any;
  data: any | Array<any>;
  pageSize: number;
  border?: string;
  padding?: string;
  isPaginationRequired?: boolean;
  onClickPage?: Function;
  totalPage?: number;
  activePage?: number;
  tableContainerStyle?: string;
  isTableHeader?: boolean;
  tableHeight?: string;
  display?: string;
  totalRecords?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  pageSize,
  border = "",
  padding = "0.5rem",
  isPaginationRequired = true,
  onClickPage = () => { },
  totalPage = 0,
  activePage = 1,
  tableContainerStyle = "",
  isTableHeader = false,
  tableHeight = "",
  display = "",
  totalRecords = 0,
}) => {
  let updatedColumns: Array<TableColumnProps> = [];

  updatedColumns = useMemo(() => {
    columns.map((column: TableColumnProps) => {
      column.disableGlobalFilter = true;
      return column;
    });
    return columns;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page = [],
    rows,
    prepareRow,
    setPageSize = () => { },
    state: { pageIndex = 0 },
  }: useTableProps = useTable(
    {
      columns: updatedColumns,
      data: data ? data : [],
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(pageSize);
  }, [pageSize]);

  const onPageClickHandle = (page: number) => {
    onClickPage(page);
  };

  return (
    <TableContainer>
      {rows.length > 0 || isTableHeader ? (
        <>
          <TableOuterContainer className="fixTableHead" height={tableHeight}>
            <TableComp {...getTableProps()}>
              <TableHead border={border}>
                {headerGroups.map((headerGroup: HeaderGroup, index: number) => (
                  <tr {...headerGroup.getHeaderGroupProps} key={index}>
                    {headerGroup.headers.map((column: any, index: number) => (
                      <TableHeader
                        key={index}
                        border={border}
                        display={display}
                        onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
                          const sortByToggleProps = column.getSortByToggleProps();
                          if (sortByToggleProps && typeof sortByToggleProps.onClick === 'function' && column.isSortRequired) {
                            sortByToggleProps.onClick(e as any);
                          }
                        }}
                      >
                        {column.render("Header")}
                        <SortIcon>
                          {column.isSortRequired ? (
                            (column as any).isSorted ? (
                              column.isSortedDesc ? (
                                <FontAwesomeIcon
                                  icon={faSortAmountDesc}
                                  style={{
                                    fontSize: "1rem",
                                    color: AppColors.Black,
                                  }}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faSortAmountUp}
                                  style={{
                                    fontSize: "1rem",
                                    color: AppColors.Black,
                                  }}
                                />
                              )
                            ) : (
                              <FontAwesomeIcon
                                icon={faSortAmountUp}
                                style={{
                                  fontSize: "1rem",
                                  color: AppColors.LighterGrey,
                                }}
                              />
                            )
                          ) : (
                            ""
                          )}
                        </SortIcon>
                      </TableHeader>
                    ))}
                  </tr>
                ))}
              </TableHead>
              <tbody {...getTableBodyProps()}>
                {page.map((row: Row, i: number) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()} padding={padding} key={i}>
                      {row.cells.map((cell: any, index: number) => {
                        return (
                          <TableCell
                            {...cell.getCellProps()}
                            border={border}
                            padding={padding}
                            key={index}
                          >
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </tbody>
            </TableComp>
          </TableOuterContainer>
          {isPaginationRequired && (
            <PaginationContainer>
              <InnerDiv>
                showing
                <strong className="mx-1">
                  {(activePage - 1) * pageSize + 1} to{" "}
                  {(activePage - 1) * pageSize + page.length}
                </strong>

                of <strong>{totalRecords}</strong>
              </InnerDiv>
              <ResponsivePagination
                onPageChange={onPageClickHandle}
                totalPage={totalPage}
                currentPage={activePage}
              />
            </PaginationContainer>
          )}
        </>
      ) : (
        <>
          <NoData />
        </>
      )}
    </TableContainer>
  );
};

export default React.memo(Table);

const TableComp = styled.table`
  width: 100%;
  border-collapse: seperate;
  border-spacing: 0px;
`;

const TableHead = styled.thead<TableContentProps>`
  background-color: ${AppColors.LighterGrey};
  border: ${(props) => props.border ?? ""};
  position: sticky;
  top: 0;
`;

const TableHeader = styled.th<TableContentProps>`
  padding:0.5rem;
  font-size: 1rem !important;
  font-weight: 400;
  color: ${AppColors.GreyThree};
  background: ${AppColors.LighterGrey};
  display: ${(props) => (props.display ? "none" : "auto")};
  text-align: center;
   border-collapse: seperate;
`;
const TableCell = styled.td<TableContentProps>`
  padding: ${(props) => props.padding ?? "0.5rem"};
  text-align: center;
  border-bottom: ${(props) => props.border ?? `1px solid ${AppColors.LightGrey}`};
  border-collapse: seperate;
`;
const TableRow = styled.tr<TableContentProps>`
  padding: ${(props) => props.padding ?? "0.5rem"};

  &:hover {
    background-color: ${AppColors.LightBrown};
  }
  &:nth-of-type(even) {
    border: none;
  }
`;

const SortIcon = styled.span``;

const PaginationContainer = styled.div`
  text-align: center;
  padding: 0rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableOuterContainer = styled.div<TableOuterContainerProps>`
  overflow-y: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const InnerDiv = styled.div`
  display: inline-block;
`;
