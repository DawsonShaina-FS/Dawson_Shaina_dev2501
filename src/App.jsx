// Import components
import Header from "./components/header";
import Navigation from "./components/navigation";
import Form from "./components/form";
import PostCard from "./components/postCard";
import AdCard from "./components/adCard";

import styled from "styled-components";

// Import images
import avatar from "./assets/avatar.PNG";
import ad1 from "./assets/ad1.JPG";
import ad2 from "./assets/ad2.JPG";

const Page = styled.div`
    min-height: 100vh;
    background: #f5f5f5;
    color: #333;
`;

const Layout = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px;
    display: grid;
    grid-template-columns: 200px 1fr 260px;
    gap: 30px;
    align-items: start;
`;

const LeftSide = styled.aside`
    background: white;
    padding: 25px;
    border-radius: 8px;
`;

const Feed = styled.main`
    display: flex;
    flex-direction: column;
    gap: 25px;

    form {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    form input,
    form textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
        margin: 8px 0 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    form textarea {
        min-height: 90px;
        resize: vertical;
    }

    form button {
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background: #725ac1;
        color: white;
        cursor: pointer;
    }

    article {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    article img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }

    article button {
        margin-right: 10px;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const Ads = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 25px;

    article {
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 6px;
    }

    h3 {
        margin-bottom: 5px;
    }

    p {
        color: #777;
    }
`;

function App() {
  return (
    <Page>
      <Header
        logo="Connect"
        searchText="Search..."
      />

      <Layout>
        <LeftSide>
          <Navigation
            title="Menu"
            newsfeed="Newsfeed"
            messages="Messages"
            watch="Watch"
          />
        </LeftSide>

        <Feed>
          <Form
            titleLabel="Post Title"
            titlePlaceholder="Enter a post title"
            descriptionLabel="Post Description"
            descriptionPlaceholder="What's on your mind?"
            buttonText="Add Post"
          />

          <PostCard
            avatar={avatar}
            avatarAlt="User profile"
            title="My First Post"
            description="Learning how to create reusable components with React."
          />
        </Feed>

        <Ads>
          <AdCard
            image={ad1}
            imageAlt="Creative advertisement"
            title="Creative Design"
            subtitle="Create something that stands out."
          />

          <AdCard
            image={ad2}
            imageAlt="Photography advertisement"
            title="Photography"
            subtitle="Capture moments worth remembering."
          />
        </Ads>
      </Layout>
    </Page>
  );
}

export default App;