import React from "react";
import styled from "styled-components";

const NoData: React.FC = () => {
  return <DataContainer>No Data Found</DataContainer>;
};

export default React.memo(NoData);

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;
