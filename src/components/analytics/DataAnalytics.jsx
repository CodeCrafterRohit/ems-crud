import React, { useState, useMemo } from "react";
import { useEmployees } from "../../context/EmployeeProvider";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const GENERAL_COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#f59e0b", "#ec4899"];

//! Strict Color Mapping for Status
const STATUS_COLORS = {
  Active: "#10b981",
  Inactive: "#f43f5e",
  "On Leave": "#f59e0b",
};

const DataAnalytics = () => {
  const allEmployees = useEmployees();
  const [pieCategory, setPieCategory] = useState("eDept");

  //! Logic for Pie Chart
  const pieData = useMemo(() => {
    if (!allEmployees) return [];
    const counts = allEmployees.reduce((acc, emp) => {
      const key = emp[pieCategory] || "Not Specified";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map((name) => ({ name, value: counts[name] }));
  }, [allEmployees, pieCategory]);

  //! Logic for Line Chart
  //! Logic for Line Chart (Fixed for Month-Year Trends)
  const lineData = useMemo(() => {
    if (!allEmployees) return [];

    // Grouping by Month/Year
    const counts = allEmployees.reduce((acc, emp) => {
      if (!emp.eJoiningDate) return acc;

      const d = new Date(emp.eJoiningDate);
      // Format: "Jan 2024"
      const monthLabel = d.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      // Sort Key: "2024-01" (Hidden key used for chronological sorting)
      const sortKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}`;

      if (!acc[sortKey]) {
        acc[sortKey] = { sortKey, date: monthLabel, count: 0 };
      }
      acc[sortKey].count += 1;
      return acc;
    }, {});

    // Sort by the YYYY-MM key and return array
    return Object.values(counts).sort((a, b) =>
      a.sortKey.localeCompare(b.sortKey)
    );
  }, [allEmployees]);

  return (
    <div className="p-6 space-y-8 pt-23 max-w-7xl mx-auto">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Employee Workforce Analytics
        </h1>
        <p className="text-slate-500 mt-2 text-base max-w-5xl">
          Gain deeper insights into your team's composition, monitoring growth
          trends and departmental distribution to make data-driven decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800">Hiring Trends</h3>
            <p className="text-sm text-slate-400">
              Monthly breakdown of new team members
            </p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="date"
                  fontSize={11}
                  tickMargin={12}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                />
                <YAxis
                  fontSize={11}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#6366f1"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#6366f1",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 8 }}
                  // This is the customized label part
                  label={{
                    position: "top",
                    fill: "#6366f1",
                    fontSize: 12,
                    fontWeight: "bold",
                    offset: 12,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800">Distribution</h3>
            <select
              value={pieCategory}
              onChange={(e) => setPieCategory(e.target.value)}
              className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
            >
              <option value="eDept">Department</option>
              <option value="eRole">Role</option>
              <option value="eIsActive">Status</option>
            </select>
          </div>

          <div className="h-80 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart padding={{ top: 20, right: 40, bottom: 20, left: 40 }}>
                <Pie
                  key={pieCategory}
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                  isAnimationActive={true}
                  animationBegin={200}
                  animationDuration={1200}
                  animationEasing="ease-out"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    outerRadius,
                    name,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = 22 + outerRadius;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    const sliceColor =
                      pieCategory === "eIsActive"
                        ? STATUS_COLORS[name] || "#94a3b8"
                        : GENERAL_COLORS[index % GENERAL_COLORS.length];

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={sliceColor}
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                        className="text-[11px] font-bold"
                      >
                        {`${name} (${value})`}
                      </text>
                    );
                  }}
                  labelLine={({
                    cx,
                    cy,
                    midAngle,
                    outerRadius,
                    index,
                    name,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const startRadius = outerRadius;
                    const endRadius = 18 + outerRadius;
                    const sx = cx + startRadius * Math.cos(-midAngle * RADIAN);
                    const sy = cy + startRadius * Math.sin(-midAngle * RADIAN);
                    const ex = cx + endRadius * Math.cos(-midAngle * RADIAN);
                    const ey = cy + endRadius * Math.sin(-midAngle * RADIAN);

                    const sliceColor =
                      pieCategory === "eIsActive"
                        ? STATUS_COLORS[name] || "#94a3b8"
                        : GENERAL_COLORS[index % GENERAL_COLORS.length];
                    return (
                      <line
                        x1={sx}
                        y1={sy}
                        x2={ex}
                        y2={ey}
                        stroke={sliceColor}
                        strokeWidth={1.5}
                        opacity={0.6}
                      />
                    );
                  }}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        pieCategory === "eIsActive"
                          ? STATUS_COLORS[entry.name] || "#94a3b8"
                          : GENERAL_COLORS[index % GENERAL_COLORS.length]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{
                    paddingTop: "20px",
                    fontSize: "11px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
