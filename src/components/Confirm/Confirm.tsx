import { Button } from "../Button";
import * as C from "./Confirm.styles";

export interface ConfirmProps {
  title: string;
  onAccept: () => void;
  onRefuse: () => void;
}

export function Confirm({ title, onAccept, onRefuse }: ConfirmProps) {
  return (
    <C.Wrapper>
      <C.Content>
        <C.Title>{title}</C.Title>
        <C.ButtonsWrapper>
          <Button label="Não" variant="danger" onClick={onRefuse} />
          <Button label="Sim" onClick={onAccept} />
        </C.ButtonsWrapper>
      </C.Content>
    </C.Wrapper>
  );
}
