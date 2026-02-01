import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/auth/login", { email, password });
      router.push("/");
    } catch (err) {
      const message =
        err.response?.data?.message || "이메일 또는 비밀번호를 확인해주세요.";
      alert(message);
    } finally {
      setIsLoading(false);
    }
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
          name="email"
          className={styles.input}
          type="email"
          placeholder="이메일을 입력해 주세요"
          autoComplete="email"
          disabled={isLoading}
        />

        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.pwWrap}>
          <input
            id="password"
            name="password"
            className={styles.input}
            type={showPw ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="current-password"
            disabled={isLoading}
          />
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setShowPw((v) => !v)}
            aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
            title={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            <img
              src={showPw ? "/invisible.svg" : "/visible.svg"}
              alt="비밀번호 표시 토글"
              width={20}
              height={20}
            />
          </button>
        </div>

          <button className={styles.loginBtn} type="submit" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
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