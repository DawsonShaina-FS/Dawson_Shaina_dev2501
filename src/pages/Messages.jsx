
import styled from "styled-components";
import PageLayout from "../components/PageLayout";

// styling the card that holds the messages content
const Card = styled.section`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

// functional compoenent for the mssages page
function Messages() {
    return (
        // utilizing th shared layout to show the header and nav
        <PageLayout>
            <Card>
                <h1>Messages</h1>

                {/* showing message information */}
                <p>Welcome to your messages!</p>
                <p>You have no new messages right now.</p>
            </Card>
        </PageLayout>
    );
}

// exporting this so it can be used in app.jsx 
export default Messages;
