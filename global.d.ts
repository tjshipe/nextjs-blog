declare module 'remark-html' {
  const html: any;
  export default html;
}

interface FrontMatter {
  title: string;
  summary: string;
  date: number;
  image: string;
  __resourcePath: string;
  // type additional properties according to
  // the front-matter you define
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}
