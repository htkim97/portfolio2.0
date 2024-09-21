import RegisterFormInput from "@/components/Auth/RegisterFormInput/RegisterFormInput";
import { Cocoa, NextIcon } from "@/constants/icon";
import Link from "next/link";
import React from "react";

import styles from "./RegisterUser.module.scss";

export default function RegisterUser() {
  return (
    <>
      <div className={styles.view}>
        <div className={styles.container}>
          <div className={styles.top}>
            <Cocoa />
            <h1 className={styles.title}>회원가입</h1>
          </div>
          <RegisterFormInput />
        </div>
      </div>
    </>
  );
}
