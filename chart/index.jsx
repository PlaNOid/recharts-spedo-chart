/* eslint-disable */
import React from 'react';
import {
  Sector, PieChart, Pie, ResponsiveContainer, Cell,
} from 'recharts';

const SpeedChart = ({rate}) => {
  const width = 235;
  const height = 235;
  const color = '#6889bb';
  const pieData = [
    {
      value: 50,
      color: '#29C293',
    },
    {
      value: 50,
      color: '#FFAB2B',
    },
    {
      value: 100,
      color: '#FD5361',
    },
  ];

  const calculateChartValue = (rate) => {
    if (rate === 0) {
      return 100;
    } else {
      return 100 - rate;
    }
  };

  const chartValue = calculateChartValue(rate);

  const activeSectorIndex = pieData.map((cur, index, arr) => {
    const curMax = [...arr]
      .splice(0, index + 1)
      .reduce((a, b) => ({ value: a.value + b.value }))
      .value;
    return (chartValue > (curMax - cur.value)) && (chartValue <= curMax);
  }).findIndex(cur => cur);

  const sumValues = pieData
    .map(cur => cur.value)
    .reduce((a, b) => a + b);

  const arrowData = [
    { value: chartValue },
    { value: 0 },
    { value: sumValues - chartValue },
  ];

  const pieProps = {
    startAngle: -54,
    endAngle: 234,
    cx: '50%',
    cy: '50%',
  };

  const pieRadius = {
    innerRadius: 60,
    outerRadius: 100,
  };

  const Arrow = ({
    cx, cy, midAngle, outerRadius,
  }) => { // eslint-disable-line react/no-multi-comp
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.09) * cos;
    const my = cy + (outerRadius + width * 0.09) * sin;

    const aAngle = midAngle + 30;
    const bAngle = midAngle - 30;
    const sinA = Math.sin(-RADIAN * aAngle);
    const cosA = Math.cos(-RADIAN * aAngle);
    const sinB = Math.sin(-RADIAN * bAngle);
    const cosB = Math.cos(-RADIAN * bAngle);

    const arrowBaseRadius = 30;
    const ax = cx + arrowBaseRadius * cosA;
    const ay = cy + arrowBaseRadius * sinA;
    const bx = cx + arrowBaseRadius * cosB;
    const by = cy + arrowBaseRadius * sinB;

    return (
      <g>
        {/* scale marks */}
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * -36)},${cy + 90 * Math.sin(-RADIAN * -36)}L${cx + 100 * Math.cos(-RADIAN * -36)}, ${cy + 100 * Math.sin(-RADIAN * -36)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * -18)},${cy + 90 * Math.sin(-RADIAN * -18)}L${cx + 100 * Math.cos(-RADIAN * -18)}, ${cy + 100 * Math.sin(-RADIAN * -18)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(0)},${cy + 90 * Math.sin(0)}L${cx + 100 * Math.cos(0)}, ${cy + 100 * Math.sin(0)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 36)},${cy + 90 * Math.sin(-RADIAN * 36)}L${cx + 100 * Math.cos(-RADIAN * 36)}, ${cy + 100 * Math.sin(-RADIAN * 36)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 54)},${cy + 90 * Math.sin(-RADIAN * 54)}L${cx + 100 * Math.cos(-RADIAN * 54)}, ${cy + 100 * Math.sin(-RADIAN * 54)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 72)},${cy + 90 * Math.sin(-RADIAN * 72)}L${cx + 100 * Math.cos(-RADIAN * 72)}, ${cy + 100 * Math.sin(-RADIAN * 72)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 108)},${cy + 90 * Math.sin(-RADIAN * 108)}L${cx + 100 * Math.cos(-RADIAN * 108)}, ${cy + 100 * Math.sin(-RADIAN * 108)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 126)},${cy + 90 * Math.sin(-RADIAN * 126)}L${cx + 100 * Math.cos(-RADIAN * 126)}, ${cy + 100 * Math.sin(-RADIAN * 126)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 144)},${cy + 90 * Math.sin(-RADIAN * 144)}L${cx + 100 * Math.cos(-RADIAN * 144)}, ${cy + 100 * Math.sin(-RADIAN * 144)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 162)},${cy + 90 * Math.sin(-RADIAN * 162)}L${cx + 100 * Math.cos(-RADIAN * 162)}, ${cy + 100 * Math.sin(-RADIAN * 162)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 180)},${cy + 90 * Math.sin(-RADIAN * 180)}L${cx + 100 * Math.cos(-RADIAN * 180)}, ${cy + 100 * Math.sin(-RADIAN * 180)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 198)},${cy + 90 * Math.sin(-RADIAN * 198)}L${cx + 100 * Math.cos(-RADIAN * 198)}, ${cy + 100 * Math.sin(-RADIAN * 198)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 216)},${cy + 90 * Math.sin(-RADIAN * 216)}L${cx + 100 * Math.cos(-RADIAN * 216)}, ${cy + 100 * Math.sin(-RADIAN * 216)}`}
          strokeWidth={2} stroke='#fff' />
        <path
          d={`M${cx + 90 * Math.cos(-RADIAN * 234)},${cy + 90 * Math.sin(-RADIAN * 234)}L${cx + 100 * Math.cos(-RADIAN * 234)}, ${cy + 100 * Math.sin(-RADIAN * 234)}`}
          strokeWidth={2} stroke='#fff' />
        {/* arrow */}
        <polygon points={[ax, ay, bx, by, mx, my]} strokeWidth='1' stroke='#fff' fill='#fff' />
        <Sector cx={cx} cy={cy} startAngle={0} endAngle={360} innerRadius={60} outerRadius={62} fill='#dfe0eb' />
        <circle cx={cx} cy={cy} r={60} fill='#fff' stroke='none' />
        <text style={{ fontSize: 40 }} x={cx} y={cy} d={8} textAnchor='middle'>{rate}</text>
        <text style={{ fontSize: 15 }} x={cx} y={cy + 20} d={8} textAnchor='middle'>S</text>
        {/* <text style={{ fontSize: 15 }} x={cx - 110} y={cy - 30} d={8} textAnchor='middle'>-50</text> */}
        <text style={{ fontSize: 15 }} x={cx - 60} y={cy + 95} d={8} textAnchor='middle' fill='#8e95a0'>-100</text>
        {/* <text style={{ fontSize: 15 }} x={cx + 110} y={cy - 30} d={8} textAnchor='middle' fill='#8e95a0'>50</text> */}
        <text style={{ fontSize: 15 }} x={cx + 60} y={cy + 95} d={8} textAnchor='middle' fill='#8e95a0'>100</text>
        <text style={{ fontSize: 15 }} x={cx} y={cy-105} d={8} textAnchor='middle' fill='#8e95a0'>0</text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width='100%' height={height}>
      <PieChart>
        <Pie
          isAnimationActive={false}
          activeIndex={activeSectorIndex}
          data={pieData}
          fill={color}
          {...pieRadius}
          {...pieProps}>
          {
            pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieData[index].color} />
            ))
          }
        </Pie>
        <Pie
          isAnimationActive={false}
          stroke='none'
          activeIndex={1}
          activeShape={Arrow}
          data={arrowData}
          outerRadius={pieRadius.innerRadius}
          fill='none'
          {...pieProps} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SpeedChart;

