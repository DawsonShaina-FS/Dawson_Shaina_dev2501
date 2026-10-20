
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

// shows weekly engagment using a line chart
function EngagementChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="likes"
                    stroke="#725ac1"
                    strokeWidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

// exporting to use on dashboard
export default EngagementChart;
