
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
  {name: 'Available', value: 800}, 
  {name: 'Damaged', value: 200},
  {name: 'Returned', value: 100}],               
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
const
 stockData = [
  {name: 'Jan', total_Products: 4000, amt: 2400},
  {name: 'Feb', total_Products: 3000 , amt: 2210},
  {name: 'Mar', total_Products: 2000,  amt: 2290},
  {name: 'Apr', total_Products: 2780,  amt: 2000},
  {name: 'May', total_Products: 1890,  amt: 2181},
  {name: 'Jun', total_Products: 2390,  amt: 2500},
  {name: 'Jul', total_Products: 3490,  amt: 2100},
  {name: 'Aug', total_Products: 4000, amt: 2400},
  {name: 'Sep', total_Products: 3000 , amt: 2210},
  {name: 'Oct', total_Products: 2000,  amt: 2290},
  {name: 'Nov', total_Products: 2780,  amt: 2000},
  {name: 'Dec', total_Products: 1890,  amt: 2181}
],

productsData = [
  {name: 'Jan', LG_Tv: 4000,Eva_Wine:2345,Dell_Lpt:1234,Ice_Crm:5322,Bvrge:3421,Snck:3932, Refridg:2345 , amt: 2400},
  {name: 'Feb', LG_Tv: 3000,Eva_Wine:1123,Dell_Lpt:4212,Ice_Crm:1234,Bvrge:3245,Snck:1568, Refridg:1345 , amt: 2210},
  {name: 'Mar', LG_Tv: 2000,Eva_Wine:1234,Dell_Lpt:1343,Ice_Crm:5643,Bvrge:2456,Snck:1965, Refridg:5678 ,  amt: 2290},
  {name: 'Apr', LG_Tv: 2780,Eva_Wine:4321,Dell_Lpt:2343,Ice_Crm:3213,Bvrge:2134,Snck:2579, Refridg:1234 ,  amt: 2000},
  {name: 'May', LG_Tv: 1890,Eva_Wine:2341,Dell_Lpt:2342,Ice_Crm:3468,Bvrge:4234,Snck:2896, Refridg:6785 ,  amt: 2181},
  {name: 'Jun', LG_Tv: 2390,Eva_Wine:1234,Dell_Lpt:2345,Ice_Crm:4455,Bvrge:5323,Snck:2135, Refridg:2345 ,  amt: 2500},
  {name: 'Jul', LG_Tv: 3490,Eva_Wine:1234,Dell_Lpt:2567,Ice_Crm:4532,Bvrge:2345,Snck:3532, Refridg:1324 ,  amt: 2100},
  {name: 'Aug', LG_Tv: 4000,Eva_Wine:2345,Dell_Lpt:3785,Ice_Crm:1234,Bvrge:3453,Snck:2455, Refridg:3421 , amt: 2400},
  {name: 'Sep', LG_Tv: 3000,Eva_Wine:3214,Dell_Lpt:3421,Ice_Crm:3256,Bvrge:3452,Snck:3522, Refridg:2132 , amt: 2210},
  {name: 'Oct', LG_Tv: 2000,Eva_Wine:2341,Dell_Lpt:1356,Ice_Crm:3562,Bvrge:3452,Snck:3453, Refridg:2431 ,  amt: 2290},
  {name: 'Nov', LG_Tv: 2780,Eva_Wine:1223,Dell_Lpt:1245,Ice_Crm:5743,Bvrge:1345,Snck:3455, Refridg:3214 ,  amt: 2000},
  {name: 'Dec', LG_Tv: 1890,Eva_Wine:1234,Dell_Lpt:4567,Ice_Crm:5678,Bvrge:2144,Snck:5321, Refridg:4321 ,  amt: 2181}
],

salesData = [
  {name: 'Jan', Cash: 4000,Cheque:2345,POS:1234,Credit:5322, amt: 2400},
  {name: 'Feb', Cash: 3000,Cheque:1123,POS:4212,Credit:1234, amt: 2210},
  {name: 'Mar', Cash: 2000,Cheque:1234,POS:1343,Credit:5643,  amt: 2290},
  {name: 'Apr', Cash: 2780,Cheque:4321,POS:2343,Credit:3213,  amt: 2000},
  {name: 'May', Cash: 1890,Cheque:2341,POS:2342,Credit:3468,  amt: 2181},
  {name: 'Jun', Cash: 2390,Cheque:1234,POS:2345,Credit:4455,  amt: 2500},
  {name: 'Jul', Cash: 3490,Cheque:1234,POS:2567,Credit:4532,  amt: 2100},
  {name: 'Aug', Cash: 4000,Cheque:2345,POS:3785,Credit:1234, amt: 2400},
  {name: 'Sep', Cash: 3000,Cheque:3214,POS:3421,Credit:3256, amt: 2210},
  {name: 'Oct', Cash: 2000,Cheque:2341,POS:1356,Credit:3562,  amt: 2290},
  {name: 'Nov', Cash: 2780,Cheque:1223,POS:1245,Credit:5743,  amt: 2000},
  {name: 'Dec', Cash: 1890,Cheque:1234,POS:4567,Credit:5678,  amt: 2181}
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
    indexLabel: "{label}: {y} pcs",
    toolTipContent: "{label}: <strong>{y}%</strong>",		
    startAngle: -90,
    dataPoints: [
      { y: 20, label: "Chibuike" },
      { y: 24, label: "Chidera" },
      { y: 20, label: "Mac-Anthony" },
      { y: 14, label: "Andrew" },
      { y: 12, label: "Shalom" },	
    ]
  }]
};

export default class Charts extends React.Component {
  render() {
    
    return (
      <div className="wrapper">
      {/* Stock BarchartChart */}
        <div className="box stock-out">
        <h1>Stock Available</h1>
        <BarChart 
            width={barChartWidth} 
            height={barChartHeight} 
            data={stockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            <Bar dataKey="total_Products" fill="#82ca9d" />
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
          	pieDatas.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]}/>)
          }
        </Pie>
        
      </PieChart>

        </div>

        {/* Products Barchart */}
        <div className="box products-out">
        <h1>Products Available</h1>
           <BarChart 
            width={barChartWidth} 
            height={barChartHeight} 
            data={productsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={-10} />
            <Bar dataKey="LG_Tv" stackId="b" fill="#8884d8" />
            <Bar dataKey="Eva_Wine" stackId="b"  fill="#82ca9d" />
            <Bar dataKey="Dell_Lpt" stackId="b" fill="#FF00FF" />
            <Bar dataKey="Ice_Crm" stackId="b" fill="#FF8042" />
            <Bar dataKey="Bvrge" stackId="b"  fill="#FFBB28" />
            <Bar dataKey="Snacks" stackId="b" fill="#00C49F" />
            <Bar dataKey="Refridg." stackId="b" fill="#0088FE" />
            </BarChart>
        </div>

        {/* Piechart */}
        <div className="box products-in">
        <h1>Available Products percentage</h1>
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
          {/* Sales Barchart */}
        <div className="box staff-senior">
        <h1>Sales</h1>
        <BarChart 
            width={barChartWidth} 
            height={barChartHeight} 
            data={salesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            <Bar dataKey="Cash" stackId="b" fill="#8884d8" />
            <Bar dataKey="Cheque" stackId="b"  fill="#82ca9d" />
            <Bar dataKey="POS" stackId="b" fill="#FF00FF" />
            <Bar dataKey="Credit" stackId="b" fill="#FF8042" />
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