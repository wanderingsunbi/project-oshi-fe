import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import styles from "@/styles/Nav.module.css";

export default function Nav() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    api
      .get("/users/me")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setIsChecking(false));
  }, []);

  const handleLogout = async () => {
    try {
      await api.delete("/auth/logout");
      setUser(null);
      router.push("/");
    } catch (err) {
      setUser(null);
      router.push("/");
    }
  };

  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <Image src="/logo.png" alt="로고" width={140} height={25} />
      </Link>
      <div className={styles.linkGroup}>
        {isChecking ? (
          <span className={styles.loading}>확인 중...</span>
        ) : user ? (
          <>
            <span className={styles.userName}>안녕하세요, {user.name}님</span>
            <button
              type="button"
              className={styles.logoutBtn}
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link href="/login">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </div>
    </nav>
  );
}
