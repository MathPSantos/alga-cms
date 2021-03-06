import { useEffect, useState } from "react";
import * as CC from "./CircleChart.styles";

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "default" | "primary";
  strokeWidth?: number;
}

export function CircleChart({
  size,
  progress,
  caption,
  theme,
  strokeWidth,
}: CircleChartProps) {
  const THEME = getThemeColor();
  const STROKE_WIDTH = strokeWidth || 8;
  const STROKE_COLOR = THEME;

  const CENTER = size / 2;
  const RADIUS = size / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * CIRCUMFERENCE;

    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, progress, offset]);

  function getThemeColor() {
    return theme === "primary" ? "#09f" : "#274060";
  }

  return (
    <CC.Wrapper>
      <CC.SvgWrapper style={{ width: size, height: size }}>
        <CC.Svg width={size} height={size}>
          <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIUS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage color={THEME}>{progress}%</CC.Percentage>
      </CC.SvgWrapper>

      {!!caption && <CC.Caption>{caption}</CC.Caption>}
    </CC.Wrapper>
  );
}
