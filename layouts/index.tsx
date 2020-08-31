import Layout from '../components/layout';

export default function BlogPostLayout(frontMatter: FrontMatter) {
  return ({ children: content }: { children: JSX.Element }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    return (
      <Layout>
        <h1>{frontMatter.title}</h1>
        {content}
      </Layout>
    );
  };
}
