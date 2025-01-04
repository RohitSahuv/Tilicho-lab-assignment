import { AppColors, actionList } from "./constant";
import React from "react";
import { IoMdCall } from "react-icons/io";
import styled from "styled-components";
import { RxDotFilled } from "react-icons/rx";

export const tableManagementHeader = (actionHandle: Function) => {
  return [
    { Header: "Name", accessor: "name" },
    { Header: "Location", accessor: "location" },
    { Header: "Assigned On", accessor: "assignedOn" },
    {
      Header: "Lead Type",
      accessor: "leadType",
      Cell: ({ value }: { value: string }) => {
        console.log(value);
        return (
          <StyledBadge status={value}
          >
            <RxDotFilled size={20} color={value === "Hot" ? "#FF0000" : value === "Medium" ? "#FFC107" : AppColors.DarkGrey} />
            {value}
          </StyledBadge>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }: { row: { original: { id: number } } }) => {
        return (
          <div className="flex gap-4 items-center justify-center p-2">
            {actionIconsList?.map((actionIconsData, index) => (
              <div
                key={index}
                onClick={() => actionHandle(actionIconsData.id, row.original.id)}
                className="cursor-pointer flex items-center justify-center gap-2"
              >
                {actionIconsData.icon} <span style={{ color: "green" }}>Call</span>
              </div>
            ))}
          </div>
        );
      },
    },
  ];
};

const actionIconsList = [
  {
    id: actionList.call,
    icon: <IoMdCall size={20} color={AppColors.Green} />,
  },
];


const StyledBadge = styled.span<{
  status: string,
  children: React.ReactNode,
  onClick?: () => void
}>`
  width: fit-content;
  display: flex;
  padding: 0.2em 0.5rem;
  font-size: 0.875em;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin : auto;
  z-index: -1;
  color: ${({ status }) => {
    switch (status) {
      case 'Hot':
        return '#FF0000';
      case 'Medium':
        return '#FFC107';
      default:
        return `${AppColors.DarkGrey}`;
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case 'Hot':
        return '#FFCCCC';
      case 'Medium':
        return '#FFF3CD';
      default:
        return `${AppColors.LightGrey}`;
    }
  }};
`;
