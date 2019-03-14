import React from "react"
import {graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
// import SEO from "../components/seo"
 import Img from "gatsby-image" 
import PortfolioPreview from "../components/portfoliopreview"
import BlogPreview from "../components/blog-preview"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
   // const portfolioImages = this.props.data.allContentfulPortfolio.edges
    const blog = this.props.data.allContentfulPortfolio.edges;
    const coverphoto = this.props.data.coverImg
    return (
      <Layout>
        <Helmet title={siteTitle} />   
        <div className="herosection">
        <div id="#top" className="cover animated">
         <Img
                title="Cover image"
                alt="Air Balloon in Nature"   
                fluid={coverphoto.childImageSharp.fluid} 
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",      
                
                }}
              />
               <div className="overlay" />
                  <div className="center">
                      <h1 className="name">
                        <b>HI, I'M Ammature Photographer</b>
                      </h1>
                      <h5 className="greetings">Life through a Lens.!!!</h5>
                   </div>

                 </div>
        </div>
        <div className="indexpage">
          <div className="right-section blog-post pad-70">
            <div className="container">
              <div className="col-md-10 offset-md-1 portfolio-blk-container text-center ">
               <h2 className="section-title">My Some Random Clicks</h2>
                <div className="row">
              
                  <ul className="gallery">
                      {blog.map(({ node }) => {
                        return (
                          <li className="gallery-item"  key={node.id}>
                            <PortfolioPreview portfolio={node} />
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
              <div className="pad-70">
              <h2 className="portfolio-title text-center  section-title">Recent Blogs</h2>
                <div className="col-md-10 offset-md-1 ">            
                  <div className="row">                  
                    {blog.map(({ node }) => {
                      return (
                        <div key={node.id} className="col-md-6" >
                            <BlogPreview blog={node} />
                        </div>
                      
                      )
                    })}
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </div>

      
       
      </Layout>
    )

  }

}

export default IndexPage

export const query = graphql`
query allImgsQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  coverImg: file(relativePath: { eq: "Green-mountains.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  } 
  allContentfulPortfolio{
    edges{
      node{
        id
        blogTitle
        blogShortDesc
        slug
        blogImage{
          file{
            url
          }
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_noBase64
         }
        }
      }
    }
  }
}
`


