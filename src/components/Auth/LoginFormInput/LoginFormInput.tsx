"use client";

import { EyeOffIcon, FileReadIcon } from "@/constants/icon";
import { LOGIN } from "@/constants/message/user";
import usePostUserLoginMutation from "@/hooks/query/user/usePostUserLoginMutation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import FindId from "./FindId/FindId";
import FindPassword from "./FindPassword/FindPassword";
import styles from "./LoginFormInput.module.scss";

interface LoginInfo {
  id: string;
  password: string;
  rememberId: boolean;
}

export default function LoginFormInput() {
  const { loginUser } = usePostUserLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLDivElement>(null);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInfo>({
    defaultValues: {
      id: "",
      password: "",
      rememberId: false,
    },
    mode: "onChange",
  });

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      passwordRef.current &&
      !passwordRef.current.contains(event.target as Node)
    ) {
      setIsPwFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const onSubmit: SubmitHandler<LoginInfo> = (data) => {
    loginUser(data);
  };

  return (
    <>
      <div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>{LOGIN.ID.LABEL}</div>
              <input
                className={`${styles.input} ${errors.id && styles.error}`}
                id="id"
                type="text"
                {...register("id", {
                  required: LOGIN.ID.REQUIRED,
                })}
                placeholder={LOGIN.ID.PLACEHOLDER}
              />

              {errors.id && (
                <div className={styles.errorMessage}>{errors.id.message}</div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>{LOGIN.PASSWORD.LABEL}</div>
              <div
                ref={passwordRef}
                onClick={() => setIsPwFocused(true)}
                className={`${styles.pwInputWrapper} ${isPwFocused && styles.focused} ${errors.password && styles.error}`}
              >
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: LOGIN.PASSWORD.REQUIRED,
                  })}
                  placeholder={LOGIN.PASSWORD.PLACEHOLDER}
                  className={styles.pwInput}
                />
                <div
                  className={styles.show}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <FileReadIcon />}
                </div>
              </div>
              {errors.password && (
                <div className={styles.errorMessage}>
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className={styles.setting}>
            <div className={styles.checkboxInputWrapper}>
              <input
                className={styles.checkbox}
                type="checkbox"
                {...register("rememberId")}
              />
              <span className={styles.span}>아이디 기억하기</span>
            </div>
            <div className={styles.finds}>
              <FindId />
              <FindPassword />
            </div>
          </div>
          <button
            className={`${styles.button} ${isValid && styles.active}`}
            type="submit"
          >
            로그인
          </button>
        </form>
      </div>
    </>
  );
}
