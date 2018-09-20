
import React, { Component } from 'react';
import '../styles/Charts.css'
//import recharts
import {PieChart, Pie,Cell, Legend, Tooltip,ResponsiveContainer, } from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';

//import canvasCharts
import CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS,
     CanvasJSChart = CanvasJSReact.CanvasJSChart;





// PieCHart
//1st
const 
 pieDatas = [
  {name: 'Available', value: 800*100}, 
  {name: 'Spoilt', value: 600*100}],               
//2nd
 pieData2 = [{name: 'LG Television', value: 800}, 
  {name: 'Eva wine', value: 600},
  {name: 'Dell laptop', value: 400}, 
  {name: 'Ice cream', value: 500},   
  {name: 'Beverages', value: 700}
],
//3rd
 pieData3 = [
   {name: 'Supplier Chibuike', value: 800}, 
   {name: 'Supplier Chidera', value: 600},
   {name: 'Supplier George', value: 400}, 
   {name: 'Supplier Ezekiel', value: 700}
  ],
COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF','#800080'],

pieChartWidth=400,
pieChartHeight=400;



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

// Barchart
const barData1 = [
  {name: 'Jan', uv: 4000, amt: 2400},
  {name: 'Feb', uv: 3000 , amt: 2210},
  {name: 'Mar', uv: 2000,  amt: 2290},
  {name: 'Apr', uv: 2780,  amt: 2000},
  {name: 'May', uv: 1890,  amt: 2181},
  {name: 'Jun', uv: 2390,  amt: 2500},
  {name: 'Jul', uv: 3490,  amt: 2100},
  {name: 'Aug', uv: 4000, amt: 2400},
  {name: 'Sep', uv: 3000 , amt: 2210},
  {name: 'Oct', uv: 2000,  amt: 2290},
  {name: 'Nov', uv: 2780,  amt: 2000},
  {name: 'Dec', uv: 1890,  amt: 2181}
],
 barData2 = [
  {name: 'Jan', uv: 4000, amt: 2400},
  {name: 'Feb', uv: 3000 , amt: 2210},
  {name: 'Mar', uv: 2000,  amt: 2290},
  {name: 'Apr', uv: 2780,  amt: 2000},
  {name: 'May', uv: 1890,  amt: 2181},
  {name: 'Jun', uv: 2390,  amt: 2500},
  {name: 'Jul', uv: 3490,  amt: 2100},
  {name: 'Aug', uv: 4000, amt: 2400},
  {name: 'Sep', uv: 3000 , amt: 2210},
  {name: 'Oct', uv: 2000,  amt: 2290},
  {name: 'Nov', uv: 2780,  amt: 2000},
  {name: 'Dec', uv: 1890,  amt: 2181}
],
 barData3 = [
  {name: 'Jan', uv: 4000, amt: 2400},
  {name: 'Feb', uv: 3000 , amt: 2210},
  {name: 'Mar', uv: 2000,  amt: 2290},
  {name: 'Apr', uv: 2780,  amt: 2000},
  {name: 'May', uv: 1890,  amt: 2181},
  {name: 'Jun', uv: 2390,  amt: 2500},
  {name: 'Jul', uv: 3490,  amt: 2100},
  {name: 'Aug', uv: 4000, amt: 2400},
  {name: 'Sep', uv: 3000 , amt: 2210},
  {name: 'Oct', uv: 2000,  amt: 2290},
  {name: 'Nov', uv: 2780,  amt: 2000},
  {name: 'Dec', uv: 1890,  amt: 2181}
],
barChartWidth=500,
barChartHeight= 400,

//canvascharts
 options = {
  animationEnabled: true,
  exportEnabled: true,
  color: 'gray',
theme: "light2", // "light1", "dark1", "dark2"
  // title:{
  //   text: "Stock out"
  // },
  data: [{
    type: "pie",
    showInLegend: true,
		legendText: "{label}",
    indexLabel: "{label}: {y}pcs",
    toolTipContent: "{label}: <strong>{y}%</strong>",		
    startAngle: -90,
    dataPoints: [
      { y: 20, label: "Airfare" },
      { y: 24, label: "Food & Drinks" },
      { y: 20, label: "Accomodation" },
      { y: 14, label: "Transportation" },
      { y: 12, label: "Activities" },	
    ]
  }]
};

export default class Charts extends React.Component {
  render() {
    
    return (
      <div className="wrapper">
      {/* BarchartChart */}
        <div className="box stock-out">
        <h1>Stock Out</h1>
          <BarChart 
            width={barChartWidth} 
            height={barChartHeight} 
            data={barData1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* PieChart */}
        <div className="box stock-in">
        <h1>Stock In</h1>
        <PieChart width={pieChartWidth} height={pieChartHeight} onMouseEnter={this.onPieEnter}>
        <Legend verticalAlign="top" height={-30} />
        <Pie
          
          data={pieDatas} 
          cx={200} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={155} 
          fill="#8884d8"
        >
        	{
          	pieDatas.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          
        </Pie>
        
      </PieChart>

        </div>

        {/* Barchart */}
        <div className="box products-out">
        <h1>Products Out</h1>
        <BarChart width={barChartWidth} height={barChartHeight} data={barData2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Piechart */}
        <div className="box products-in">
        <h1>Products In</h1>
        <PieChart width={pieChartWidth} height={pieChartHeight} onMouseEnter={this.onPieEnter}>
        <Legend verticalAlign="top" height={-30} />
        <Pie
          
          data={pieData2} 
          cx={200} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={155} 
          fill="#8884d8"
        >
        	{
          	pieData2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          
        </Pie>
        
      </PieChart> 
        </div>
          {/* BArchart */}
        <div className="box staff-senior">
        <h1>Sales</h1>
        <BarChart width={barChartWidth} height={barChartHeight} data={barData3}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Piechart */}
        <div className="box staff-junior">
       <h1>Suppliers</h1>
        <CanvasJSChart options = {options} 
				
			/> 
        {/* <PieChart width={pieChartWidth} height={pieChartHeight} onMouseEnter={this.onPieEnter}>
        <Legend verticalAlign="top" height={-30} />
        <Pie
          
          data={pieData3} 
          cx={200} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={155} 
          fill="#8884d8"
        >
        	{
          	pieData3.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          
        </Pie>
        
      </PieChart>  */}
      
        </div>
        

      </div>
      
    
     
    )
  }
}