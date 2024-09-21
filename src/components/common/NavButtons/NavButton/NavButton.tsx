import {
  BellIcon,
  FriendsIcon,
  HomeIcon,
  RoomsIcon,
  ThreadIcon,
} from "@/constants/icon";

import styles from "./NavButton.module.scss";

interface NavButtonProps {
  type: "home" | "friends" | "thread" | "rooms" | "bell";
  isSelected?: boolean;
  onClick?: () => void;
}

const iconMap = {
  home: HomeIcon,
  friends: FriendsIcon,
  thread: ThreadIcon,
  rooms: RoomsIcon,
  bell: BellIcon,
};

export default function NavButton({
  type,
  isSelected = false,
  onClick,
}: NavButtonProps) {
  const IconComponent = iconMap[type];

  return (
    <div className={styles.container} onClick={onClick}>
      <IconComponent fill={isSelected ? "#0F1B2A" : "#A8B1BD"} />
    </div>
  );
}
