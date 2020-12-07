import React from 'react';
import {View, Text} from 'react-native';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default function TestRechart() {
  const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: '700'}}>Line chart</Text>
      <View
        style={{borderBottomColor: 'black', borderWidth: 1, marginBottom: 15}}>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </View>
      <Text style={{fontSize: 18, fontWeight: '700'}}>
        Line chart with X and Y axis
      </Text>
      <View style={{borderBottomColor: 'black', borderWidth: 1}}>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </View>
    </View>
  );
}
