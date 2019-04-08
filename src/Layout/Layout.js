/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../Styles/reset.css";
import "../Styles/grid.css";
import "../Styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer />
      </>
    )}
  />
);

const Main = styled.main`
  overflow-x: hidden;
  width: 100%;
`;

export default Layout;
