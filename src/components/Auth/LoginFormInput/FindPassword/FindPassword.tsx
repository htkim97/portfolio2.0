import Modal from "@/components/Modals/Modal/Modal";
import { CircleCheckIcon } from "@/constants/icon";
import { REGEX } from "@/constants/regex";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./FindPassword.module.scss";

interface Form {
  email: string;
}

export default function FindPassword() {
  const { showModal, modalOpen, modalClose } = useModal();
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<Form>({ defaultValues: { email: "" }, mode: "onChange" });

  //TODO: 비밀번호 찾기 이메일 확인 누르면 비밀번호 재설정 띄우기

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    setEmailSent(true);
  };

  return (
    <>
      {showModal && (
        <Modal title="비밀번호 찾기" onClose={modalClose}>
          <div className={styles.container}>
            <div className={styles.info}>
              cocoa talk 가입시 등록한 이메일 주소를 입력해 주세요.
              <br />
              비밀번호 재설정 안내 메일을 발송해 드립니다.
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>이메일</div>
              <input
                className={`${styles.input} ${errors.email && styles.error}`}
                id="email"
                type="email"
                {...register("email", {
                  required: "이메일을 입력해 주세요.",
                  pattern: {
                    value: REGEX.EMAIL,
                    message: "이메일 형식이 올바르지 않습니다.",
                  },
                })}
                placeholder="이메일을 입력하세요."
              />
              {errors.email && (
                <div className={styles.errorMessage}>
                  {errors.email.message}
                </div>
              )}
              {emailSent && (
                <div className={styles.completeMessageWrapper}>
                  <div className={styles.icon}>
                    <CircleCheckIcon fill="#12B76A" />
                  </div>
                  <span className={styles.completeMessage}>
                    입력하신 이메일로 비밀번호 재설정 메일을 보냈습니다.
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className={`${styles.button} ${isValid && styles.active}`}
            >
              메일 발송
            </button>
          </div>
        </Modal>
      )}
      <span className={styles.span} onClick={modalOpen}>
        비밀번호 찾기
      </span>
    </>
  );
}
