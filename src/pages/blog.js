import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import BlogStyles from './blog.module.scss';

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
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on</p>
			<ol className={BlogStyles.posts}>
				{data.allMarkdownRemark.edges.map((post) => {
					return (
						<li className={BlogStyles.post}>
							<Link to={`/blog/${post.node.fields.slug}`}>
								<h2>{post.node.frontmatter.title}</h2>
								<p>{post.node.frontmatter.date}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;
