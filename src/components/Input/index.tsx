import React from "react";
import styled from "styled-components";
import { AppColors } from "@/lib/constant";

interface InputProps {
  type?: string;
  onChange?: Function;
  placeholder?: string | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  align?: "left" | "right" | "center";
}

const Input: React.FC<InputProps> = ({
  type = "text",
  onChange = () => { },
  placeholder,
  value,
  checked,
  align = "left"
}) => {
  return (
    <>
      <InputComp
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        checked={checked}
        align={align}
      />
    </>
  );
};

export default React.memo(Input);

const InputComp = styled.input<InputProps>`
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  border: 1px solid ${AppColors.GreyOne};
  border-radius: 0.25rem;
  box-sizing: border-box;
  text-align:${props => props.align};
  :focus {
    outline: 1px solid ${AppColors.Grey};
  }
`;
