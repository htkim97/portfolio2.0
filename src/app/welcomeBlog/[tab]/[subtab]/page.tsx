import MessageLayout from "@/components/chat/MessageLayout/MessageLayout";
import FileDropView from "@/components/common/FileDropView/FileDropView";
import Notification from "@/components/common/NotificationLine/NotificationLine";
import React from "react";

export default function SubTapPage({ params }: { params: { subtab: string } }) {
  return (
    <div>
      <h1>{params.subtab}번방</h1>
      <Notification label={"oldDate"} />
      <MessageLayout
        profileImage={""}
        username={"김현태"}
        userId={"gugu123"}
        chatContent={"코코아톡"}
      />
      <FileDropView />
    </div>
  );
}
