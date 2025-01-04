import styled from "styled-components";
import { AppColors } from "@/lib/constant";
import { FormEvent } from "react";
import Table from "@/components/Table";


export const ContentContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: ${AppColors.AppWhite};
  border-radius: 0.5rem;
  border: 1px solid ${AppColors.LightGrey};
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;

export interface ContainerProps {
  direction?: "row" | "column";
  onSubmit?: (event: FormEvent<HTMLLabelElement>) => void;
  textAlign?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
  children?: React.ReactNode;
}


export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
`;


export const PageListTable = styled(Table)`
  height: 100%;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  height: 99% !important;
  display: flex;
  flex-direction: column;
`;