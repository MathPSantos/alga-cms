import * as WPC from "./WordPriceCounter.styles";

export interface WordPriceCounterProps {
  wordsCount: number;
  pricePerWord: number;
}

export function WordPriceCounter({
  wordsCount,
  pricePerWord,
}: WordPriceCounterProps) {
  if (wordsCount < 0) throw Error("Words quantity can't be less than 0");

  const ammount = wordsCount * pricePerWord;

  return (
    <WPC.Wrapper>
      <WPC.WordCounter>{wordsCount} palavras</WPC.WordCounter>
      <WPC.PricePreview>
        {ammount.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })}
      </WPC.PricePreview>
    </WPC.Wrapper>
  );
}
