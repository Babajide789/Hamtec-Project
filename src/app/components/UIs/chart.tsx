"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "./utils";


type LegendPayloadItem = {
  value: string;
  color: string;
  type?: string;
  id?: string;
  dataKey?: string;
};

type CustomLegendProps = {
  payload?: LegendPayloadItem[];
  verticalAlign?: "top" | "bottom" | "middle";
  className?: string;
};

type CustomTooltipProps = {
  payload?: { value: number | string; name: string; color: string }[];
  label?: string;
  active?: boolean;
  className?: string;
  indicator?: "dot" | "line";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  labelFormatter?: (label: string) => string;
};


const CustomTooltip: React.FC<CustomTooltipProps> = ({
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
}) => {
  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "bg-white border p-2 rounded shadow text-sm",
        className
      )}
    >
      {!hideLabel && (
        <p className="font-medium mb-1">
          {labelFormatter ? labelFormatter(label ?? "") : label}
        </p>
      )}
      {!hideIndicator &&
        payload.map((item, index) => (
          <p key={index} className="flex items-center gap-1">
            {indicator === "dot" && (
              <span
                className="inline-block size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span>
              {item.name}: {item.value}
            </span>
          </p>
        ))}
    </div>
  );
};


const CustomLegend: React.FC<CustomLegendProps> = ({
  payload,
  verticalAlign,
  className,
}) => {
  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 flex-wrap text-xs",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload.map((item, index) => (
        <span
          key={index}
          className="flex items-center gap-1"
        >
          <span
            className="inline-block size-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          {item.value}
        </span>
      ))}
    </div>
  );
};


const ExampleChart = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <RechartsTooltip content={<CustomTooltip />} />
        <RechartsLegend content={<CustomLegend />} />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { ExampleChart, CustomTooltip, CustomLegend };
