import { CircleCheckIcon } from "@/constants/icon";
import { REGEX } from "@/constants/regex";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./PhoneVerificationInputChildren.module.scss";

interface PhoneInfo {
  name: string;
  phone: string;
  certificationNumber: string;
}

export default function PhoneVerificationInputChildren() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<PhoneInfo>({
    defaultValues: {
      name: "",
      phone: "",
      certificationNumber: "",
    },
    mode: "onChange",
  });
  const isDone = false; //TODO: 인증번호 확인 response 바인딩
  const phoneValue = watch("phone");
  const certificationNumber = watch("certificationNumber");

  const onSubmit: SubmitHandler<PhoneInfo> = (data) => {
    console.log(data); //TODO: input에 대한 정보가 서버에 전송되어야 함. api 필요
  };

  //TODO: 인증번호가 올바르지 않을 경우 '다음'으로 넘어가지 않게 => 인증번호 확인 api 필요
  //TODO: 인증번호 확인 완료 시 '다음'버튼 active 설정

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <div className={styles.inputWrapper}>
          <span className={`${styles.span} ${styles.inputLabel}`}>이름</span>
          <input
            className={styles.input}
            placeholder="이름을 입력하세요."
            {...register("name", {
              required: "이름을 입력해 주세요.",
              pattern: {
                value: REGEX.NAME,
                message: "입력하신 정보가 올바르지 않습니다.",
              },
            })}
          />
          {errors.name && (
            <div className={styles.errorMessage}>{errors.name.message}</div>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <span className={`${styles.span} ${styles.inputLabel}`}>
            휴대폰번호
          </span>
          <div className={styles.inputLine}>
            <input
              className={styles.input}
              {...register("phone", {
                required: "휴대폰번호를 입력해 주세요.",
                pattern: {
                  value: REGEX.PHONE_NUMBER,
                  message: "입력하신 정보가 올바르지 않습니다.",
                },
              })}
              placeholder="휴대폰번호를 - 없이 입력하세요."
            />
            <button
              className={`${styles.button} ${
                !errors.phone && phoneValue ? styles.active : ""
              }`}
              type="button"
            >
              인증요청
            </button>
          </div>
          {errors.phone && (
            <div className={styles.errorMessage}>{errors.phone.message}</div>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <span className={`${styles.span} ${styles.inputLabel}`}>
            인증번호
          </span>
          <div className={styles.inputLine}>
            <input
              className={styles.input}
              placeholder="인증번호를 입력하세요."
              {...register("certificationNumber", {
                required: "인증번호를 입력해 주세요.",
                pattern: {
                  value: REGEX.NUMBER,
                  message: "인증번호가 올바르지 않습니다.",
                },
              })}
            />
            <button
              className={`${styles.button} ${
                !errors.certificationNumber && certificationNumber
                  ? styles.active
                  : ""
              }`}
              type="button"
            >
              확인
            </button>
          </div>
          {errors.certificationNumber && (
            <div className={styles.errorMessage}>
              {errors.certificationNumber.message}
            </div>
          )}
          {isDone ? (
            <div className={styles.completeMessageWrapper}>
              <div className={styles.icon}>
                <CircleCheckIcon fill="#12B76A" />
              </div>
              <span className={styles.completeMessage}>
                본인 인증이 완료되었습니다.
              </span>
            </div>
          ) : (
            <span className={styles.help}>인증번호가 오지 않나요?</span>
          )}
        </div>
        <button
          className={`${styles.nextBtn} ${isValid && styles.active}`}
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </button>
      </div>
    </div>
  );
}
