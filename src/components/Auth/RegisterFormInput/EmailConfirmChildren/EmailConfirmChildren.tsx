import { CircleCheckIcon } from "@/constants/icon";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

import styles from "./EmailConfirmChildren.module.scss";

interface EmailConfirmChildrenProps {
  onClose: () => void;
}

export default function EmailConfirmChildren({
  onClose,
}: EmailConfirmChildrenProps) {
  const { email } = useSelector(
    (state: RootState) => state.registerUserReducer
  );

  return (
    <div className={styles.container}>
      <span className={styles.mail}>{email}</span>
      <div className={styles.resendWrapper}>
        <span className={styles.resendText}>메일을 받지 못하셨나요?</span>
        <span className={styles.resend}>재발송</span>
      </div>
      <div className={styles.info}>
        <span className={styles.span}>확인 메일을 받지 못하셨으면</span>
        <div className={styles.line}>
          <div className={styles.iconWrapper}>
            <CircleCheckIcon fill="#CDD3DD" />
          </div>
          <span className={`${styles.span} ${styles.detail}`}>
            이메일을 정확하게 입력하셨는지 확인해 주세요.
          </span>
          <span
            className={`${styles.span} ${styles.rewrite}`}
            onClick={onClose}
          >
            다시 입력
          </span>
        </div>
        <div className={styles.line}>
          <div className={styles.iconWrapper}>
            <CircleCheckIcon fill="#CDD3DD" />
          </div>
          <span className={`${styles.span} ${styles.detail}`}>
            스팸 메일함에 확인 메일이 있는지 확인해 주세요.
          </span>
        </div>
      </div>
    </div>
  );
}
