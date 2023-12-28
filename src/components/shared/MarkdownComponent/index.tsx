import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import CodeSnippet from './CodeSnippet';
import ImageWithCaption from './ImageWithCaption';

interface MarkdownComponentProps {
  markdown: string;
}
export default function MarkdownComponent({
  markdown,
}: MarkdownComponentProps) {
  return (
    <ReactMarkdown
      className="markdown"
      components={{
        pre: CodeSnippet,
        // img: ImageWithCaption,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  );
}
