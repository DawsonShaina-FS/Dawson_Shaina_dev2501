
import { useEffect, useState } from "react";
import styled from "styled-components";

// this is the main profile
const Container = styled.main`
  padding: 30px;
  background: #f5f6fa;
  min-height: 100vh;
`;

// card
const ProfileCard = styled.section`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

const Heading = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  background: #f7f8fc;
  padding: 15px;
  border-radius: 10px;
`;

const Label = styled.p`
  font-size: 13px;
  color: #777;
  margin: 0 0 5px;
`;

const Value = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  overflow-wrap: anywhere;
`;

const RefreshButton = styled.button`
  background: #6c63ff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  margin-top: 25px;
  cursor: pointer;

  &:hover {
    background: #554be0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// showing the users info from the api
const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // fetching the user data using async/await
    const fetchUser = async (signal) => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://randomuser.me/api/", {
                signal,
            });

            if (!response.ok) {
                throw new Error("Unable to load profile.");
            }

            const data = await response.json();
            setUser(data.results[0]);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            if (!signal?.aborted) {
                setLoading(false);
            }
        }
    };

    // this is loading the profile when it first opens
    useEffect(() => {
        const controller = new AbortController();

        // getting the user info from api
        const loadProfile = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/", {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Unable to load profile.");
                }

                const data = await response.json();

                // updating the profile with the api info
                setUser(data.results[0]);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("Something went wrong. Please try again.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        loadProfile();

        // stop request if the component closes
        return () => controller.abort();
    }, []);


    return (
        <Container>
            <ProfileCard>
                <Heading>User Profile</Heading>

                {loading && <p>Loading profile...</p>}
                {error && <p role="alert">{error}</p>}

                {user && (
                    <>
                        <ProfileImage
                            src={user.picture.large}
                            alt={`${user.name.first} ${user.name.last}`}
                        />

                        <InfoGrid>
                            <Info>
                                <Label>First Name</Label>
                                <Value>{user.name.first}</Value>
                            </Info>

                            <Info>
                                <Label>Last Name</Label>
                                <Value>{user.name.last}</Value>
                            </Info>

                            <Info>
                                <Label>Street</Label>
                                <Value>
                                    {user.location.street.number} {user.location.street.name}
                                </Value>
                            </Info>

                            <Info>
                                <Label>City</Label>
                                <Value>{user.location.city}</Value>
                            </Info>

                            <Info>
                                <Label>State</Label>
                                <Value>{user.location.state}</Value>
                            </Info>

                            <Info>
                                <Label>Postcode</Label>
                                <Value>{user.location.postcode}</Value>
                            </Info>

                            <Info>
                                <Label>Username</Label>
                                <Value>{user.login.username}</Value>
                            </Info>

                            <Info>
                                <Label>Password</Label>
                                <Value>{user.login.password}</Value>
                            </Info>

                            <Info>
                                <Label>Phone</Label>
                                <Value>{user.phone}</Value>
                            </Info>
                        </InfoGrid>
                    </>
                )}

                <RefreshButton
                    type="button"
                    onClick={() => fetchUser()}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Generate New Profile"}
                </RefreshButton>
            </ProfileCard>
        </Container>
    );
};

export default Profile;
