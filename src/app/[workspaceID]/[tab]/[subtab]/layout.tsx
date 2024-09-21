import ContentHeader from "@/components/chat/ContentHeader/ContentHeader";
import ChatInput from "@/components/common/ChatInput/ChatInput";

import styles from "./layout.module.scss";

export default function SubTabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <ContentHeader />
      <div className={styles.content}>
        <div className={styles.chats}>{children}</div>
        <div className={styles.input}>
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
