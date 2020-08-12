import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <LineChart width={800} height={600} data={formattedData}>
      <Line type="linear" dot={{stroke:'black',fill:'white'}} legendType="star" dataKey="value" stroke="#ff3399" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 10" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Legend  width={100} wrapperStyle={{ top: 150, right: 20, backgroundColor: '#aa9999', border: '1px solid black', borderRadius: 5, lineHeight: '40px' }} />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
