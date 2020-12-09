import React from 'react';
import {PieChart, Pie, Sector} from 'recharts';
import {useState} from 'react';

const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200},
];

const renderActiveShape = () => {
  const RADIAN = Math.PI / 180;
  const cx = 0.32;
  const cy = 0.45;
  const midAngle = 0.5;
  const innerRadius = 0.6;
  const outerRadius = 0.7;
  const startAngle = 0.25;
  const endAngle = 0.56;
  const fill = 'red';
  const payload = {
    name: 'pero',
  };
  const percent = 22;
  const value = 15;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartx = () => {
  const [initialState, SetInitialState] = useState({activeIndex: 0});

  const onPieEnter = (data: any, index: any) => {
    SetInitialState((prevState) => {
      return {
        ...prevState,
        prevState: (prevState.activeIndex = index),
      };
    });
  };

  return (
    <PieChart width={800} height={400}>
      <Pie
        activeIndex={initialState.activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={300}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

export default PieChartx;
