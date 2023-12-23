import { MessageType } from "@/types/assistant.type";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import MarkdownDisplay from "./MarkdownDisplay";

const Messages = ({ data, lastMessageRef }: MessageType) => {
  const messageReverse = [...data].reverse();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data]);

  return (
    <div className="w-full container mx-auto">
      {messageReverse?.length > 0 &&
        messageReverse &&
        messageReverse?.map((value: any, index: number) => {
          if (value.role === "assistant") {
            return (
              <div
                key={value?.id}
                ref={index === data.length - 1 ? lastMessageRef : null}
                className="chat chat-start chat-assistant-pre"
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img5.pic.in.th/file/secure-sv1/DALLE-2023-12-19-18.13.18---A-stylish-cartoon-style-profile-picture-of-a-white-AI-robot-showing-just-the-head-and-shoulders.-The-robot-features-a-sleek-minimalist-design-with.th.png"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {value?.role}
                  <time className="text-xs opacity-50">
                    {" " + dayjs(value?.created_at).format("HH:mm:ss")}
                  </time>
                </div>
                <div className="chat-bubble max-w-lg lg:max-w-3xl">
                  <MarkdownDisplay content={value?.content[0]?.text?.value} />
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            );
          } else {
            return (
              <div key={value?.id} className="chat chat-end chat-assistant-pre">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img5.pic.in.th/file/secure-sv1/DALLE-2023-12-19-18.10.28---A-cool-cartoon-style-profile-picture-showing-the-head-and-shoulders-of-a-character.-The-character-is-depicted-with-striking-memorable-features-incl.th.png"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {value?.role}
                  <time className="text-xs opacity-50">
                    {" " + dayjs(value?.created_at).format("HH:mm:ss")}
                  </time>
                </div>
                <div className="chat-bubble max-w-lg lg:max-w-3xl chat-assistant-pre">
                  {value?.content[0]?.text?.value}
                </div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Messages;
