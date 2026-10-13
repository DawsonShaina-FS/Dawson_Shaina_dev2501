
import { Component } from "react";

// import components
import Header from "./components/header";
import Navigation from "./components/navigation";
import AdCard from "./components/adCard";

// import styled components and react icons
import styled from "styled-components";
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";

// import images
import avatar from "./assets/avatar.PNG";
import ad1 from "./assets/ad1.JPG";
import ad2 from "./assets/ad2.JPG";

// colors for the app
const palette = {
  purple: "#725ac1",
  darkPurple: "#49378b",
  lavender: "#f1edff",
  background: "#f5f5f5",
  white: "#ffffff",
  dark: "#333333",
  gray: "#777777",
  pink: "#be185d"
};

// styling for the app using styled components
const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.$background};
  color: #333;
  transition: background 0.5s ease;
`;

const Layout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr) 260px;
  gap: 30px;
  align-items: start;

  @media (max-width: 950px) {
    grid-template-columns: 180px minmax(0, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
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
  min-width: 0;
`;

const PostForm = styled.form`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  h2 {
    margin-top: 0;
    color: ${palette.darkPurple};
  }

  label {
    display: block;
    font-weight: bold;
    margin-top: 12px;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    margin: 8px 0 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font: inherit;
  }

  textarea {
    min-height: 90px;
    resize: vertical;
  }

  button {
    padding: 10px 22px;
    border: none;
    border-radius: 5px;
    background: ${palette.purple};
    color: white;
    cursor: pointer;
    margin: 5px 10px 5px 0;
  }

  .error {
    color: #b91c1c;
    font-weight: bold;
  }
`;

const Post = styled.article`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .post-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }

  .post-header h3 {
    margin: 0;
    color: ${palette.darkPurple};
  }

  .post-header p {
    margin: 5px 0 0;
    color: ${palette.gray};
    font-size: 13px;
  }

  .description {
    line-height: 1.6;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .post-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 15px;
    border: none;
    border-radius: 5px;
    background: ${palette.purple};
    color: white;
    cursor: pointer;
  }

  button.delete {
    background: ${palette.pink};
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
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

  @media (max-width: 950px) {
    grid-column: 1 / -1;
    flex-direction: row;

    article {
      flex: 1;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

// main app class component
class App extends Component {
  constructor(props) {
    super(props);

    // stores the posts form information and colors in state
    this.state = {
      posts: [
        {
          id: 1,
          avatar: avatar,
          title: "My First Post",
          description:
            "Learning how to create reusable components with React."
        },
        {
          id: 2,
          avatar: avatar,
          title: "Welcome to Connect!",
          description:
            "Building my first CRUD application using React. Excited to keep learning!"
        }
      ],

      form: {
        avatar: "",
        title: "",
        description: ""
      },

      editingId: null,
      error: "",

      colors: {
        background: palette.background
      }
    };
  }

  // changes the background color after the page loads
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState((previousState) => ({
        colors: {
          ...previousState.colors,
          background: palette.lavender
        }
      }));
    }, 1500);
  }

  // clears the timer when the component is removed
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  // updates the form as the user types
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((previousState) => ({
      form: {
        ...previousState.form,
        [name]: value
      },
      error: ""
    }));
  };

  // create a new post and add it to the posts array
  addPost = (event) => {
    event.preventDefault();

    const { avatar: image, title, description } = this.state.form;

    if (!title.trim() || !description.trim()) {
      this.setState({
        error: "Please enter a title and description."
      });
      return;
    }

    const newPost = {
      id: Date.now() + Math.random(),
      avatar: image.trim() || avatar,
      title: title.trim(),
      description: description.trim()
    };

    this.setState((previousState) => ({
      posts: [...previousState.posts, newPost],
      form: {
        avatar: "",
        title: "",
        description: ""
      },
      error: ""
    }));
  };

  // find the post the user wants to edit
  editPost = (id) => {
    const selectedPost = this.state.posts.find(
      (post) => post.id === id
    );

    if (!selectedPost) return;

    this.setState({
      editingId: id,
      form: {
        avatar:
          selectedPost.avatar === avatar
            ? ""
            : selectedPost.avatar,
        title: selectedPost.title,
        description: selectedPost.description
      },
      error: ""
    });
  };

  // save the changes made to a post
  savePost = (event) => {
    event.preventDefault();

    const { avatar: image, title, description } = this.state.form;

    if (!title.trim() || !description.trim()) {
      this.setState({
        error: "Please enter a title and description."
      });
      return;
    }

    this.setState((previousState) => ({
      posts: previousState.posts.map((post) =>
        post.id === previousState.editingId
          ? {
            ...post,
            avatar: image.trim() || avatar,
            title: title.trim(),
            description: description.trim()
          }
          : post
      ),
      editingId: null,
      form: {
        avatar: "",
        title: "",
        description: ""
      },
      error: ""
    }));
  };

  // delete a post using filter
  deletePost = (id) => {
    this.setState((previousState) => ({
      posts: previousState.posts.filter(
        (post) => post.id !== id
      ),
      editingId:
        previousState.editingId === id
          ? null
          : previousState.editingId,
      form:
        previousState.editingId === id
          ? { avatar: "", title: "", description: "" }
          : previousState.form
    }));
  };

  // cancel editing and clear the form
  cancelEdit = () => {
    this.setState({
      editingId: null,
      form: {
        avatar: "",
        title: "",
        description: ""
      },
      error: ""
    });
  };

  // display the app and posts
  render() {
    const { posts, form, editingId, error, colors } = this.state;

    return (
      <Page $background={colors.background}>
        {/* header component */}
        <Header
          logo="Connect"
          searchText="Search..."
        />

        <Layout>
          <LeftSide>
            {/* navigation component */}
            <Navigation
              title="Menu"
              newsfeed="Newsfeed"
              messages="Messages"
              watch="Watch"
            />
          </LeftSide>

          <Feed>
            {/* form for adding and editing posts */}
            <PostForm
              onSubmit={
                editingId === null
                  ? this.addPost
                  : this.savePost
              }
            >
              <h2>
                {editingId === null
                  ? "Create a Post"
                  : "Edit Your Post"}
              </h2>

              <Avatar
                src={form.avatar || avatar}
                alt="Your profile avatar"
              />

              <label htmlFor="avatar">Avatar Image URL</label>
              <input
                id="avatar"
                type="text"
                name="avatar"
                placeholder="Optional avatar image URL"
                value={form.avatar}
                onChange={this.handleChange}
              />

              <label htmlFor="title">Post Title</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter a post title"
                value={form.title}
                onChange={this.handleChange}
              />

              <label htmlFor="description">
                Post Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="What's on your mind?"
                value={form.description}
                onChange={this.handleChange}
              />

              {error && (
                <p className="error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit">
                {editingId === null
                  ? "Add Post"
                  : "Save Changes"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={this.cancelEdit}
                >
                  Cancel
                </button>
              )}
            </PostForm>

            <h2>Newsfeed ({posts.length} Posts)</h2>

            {/* display posts using map */}
            {posts.map((post) => (
              <Post key={post.id}>
                <div className="post-header">
                  {post.avatar ? (
                    <Avatar
                      src={post.avatar}
                      alt="Post author avatar"
                    />
                  ) : (
                    <FaUserCircle
                      size={60}
                      color={palette.purple}
                    />
                  )}

                  <div>
                    <h3>{post.title}</h3>
                    <p>Connect Community</p>
                  </div>
                </div>

                <p className="description">
                  {post.description}
                </p>

                {/* edit and delete buttons */}
                <div className="post-actions">
                  <button
                    type="button"
                    onClick={() => this.editPost(post.id)}
                  >
                    <FaEdit /> Edit
                  </button>

                  <button
                    type="button"
                    className="delete"
                    onClick={() => this.deletePost(post.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </Post>
            ))}

            {posts.length === 0 && (
              <Post>
                <p>No posts yet. Create your first post!</p>
              </Post>
            )}
          </Feed>

          <Ads>
            {/* advertisement components */}
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
}

export default App;
