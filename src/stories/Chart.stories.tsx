import { Meta } from "@storybook/react";
import { Chart } from "../app/components/Chart/Chart";

export default {
  title: "Data/Chart",
  component: Chart,
} as Meta;

const data: Chart.ChartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Receitas",
      data: [500, 600, 400, 100, 800, 20],
      fill: true,
      backgroundColor: "#0099ff",
      borderColor: "transparent",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
    {
      label: "Despesas",
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
  ],
};

export function Default() {
  return (
    <Chart title="Média de performance nos últimos 12 meses" data={data} />
  );
}

export function WithoutData() {
  return <Chart title="Média de performance nos últimos 6 meses" />;
}
