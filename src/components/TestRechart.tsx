import React from 'react';
import { View, Text } from 'react-native';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
  ComposedChart,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts';

export default function TestRechart() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around" }}>
      {/* Line Chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Line chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <LineChart width={730} height={250} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </View>
      </View>

      {/* Line Chart with X and Y axis */}
      <View>

        <Text style={{ fontSize: 18, fontWeight: '700' }}>Line chart with X and Y axis</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <LineChart width={730} height={250} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </View>
      </View>

      {/* Area chart 1 */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Area chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            syncId="testId">
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </View>
      </View>

      {/* Area chart 2 */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Area chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            syncId="testId">
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="55%" stopColor="#8884d8" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#FF0000" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </View>
      </View>

      {/* Bar chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Bar chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <Legend />
          </BarChart>
        </View>
      </View>

      {/* Composed chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Composed chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={10} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </View>
      </View>

      {/* Pie chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Pie chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <PieChart width={730} height={250}>
            <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={25} fill="#8884d8" label />
            <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#82ca9d" label />
          </PieChart>
        </View>
      </View>

      {/* Radar chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Radar chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <RadarChart outerRadius={100} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
            <Radar dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend layout='vertical' verticalAlign='middle' align="right" />
          </RadarChart>
        </View>
      </View>

      {/* Radial Bar chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Radial Bar chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={200}
            endAngle={-20}
          >
            <RadialBar label={{ position: 'insideStart' }} background dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
          </RadialBarChart>
        </View>
      </View>

      {/* Scatter chart */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Scatter chart</Text>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, marginBottom: 15, paddingRight: 30 }}>
          <ScatterChart width={730} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="uv" name="uv" unit="uv" />
            <YAxis dataKey="pv" name="pv" unit="pv" />
            <ZAxis dataKey="amt" range={[64, 144]} name="amt" unit="amt" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        </View>
      </View>
    </View>
  );
}
