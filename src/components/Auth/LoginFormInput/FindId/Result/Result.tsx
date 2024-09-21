import { Bang } from "@/constants/icon";
import { PATH } from "@/constants/path";
import { useRouter } from "next/navigation";

import styles from "./Result.module.scss";

interface ResultProps {
  id?: string | null;
  onClose: () => void;
}

//TODO: 비밀번호 찾기 클릭 시 비밀번호 찾기 모달 띄우기

export default function Result({ id, onClose }: ResultProps) {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      {id ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.info}>
              고객님의 아이디는 다음과 같습니다.
            </span>
            <span className={styles.id}>{id}</span>
          </div>
          <span className={styles.link}>비밀번호가 기억나지 않으세요?</span>
        </div>
      ) : (
        <div className={styles.null}>
          <div className={styles.icon}>
            <Bang />
          </div>
          <div className={styles.detailWrapper}>
            <div className={styles.title}>
              고객님의 정보와 일치하는 아이디가 없습니다.
            </div>
            <span className={styles.span}>
              지금 바로 cocoa talk의 회원이 되어보세요!
            </span>
          </div>
        </div>
      )}
      <button
        className={styles.button}
        onClick={() => {
          if (id) {
            onClose();
          } else {
            router.push(PATH.REGISTER);
          }
        }}
      >
        {id ? "로그인" : "회원 가입"}
      </button>
    </div>
  );
}
