'use client';

import { ClassAttributes, HTMLAttributes, useState } from 'react';
import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { BiCopy } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import { HiOutlineClipboard } from 'react-icons/hi';
import { classNames } from '@/utils/helper';

export default function CodeSnippet({
  children,
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps) {
  // Local State
  const [isCopy, setIsCopy] = useState(false);
  // Get Code Element inside of Pre Element
  const codeElement = (children as JSX.Element)?.props;

  const className = codeElement.className;

  const code = codeElement.children;
  const lanMatch = /language-(\w+)/.exec(className || '');
  const language = lanMatch?.[1];

  const filenameMatch = /file=([-\w.]+\.\w+)/.exec(className || '');
  const filename = filenameMatch?.[1];

  const handleCodeCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    });
  };

  if (!className) {
    return (
      <div className="group relative">
        <pre>
          <code className="m-4">{code}</code>
          <button
            onClick={handleCodeCopy}
            className={classNames(
              'absolute top-3 right-3 hidden group-hover:inline-flex items-center justify-center w-8 h-8 border rounded-lg',
              isCopy
                ? 'text-primary-400 border-neutral-400'
                : 'text-neutral-500 hover:text-neutral-600 border-neutral-400 hover:border-neutral-500'
            )}
          >
            {isCopy ? <IoMdCheckmark /> : <BiCopy />}
          </button>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between bg-gray-700 text-gray-200 text-sm rounded-t-lg px-2 py-1">
        <div className="flex items-center">
          <div className="flex items-center space-x-1 me-2">
            <span className="w-2.5 h-2.5 bg-primary-300 rounded-full" />
            <span className="w-2.5 h-2.5 bg-primary-500 rounded-full" />
            <span className="w-2.5 h-2.5 bg-primary-700 rounded-full" />
          </div>
          <span>{filename || language}</span>
        </div>
        <button
          onClick={handleCodeCopy}
          className={classNames(
            'flex items-center space-x-1 text-xs',
            isCopy ? 'text-primary-400' : 'hover:text-white'
          )}
        >
          <HiOutlineClipboard className="w-4 h-4" />
          <span>{isCopy ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <div className="rounded-b-lg overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={coldarkDark}
          customStyle={{ margin: 0, borderRadius: 0 }}
        >
          {String(code).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
