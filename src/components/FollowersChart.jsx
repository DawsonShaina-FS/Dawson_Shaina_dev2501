
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

// shows follower growth using line chart
function FollowersChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="followers" fill="#725ac1" />
            </BarChart>
        </ResponsiveContainer>
    );
}

// exporting to use on dashboard
export default FollowersChart;
