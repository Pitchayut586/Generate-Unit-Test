import React, { useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import clipboardCopy from "clipboard-copy";
import { CodeBlockType, MarkdownDisplayProps } from "@/types/assistant.type";

const CodeBlock = ({ language, value }: CodeBlockType) => {
  const handleCopy = useCallback(() => {
    clipboardCopy(value);
    alert("coppy success")
  }, [value]);

  return (
    <div style={{ position: "relative" }}>
      <button
      className="btn btn-ghost"
        onClick={handleCopy}
        style={{ position: "absolute", right: "10px", top: "10px" }}
      >
        Copy
      </button>
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownDisplay = ({ content }: MarkdownDisplayProps) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            // Render as a syntax-highlighted code block
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            // Render as inline code
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownDisplay;
