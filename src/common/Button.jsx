import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  color: ${p => p.color || 'grey'};
  
  ${(p) => p.primary && css`
  color: white;
  background: navy;
  border-color: navy;
  `}
`;

function Button({children, ...props}) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button;