"use client";

import LoginFormInput from "@/components/Auth/LoginFormInput/LoginFormInput";
import { Cocoa } from "@/constants/icon";
import { PATH } from "@/constants/path";
import { useRouter } from "next/navigation";

import styles from "./Login.module.scss";

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Cocoa />
          <h1 className={styles.title}>로그인</h1>
        </div>
        <LoginFormInput />
        <div className={styles.bottom}>
          <span className={styles.span}>계정이 없으신가요?</span>
          <span
            className={`${styles.span} ${styles.link}`}
            onClick={() => router.push(PATH.REGISTER)}
          >
            무료로 가입하고 cocoa talk을 즐겨 보세요!
          </span>
        </div>
      </div>
    </div>
  );
}
