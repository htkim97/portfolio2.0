import { REGEX } from "@/constants/regex";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./ResetPassword.module.scss";

interface Form {
  password: string;
  confirmPassword: string;
}

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Form>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    //TODO: 변경된 비밀번호 저장하기 api
    //TODO: 변경 완료 모달 띄우기 및 라우팅 처리
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.title}>비밀번호</div>
        <input
          className={`${styles.input} ${errors.password && styles.error}`}
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: REGEX.PASSWORD,
              message:
                "비밀번호는 영문/숫자/특수문자 포함 8~16자로 입력하셔야 합니다.",
            },
          })}
          placeholder="영문/숫자/특수문자 포함 8~16자"
        />
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.title}>비밀번호 재설정</div>
        <input
          className={`${styles.input} ${errors.confirmPassword && styles.error}`}
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "비밀번호를 확인해 주세요.",
            validate: (value) =>
              value === getValues("password") ||
              "입력한 비밀번호와 일치하지 않습니다.",
          })}
          placeholder="비밀번호를 한 번 더 입력하세요."
        />
        {errors.confirmPassword && (
          <div className={styles.errorMessage}>
            {errors.confirmPassword.message}
          </div>
        )}
      </div>
      <button
        className={`${styles.button} ${isValid && styles.active}`}
        onClick={handleSubmit(onSubmit)}
      >
        저장
      </button>
    </div>
  );
}
