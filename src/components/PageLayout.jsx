// creating this shared layout component to reduce repeating code and so the ages have consistent styling. 
// 

import styled from "styled-components";
import Header from "./header";
import Navigation from "./navigation";

const Page = styled.div`
  min-height: 100vh;
  background: #f1edff;
  color: #333;
`;

const Layout = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 30px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

const Sidebar = styled.aside`
  background: white;
  padding: 25px;
  border-radius: 12px;
  align-self: start;
`;

const Content = styled.main`
  min-width: 0;
`;

function PageLayout({ children }) {
    return (
        <Page>
            <Header logo="Connect" searchText="Search..." />

            <Layout>
                <Sidebar>
                    <Navigation />
                </Sidebar>

                <Content>{children}</Content>
            </Layout>
        </Page>
    );
}

export default PageLayout;