import { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function LoginPage () {
  const [showPw, setShowPw] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };


  return (
  <>
    <Head>
      <title>로그인 :: 최애의 포토</title>
    </Head>
    <div className={styles.bg}>
    <div className={styles.card}>
      <Link href="/">
        <Image src="/logo.png" alt="최애의 포토 로고" width={200} height={40} />
      </Link>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          placeholder="이메일을 입력해 주세요"
          autoComplete="email"
        />

        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.pwWrap}>
          <input
            id="password"
            className={styles.input}
            type={showPw ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="current-password"
          />
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setShowPw((v) => !v)}
            aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
            title={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            <img
              src={showPw ? "/invisible.svg" : "visible.svg"}
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>

          <button className={styles.loginBtn} type="submit">
            로그인
          </button>
        </form>

        <p className={styles.footer}>
          최애의 포토가 처음이신가요?{" "}
          <Link className={styles.signupLink} href="/signup">
            회원가입하기
          </Link>
        </p>
    </div>
    </div>
  </>
  );
}