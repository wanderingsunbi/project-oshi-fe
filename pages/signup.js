import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import api from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.nickname.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (!email || !name || !password || !passwordConfirm) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/users", { email, name, password });
      alert("회원가입이 완료되었습니다.");
      router.push("/login");
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message;
      if (status === 409) {
        alert("이미 사용 중인 이메일입니다.");
      } else {
        alert(message || "회원가입에 실패했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>회원가입 :: 최애의 포토</title>
      </Head>

      <div className={styles.bg}>
        <div className={styles.card}>
          <Link href="/" className={styles.logoLink}>
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

            <label className={styles.label} htmlFor="nickname">
              닉네임
            </label>
            <input
              id="nickname"
              name="nickname"
              className={styles.input}
              type="text"
              placeholder="닉네임을 입력해 주세요"
              autoComplete="nickname"
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
                autoComplete="new-password"
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

            <label className={styles.label} htmlFor="passwordConfirm">
              비밀번호 확인
            </label>
            <div className={styles.pwWrap}>
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                className={styles.input}
                type={showPw2 ? "text" : "password"}
                placeholder="비밀번호를 다시 입력해 주세요"
                autoComplete="new-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPw2((v) => !v)}
                aria-label={showPw2 ? "비밀번호 숨기기" : "비밀번호 보기"}
                title={showPw2 ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                <img
                  src={showPw2 ? "/invisible.svg" : "/visible.svg"}
                  alt="비밀번호 확인 표시 토글"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <button className={styles.loginBtn} type="submit" disabled={isLoading}>
              {isLoading ? "가입 중..." : "가입하기"}
            </button>
          </form>

          <p className={styles.footer}>
            이미 최애의포토 회원이신가요?{" "}
            <Link className={styles.signupLink} href="/login">
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}