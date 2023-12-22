export type MessageType = {
    data: any;
    lastMessageRef: React.RefObject<HTMLDivElement>;
};

export type CodeBlockType = {
    language: string;
    value: string;
};

export type MarkdownDisplayProps = {
    content: string;
};
