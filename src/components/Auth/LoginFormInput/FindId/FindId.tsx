import Modal from "@/components/Modals/Modal/Modal";
import useModal from "@/hooks/useModal";
import { useState } from "react";

import EmailVerificationInputChildren from "../../EmailVerificationInputChildren/EmailVerificationInputChildren";
import PhoneVerificationInputChildren from "../../PhoneVerificationInputChildren/PhoneVerificationInputChildren";
import styles from "./FindId.module.scss";

export default function FindId() {
  const { showModal, modalOpen, modalClose } = useModal();
  const [authMethod, setAuthMethod] = useState("phone");

  //TODO: 아이디 찾기 res에 따른 Result 모달 띄우기

  return (
    <>
      {showModal && (
        <Modal title="아이디 찾기" onClose={modalClose}>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.methods}>
                <span
                  className={`${styles.method} ${authMethod === "phone" && styles.selected}`}
                  onClick={() => setAuthMethod("phone")}
                >
                  휴대폰 인증
                </span>
                <span
                  className={`${styles.method} ${authMethod === "email" && styles.selected}`}
                  onClick={() => setAuthMethod("email")}
                >
                  이메일 인증
                </span>
              </div>
              <span className={styles.info}>
                {authMethod === "phone"
                  ? "cocoa talk 가입시 등록한 휴대폰 번호와 입력한 휴대폰 번호가 일치해야 인증번호를 받을 수 있습니다."
                  : "cocoa talk 가입시 등록한 이메일과 입력한 이메일이 일치해야 인증번호를 받을 수 있습니다."}
              </span>
            </div>
            <div className={styles.bottom}>
              {authMethod === "phone" ? (
                <PhoneVerificationInputChildren />
              ) : (
                <EmailVerificationInputChildren />
              )}
            </div>
          </div>
        </Modal>
      )}
      <span className={styles.span} onClick={modalOpen}>
        아이디 찾기
      </span>
    </>
  );
}
