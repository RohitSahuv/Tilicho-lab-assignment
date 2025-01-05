import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { IoIosSearch } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { DateRangePicker } from "@nextui-org/date-picker";
import axios from "axios";
import { AppColors, FIRST_PAGE, PAGE_LIMIT, tabs } from "@/lib/constant";
import { tableManagementHeader } from "@/lib/tableHeaderHelper";
import { tableContainerProps } from "@/lib/types";
import { ContentContainer, PageListTable } from "styles/globalStyles";
import SpinnerLoading from "@/components/SpinLoader";
import FilterPopUp from "./filterpopup";
import { LEADS } from "@/lib/apiPath";
import { formatUnixDateTime } from "@/lib/helper";

interface ManagementPorps {
  id: number;
  name: string;
  location: string;
  assignedOn: string;
  leadType: string;
  tab: string;
}

const LeadManagement: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [tableList, setTableList] = useState<ManagementPorps[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [filterFormData, setFilterFormData] = useState<{ leadType: string }>({
    leadType: "",
  });
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState<{ startDate: string | null; endDate: string | null }>({
    startDate: null,
    endDate: null,
  });

  const getTableList = async () => {
    setLoading(true);
    try {
      let res = await axios.get(LEADS, {
        params: {
          page: currentPage,
          limit: PAGE_LIMIT,
          ...searchText && { search: searchText },
          ...filterFormData.leadType && { leadType: filterFormData.leadType },
          ...activeTab && { activeTab: activeTab },
          ...dateRange.startDate && { startDate: dateRange.startDate },
          ...dateRange.endDate && {
            endDate: dateRange.endDate
          }
        },
      });

      if (res.status === 200) {
        const { leads, meta } = res.data;
        const formateRes = leads.map((lead: any) => {
          return {
            ...lead,
            assignedOn: formatUnixDateTime(lead.assignedOn),
          };
        });
        setTableList(formateRes);
        setTotalPage(meta.totalPages);
        setTotalRecords(meta.totalRecords);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };



  const handleDateChange = (range: any) => {
    if (range) {
      const startDate = range.start ? Math.floor(new Date(range.start).getTime() / 1000) : null;
      const endDate = range.end ? Math.floor(new Date(range.end).getTime() / 1000) : null;
      setDateRange({
        startDate: startDate?.toString() || null,
        endDate: endDate?.toString() || null,
      });
    }
  };

  const debouncedSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    }, 700),
    []
  );

  useEffect(() => {
    getTableList();
  }, [currentPage, activeTab, searchText, filterFormData, dateRange]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(FIRST_PAGE);
    setDateRange({ startDate: null, endDate: null });
    setFilterFormData({ leadType: "" });
    setSearchText("");
  };

  const handleApplyFilter = (filterData: { leadType: string }) => {
    setFilterFormData(filterData);
    getTableList();
  };

  const handleClearFilter = () => {
    setFilterFormData({ leadType: "" });
    setDateRange({ startDate: null, endDate: null });
  };

  return (
    <>
      <div className="w-[95%] min-h-[50px] flex justify-between items-center  overflow-x-auto">
        <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex -mb-px">
            {tabs.map((tab) => (
              <li key={tab} className="me-2 mr-4">
                <button
                  onClick={() => handleTabChange(tab)}
                  className={`inline-block text-nowrap p-2 border-b-2 rounded-t-lg ${tab === activeTab
                    ? "text-black border-yellow-300 dark:text-black font-bold text-base"
                    : "dark:hover:text-black text-base border-none"
                    }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <div className="max-w-md mx-auto">
            <div className="relative text-center text-sm mt-1 ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoIosSearch className="w-6 h-7 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="search"
                className="w-full text-sm p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg"
                placeholder="Search"
                onChange={debouncedSearch}
              />
            </div>
          </div>

          {/* DatePicker */}
          <div className="max-w-md bg-transparent">
            <DateRangePicker
              onChange={handleDateChange}
              className="w-full border rounded-lg bg-transparent p-0"
            />
          </div>

          <div className="flex items-center cursor-pointer justify-center border border-gray-300 rounded-lg py-1 px-3 gap-1 relative">
            <MdFilterList
              fontSize={"1rem"}
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            />
            Filters
            {isFilter && (
              <div className="absolute z-10 right-0 bottom-0">
                <FilterPopUp
                  onApply={handleApplyFilter}
                  onClear={handleClearFilter}
                  filterFormData={filterFormData}
                  setFilterFormData={setFilterFormData}
                  onClose={() => setIsFilter(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <TableContainer width="95%" marginTop="2rem">
        {loading ? (
          <SpinnerLoading />
        ) : (
          <PageListTable
            columns={tableManagementHeader(() => { })}
            data={tableList}
            onClickPage={setCurrentPage}
            pageSize={PAGE_LIMIT}
            border={`0.5px solid ${AppColors.Grey}`}
            totalPage={totalPage}
            activePage={currentPage}
            padding="0.2rem"
            totalRecords={totalRecords}
          />
        )}
      </TableContainer>
    </>
  );
};

export default React.memo(LeadManagement);

const TableContainer = styled(ContentContainer) <tableContainerProps>`
  width: ${({ width }) => width || "100%"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
`;
