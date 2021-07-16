import styled, { css } from "styled-components";

const small = css`
  height: 36px;
  font-size: 16px;
`;

const medium = css`
  height: 48px;
  font-size: 20px;
`;

const large = css`
  height: 56px;
  font-size: 24px;
`;

const main = css`
  background-color: rgba(160, 107, 227, 1);
`;

const second = css`
  background-color: rgba(111, 175, 234, 1);
`;

interface LMButtonProps {
  readonly small?: boolean;
  readonly medium?: boolean;
  readonly large?: boolean;
  readonly main?: boolean;
  readonly second?: boolean;
}

const LMButton = styled.button<LMButtonProps>`
  border-radius: 2px;
  color: white;
  border: none;
  padding: 10px 40px;
  font-family: "Roboto";
  font-weight: bold;
  cursor: pointer;
  
  ${(props) => props.small && small}
  ${(props) => props.medium && medium}
  ${(props) => props.large && large}

  ${(props) => props.main && main}
  ${(props) => props.second && second}

  ${(props) => (!props.main && !props.second ? second : "")}
`;

export default LMButton;
