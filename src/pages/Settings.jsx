
import styled from "styled-components";
import PageLayout from "../components/PageLayout";

// styling the card for account settings
const Card = styled.section`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

function Settings() {
    return (
        // using the shared layout for header and nav
        <PageLayout>
            <Card>

                <h1>Settings</h1>


                <h2>Account Settings</h2>
                <p>Manage your Connect account preferences.</p>
            </Card>
        </PageLayout>
    );
}

// exporting for it to be used in app.jsx
export default Settings;
