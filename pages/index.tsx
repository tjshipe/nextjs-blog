import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { frontMatter as blogPosts } from './blog/**/*.mdx';

function postSlug(resourcePath: string): string {
  return resourcePath.replace('blog/', '').replace('.mdx', '');
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I'm a full stack software developer sharing my experience with Rust,
          JavaScript, Typescript, React, Three.js, and more.
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogPosts.map((post) => (
            <h3 key={post.title}>
              <Link
                href="/blog/[id]"
                as={`/blog/${postSlug(post.__resourcePath)}`}
                key={post.title}
              >
                <a>{post.title}</a>
              </Link>
            </h3>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
