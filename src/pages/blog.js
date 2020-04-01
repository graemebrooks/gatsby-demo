import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						html
						excerpt
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on</p>
			<ol>
				{data.allMarkdownRemark.edges.map((post) => {
					return (
						<li>
							<h2>{post.node.frontmatter.title}</h2>
							<p>{post.node.frontmatter.date}</p>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;
