import styled from "styled-components";

interface NoDataProps {
  height?: number;
}

export function NoData({ height = 120 }: NoDataProps) {
  return (
    <Wrapper height={height}>
      <Message>Sem dados para exibir</Message>
      <SadFace>:(</SadFace>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Message = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #274060;
`;

const SadFace = styled.span`
  font-family: "Roboto Mono", monospace;
  color: #0099ff;
  font-weight: 700;
`;
