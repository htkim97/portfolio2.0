"use client";

import AlertModal from "@/components/Modals/AlertModal/AlertModal";
import { REGISTER } from "@/constants/message/user";
import { REGEX } from "@/constants/regex";
import useModal from "@/hooks/useModal";
import { setRegisterUserData } from "@/redux/features/registerUserSlice";
import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import EmailConfirmChildren from "./EmailConfirmChildren/EmailConfirmChildren";
import FullText from "./FullText/FullText";
import styles from "./RegisterFormInput.module.scss";

interface RegisterInfo {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  consents: {
    all: boolean;
    terms: boolean;
    privacyPolicy: boolean;
  };
}

export default function RegisterFormInput() {
  const { showModal, modalOpen, modalClose } = useModal();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<RegisterInfo>({
    defaultValues: {
      id: "",
      email: "",
      password: "",
      confirmPassword: "",
      consents: {
        all: false,
        terms: false,
        privacyPolicy: false,
      },
    },
    mode: "onChange",
  });
  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");
  const consents = watch("consents");

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setValue("consents.terms", isChecked);
    setValue("consents.privacyPolicy", isChecked);
    setValue("consents.all", isChecked);
  };

  useEffect(() => {
    if (consents.terms && consents.privacyPolicy) {
      setValue("consents.all", true);
    } else {
      setValue("consents.all", false);
    }
  }, [consents.terms, consents.privacyPolicy, setValue]);

  const onSubmit: SubmitHandler<RegisterInfo> = (data) => {
    dispatch(setRegisterUserData(data));
    console.log(isValid);
  };

  return (
    <>
      {showModal && (
        <AlertModal
          title="정보 확인 메일이 고객님의 이메일로 발송되었습니다."
          color="green"
          onClose={modalClose}
        >
          <EmailConfirmChildren onClose={modalClose} />
        </AlertModal>
      )}
      <div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>{REGISTER.ID.LABEL}</div>
              <input
                className={`${styles.input} ${errors.id && styles.error}`}
                id="id"
                type="text"
                {...register("id", {
                  required: REGISTER.ID.REQUIRED,
                  pattern: {
                    value: REGEX.ID,
                    message: REGISTER.ID.PATTERN,
                  },
                })}
                placeholder={REGISTER.ID.PLACEHOLDER}
              />
              {errors.id && (
                <div className={styles.errorMessage}>{errors.id.message}</div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>{REGISTER.EMAIL.LABEL}</div>
              <input
                className={`${styles.input} ${errors.email && styles.error}`}
                id="email"
                type="email"
                {...register("email", {
                  required: REGISTER.EMAIL.REQUIRED,
                  pattern: {
                    value: REGEX.EMAIL,
                    message: REGISTER.EMAIL.PATTERN,
                  },
                })}
                placeholder={REGISTER.EMAIL.PLACEHOLDER}
              />
              {errors.email && (
                <div className={styles.errorMessage}>
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>{REGISTER.PASSWORD.LABEL}</div>
              <input
                className={`${styles.input} ${errors.password && styles.error}`}
                id="password"
                type="password"
                {...register("password", {
                  required: REGISTER.PASSWORD.REQUIRED,
                  pattern: {
                    value: REGEX.PASSWORD,
                    message: REGISTER.PASSWORD.PATTERN,
                  },
                })}
                placeholder={REGISTER.PASSWORD.PLACEHOLDER}
              />
              {errors.password && (
                <div className={styles.errorMessage}>
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.title}>
                {REGISTER.CONFIRM_PASSWORD.LABEL}
              </div>
              <input
                className={`${styles.input} ${errors.confirmPassword && styles.error}`}
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: REGISTER.CONFIRM_PASSWORD.REQUIRED,
                  validate: (value) =>
                    value === passwordRef.current ||
                    REGISTER.CONFIRM_PASSWORD.VALIDATE,
                })}
                placeholder={REGISTER.CONFIRM_PASSWORD.PLACEHOLDER}
              />
              {errors.confirmPassword && (
                <div className={styles.errorMessage}>
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>
          <div className={styles.consents}>
            <div className={styles.checkboxWrapper}>
              <div className={styles.checkboxInputWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  {...register("consents.all")}
                  onChange={handleAllChecked}
                />
                <span className={`${styles.span} ${styles.bold}`}>
                  {REGISTER.CONSENT.ALL_ACCEPT}
                </span>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.checkboxLine}>
              <div className={styles.checkboxWrapper}>
                <div className={styles.checkboxInputWrapper}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    {...register("consents.terms", {
                      required: REGISTER.CONSENT.TERMS.REQUIRED,
                    })}
                  />
                  <span className={`${styles.span} ${styles.light}`}>
                    {REGISTER.CONSENT.TERMS.TEXT}
                  </span>
                </div>
                <FullText
                  label="이용약관"
                  onConfirm={() => setValue("consents.terms", true)}
                />
              </div>
              {errors.consents?.terms && (
                <span className={styles.errorMessage}>
                  {errors.consents.terms.message}
                </span>
              )}
            </div>
            <div className={styles.checkboxLine}>
              <div className={styles.checkboxWrapper}>
                <div className={styles.checkboxInputWrapper}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    {...register("consents.privacyPolicy", {
                      required: REGISTER.CONSENT.PRIVACY_POLICY.REQUIRED,
                    })}
                  />
                  <span className={`${styles.span} ${styles.light}`}>
                    {REGISTER.CONSENT.PRIVACY_POLICY.TEXT}
                  </span>
                </div>
                <FullText
                  label="개인정보 처리방침"
                  onConfirm={() => setValue("consents.privacyPolicy", true)}
                />
              </div>
              {errors.consents?.privacyPolicy && (
                <span className={styles.errorMessage}>
                  {errors.consents.privacyPolicy.message}
                </span>
              )}
            </div>
          </div>
          <button
            className={`${styles.button} ${isValid && styles.active}`}
            type="submit"
            onClick={() => {
              if (isValid) {
                modalOpen();
              }
            }}
          >
            다음
          </button>
        </form>
      </div>
    </>
  );
}
