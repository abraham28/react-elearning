import React from "react";
import { Input, InputGroup } from "./styles";

type Props = {
  icon: JSX.Element;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const EzTextField: React.FC<Props> = ({ icon, ...rest }: Props) => (
  <InputGroup>
    {icon}
    <Input {...rest} />
  </InputGroup>
);

export default EzTextField;
