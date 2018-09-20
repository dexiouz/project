
import React, { Component } from 'react';

import {PieChart, Pie,Cell, Legend, Tooltip,ResponsiveContainer, } from 'recharts';

import CanvasJSReact from './canvasjs.react';
import '../styles/Charts.css'

const CanvasJS = CanvasJSReact.CanvasJS,
     CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class CanvasCharts extends React.Component {
  render() {

    // first canvas chart
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			// theme: "light2", // "light1", "dark1", "dark2"
			title:{
        text: "Stock out"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}pcs",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Airfare" },
					{ y: 24, label: "Food & Drinks" },
					{ y: 20, label: "Accomodation" },
					{ y: 14, label: "Transportation" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
				]
			}]
    },

    //second canvas chart
     option2 = {
			// theme: "dark2",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: "Top Categories of New Year's Resolution"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Health" },
					{ y: 22, label: "Finance" },
					{ y: 15, label: "Education" },
					{ y: 19, label: "Career" },
					{ y: 5, label: "Family" },
					{ y: 7, label: "Real Estate" }
				]
			}]
		},

    // pie

    pieDatas = [
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

    return (
      <div className="wrapper">
      {/* BarchartChart */}
        <div className="box stock-out">
        <h1>Stock Out</h1>
        <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
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
        <CanvasJSChart options = {option2}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>

        {/* Piechart */}
        <div className="box products-in">
        <h1>Products In</h1>
        
        </div>
          {/* BArchart */}
        <div className="box staff-senior">
        <h1>Sales</h1>
       
        </div>

        {/* Piechart */}
        <div className="box staff-junior">
       <h1>Suppliers</h1>
        
        </div>


      </div>
      
    
     
    )
  }
}