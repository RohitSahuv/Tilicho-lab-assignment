import { AppColors } from "@/lib/constant";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 25rem;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export default function SpinnerLoading() {
  return (
    <SpinnerContainer>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color={AppColors.Primary}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </SpinnerContainer>
  );
}