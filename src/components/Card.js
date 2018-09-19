import React, { Component } from 'react';
import {PieChart, Pie, Legend, Tooltip} from 'recharts';
// import ReactChartkick, {  PieChart } from 'react-chartkick'
// import Chart from 'chart.js'
// ReactChartkick.addAdapter(Chart);
export default class Charts extends React.Component {
  render() {
    const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
    return (
      <div style={{ display: 'flex', justifyContent: 'row', margin: 30 }}>
        {/* <PieChart data={[["Blueberry", 44], ["Strawberry", 23],["Blueberry", 34], ["Strawberry", 29]]} /> */}



 <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
       </PieChart>
      </div>
    )
  }
}










import React, { Component } from 'react';
import {PieChart, Pie,Cell, Legend, Tooltip} from 'recharts';
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Charts extends React.Component {
  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          
        </Pie>
        <Legend verticalAlign="top" height={100}/>
      </PieChart>
    )
  }
}