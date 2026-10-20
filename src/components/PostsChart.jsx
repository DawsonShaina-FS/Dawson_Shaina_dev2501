
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

// colors used for the different categories
const COLORS = ["#725ac1", "#be185d", "#38a3db"];

// shows the different type of posts using a pie chart
function PostsChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={entry.name}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}

// exporting to use on dashboard
export default PostsChart;
