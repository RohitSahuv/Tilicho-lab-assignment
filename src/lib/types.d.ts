

export interface menuLinkProps {
  isActive?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export type HeaderGroup = {
  headers: EnhancedColumn[];
  getRowProps: (userProps?: object) => object;
  getHeaderGroupProps: () => void;
};

//Table props

export type Cell = {
  render: (type: string) => JSX.Element;
  getCellProps: () => void;
  column: Column;
  row: Row;
  state: string;
  value: string | JSX.Element;
};

export type Row = {
  index: number;
  cells: Cell[];
  getRowProps: () => void;
  original: object;
};

export type tableSortProps = {
  title?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: ((e: MouseEvent) => void) | undefined;
};


export interface tableDefaultProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  role?: string | undefined;
}

export interface useTableProps {
  getTableProps: (propGetter?: tableDefaultProps) => TableProps;
  rows?: Array<D>;
  getTableBodyProps: (propGetter?: tableDefaultProps) => TableBodyProps;
  headerGroups: Array<HeaderGroup<D>>;
  page?: Array<Row<D>>;
  prepareRow: (row: Row<D>) => void;
  setFilter?: (
    columnId: String,
    updater: ((filterValue: string) => string) | string
  ) => void;
  setAllFilters?: (
    updater:
      | Array<{ id: String | number; value: String }>
      | ((
        filters: Array<{ id: String | number; value: string }>
      ) => Array<{ id: String | number; value: string }>)
  ) => void;
  setGlobalFilter?: (filterValue: string | undefined) => void;
  pageOptions?: number[];
  previousPage?: () => void;
  setPageSize?: (pageSize: number) => void;
  state: { hiddenColumns?: Array<String> | undefined; pageIndex?: number };
  selectedFlatRows?: Array<Row<D>>;
}


export interface tableContainerProps {
  width?: string;
  marginTop?: string;
  children?: React.ReactNode;
}

export interface TableColumnProps {
  Header?: string;
  accessor: string | propertyIsEnumerable;
  isSortRequired?: boolean;
  disableGlobalFilter?: boolean;
}

export interface TableContentProps {
  border?: string;
  padding?: string;
  display?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

export interface TableOuterContainerProps {
  height?: string;
  children?: React.ReactNode;
  padding?: string;
  height?: string;
  className?: string;
  padding?: string;
  tableHeight?: string;
  spaceBetween?: boolean;
}
