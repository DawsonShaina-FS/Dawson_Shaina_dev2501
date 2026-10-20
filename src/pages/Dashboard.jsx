
import { useState, useEffect } from "react";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import EngagementChart from "../components/EngagementChart";
import FollowersChart from "../components/FollowersChart";
import PostsChart from "../components/PostsChart";

// styling the dashboard title.
const Title = styled.h1`
  color: #49378b;
  margin-top: 0;
`;

// orders the charts side by side in a row
const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 25px;

  // Stack charts on smaller screens.
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;


/// Style the cards that hold each chart.
const ChartCard = styled.section`
  background: white;
  padding: 20px;
  border-radius: 12px;
  min-width: 0;
  border: 1px solid #e5e0f5;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);

  h2 {
    color: #49378b;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;


// styles the refresh button.
const Button = styled.button`
  background: #725ac1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    background: #49378b;
  }
`;

// the example data for weekly engagement.
const initialEngagement = [
    { day: "Mon", likes: 25 },
    { day: "Tue", likes: 40 },
    { day: "Wed", likes: 35 },
    { day: "Thu", likes: 60 },
    { day: "Fri", likes: 75 }
];

// the example data for follower growth.
const initialFollowers = [
    { day: "Mon", followers: 100 },
    { day: "Tue", followers: 120 },
    { day: "Wed", followers: 145 },
    { day: "Thu", followers: 170 },
    { day: "Fri", followers: 200 }
];

// the example data for post categories.
const initialPosts = [
    { name: "Photos", value: 45 },
    { name: "Videos", value: 30 },
    { name: "Text", value: 25 }
];


function Dashboard() {

    // this is storing the chart data using React's useState hook.
    const [engagement, setEngagement] = useState(initialEngagement);
    const [followers, setFollowers] = useState(initialFollowers);
    const [posts, setPosts] = useState(initialPosts);
    const [lastUpdated, setLastUpdated] = useState("Not refreshed yet");

    // updating the browser title when the upon load
    useEffect(() => {
        document.title = "Dashboard | Connect";
    }, []);

    // updating the example data when the refresh button is clicked
    const refreshData = () => {
        setEngagement((previous) =>
            previous.map((item) => ({
                ...item,
                likes: item.likes + Math.floor(Math.random() * 15) + 1
            }))
        );

        setFollowers((previous) =>
            previous.map((item) => ({
                ...item,
                followers: item.followers + Math.floor(Math.random() * 10) + 1
            }))
        );

        setPosts((previous) =>
            previous.map((item) => ({
                ...item,
                value: item.value + Math.floor(Math.random() * 5) + 1
            }))
        );

        setLastUpdated(new Date().toLocaleTimeString());
    };

    // shows the dashboard and chart components
    return (
        <PageLayout>
            <Title>My Dashboard</Title>
            <p>Welcome back! Here's an overview of your Connect activity.</p>

            <Button onClick={refreshData}>
                Refresh Dashboard
            </Button>

            <p aria-live="polite">
                Last refreshed: {lastUpdated}
            </p>

            <ChartGrid>
                <ChartCard>
                    <h2>Weekly Engagement</h2>
                    <EngagementChart data={engagement} />
                </ChartCard>

                <ChartCard>
                    <h2>Follower Growth</h2>
                    <FollowersChart data={followers} />
                </ChartCard>

                <ChartCard>
                    <h2>Post Categories</h2>
                    <PostsChart data={posts} />
                </ChartCard>
            </ChartGrid>
        </PageLayout>
    );
}

// exporting the dashboard to use in app,jsx
export default Dashboard;
