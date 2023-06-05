import { List } from "antd";
import { MessageListProps } from "./MessageListProps";
import style from "./messageList.module.scss";
import { useEffect, useRef } from "react";

export const MessageList = ({ messages }: MessageListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={{ height: "500px", overflow: "scroll" }} ref={listRef}>
      <List
        className={style.message__list}
        header={<div className={style.message__list_title}>All messages</div>}
        dataSource={messages}
        size={"small"}
        renderItem={message => (
          <List.Item className={style.message_item}>
            <List.Item.Meta
              title={
                <div className={style.message_item_title}>
                  New message from: {message.sender}
                </div>
              }
              description={
                <div className={style.message_item_content}>
                  <div className={style.message_item_text}>
                    Subject: {message.subject}
                  </div>
                  <div className={style.message_item_text}>
                    Text: {message.content}
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
