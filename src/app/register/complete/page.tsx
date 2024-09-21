"use client";

import { Cocoa, NextIcon } from "@/constants/icon";
import { PATH } from "@/constants/path";
import { useRouter } from "next/navigation";

import styles from "./RegisterComplete.module.scss";

export default function RegisterComplete() {
  const router = useRouter();

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <Cocoa />
        <div className={styles.body}>
          <h1 className={styles.h1}>회원가입이 완료되었습니다.</h1>
          <span className={styles.span}>
            로그인 하신 후 cocoa talk에서 제공하는 다양한 기능을 경험해 보세요!
          </span>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            router.push(PATH.LOGIN);
          }}
        >
          로그인
        </button>
        <div
          className={styles.footer}
          onClick={() => {
            router.push(PATH.HOME);
          }}
        >
          <span className={styles.footerText}>메인화면으로 이동</span>
          <div className={styles.iconWrapper}>
            <NextIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
