"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dados para gráfico de linha - Crescimento de vendas
const salesGrowthData = [
  { mes: "Jan", vendas: 45, engajamento: 52 },
  { mes: "Fev", vendas: 58, engajamento: 61 },
  { mes: "Mar", vendas: 72, engajamento: 75 },
  { mes: "Abr", vendas: 89, engajamento: 88 },
  { mes: "Mai", vendas: 98, engajamento: 95 },
  { mes: "Jun", vendas: 115, engajamento: 108 },
];

// Dados para gráfico de barras - Antes/Depois
const beforeAfterData = [
  { metrica: "Reconhecimento", antes: 45, depois: 78 },
  { metrica: "Engajamento", antes: 38, depois: 88 },
  { metrica: "Retenção", antes: 52, depois: 85 },
  { metrica: "Conversão", antes: 28, depois: 46 },
];

// Dados para gráfico de pizza - Distribuição de aplicações
const applicationDistribution = [
  { name: "Eventos & Marketing", value: 35 },
  { name: "Uniformes", value: 28 },
  { name: "Brindes", value: 22 },
  { name: "Revenda", value: 15 },
];

// Cores para os gráficos
const colors = {
  primary: "#966ff1ff",
  secondary: "#029fbbff",
  muted: "#94A3B8",
  chart2: "#029fbbff",
};

type Props = {
  aosParams?: Record<string, string>;
};

const Charts = ({ aosParams }: Props) => {
  return (
    <section>
      <div className="container mx-auto cursor-default lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {/* Line Chart - Crescimento */}
          <div
            {...aosParams}
            className="bg-card flex h-[450px] flex-col justify-between rounded-2xl border border-[var(--borders-color)] p-6"
          >
            <div>
              <h4 className="text-lg font-semibold">Crescimento Mensal</h4>

              <p className="text-muted-foreground text-base font-extralight">
                Pesquisas mostram que a distribuição de brindes aumenta as
                vendas e o engajamento de forma consistente.
              </p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesGrowthData} className="translate-x-[-30px]">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="mes" style={{ fontSize: "12px" }} />
                <YAxis style={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="vendas"
                  stroke={colors.primary}
                  strokeWidth={2}
                  name="Vendas"
                />
                <Line
                  type="monotone"
                  dataKey="engajamento"
                  stroke={colors.chart2}
                  strokeWidth={2}
                  name="Engajamento"
                />
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    transform: "translateY(10px) translateX(30px)",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Antes/Depois */}
          <div
            {...aosParams}
            className="bg-card flex h-[450px] flex-col justify-between rounded-2xl border border-[var(--borders-color)] p-6"
          >
            <div>
              <h4 className="text-lg font-semibold">Impacto</h4>

              <p className="text-muted-foreground text-base font-extralight">
                Antes e depois para as métricas de reconhecimento, engajamento,
                retenção e conversão de clientes.
              </p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={beforeAfterData} className="translate-x-[-30px]">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="metrica" style={{ fontSize: "12px" }} />
                <YAxis style={{ fontSize: "12px" }} />
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    transform: "translateY(10px) translateX(30px)",
                  }}
                />
                <Bar dataKey="antes" fill={colors.muted} name="Antes" />
                <Bar dataKey="depois" fill={colors.primary} name="Depois" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Distribuição */}
          <div
            {...aosParams}
            className="bg-card flex h-[450px] flex-col justify-between rounded-2xl border border-[var(--borders-color)] p-6"
          >
            <div>
              <h4 className="text-lg font-semibold">Aplicações</h4>

              <p className="text-muted-foreground text-base font-extralight">
                Média das áreas de distribuição de brindes personalizados dos
                nossos clientes
              </p>
            </div>

            <ResponsiveContainer
              width="100%"
              height={250}
              className="translate-y-[-15px]"
            >
              <PieChart>
                <Pie
                  data={applicationDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  // eslint-disable-next-line
                  label={({ percent }: any) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {applicationDistribution.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={Object.values(colors)[index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    fontSize: "11px",
                    transform: "translateY(20px)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
