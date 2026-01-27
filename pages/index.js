import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 내비게이션 바 */}
      <nav className={styles.navBar}>
        <Link href="/">
          <Image src="/logo.png" alt="로고" width={140} height={25} />
        </Link>
        <div className={styles.linkGroup}>
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      </nav>
      {/* 바디 */}
      <main className={styles.main}>
        {/* 히어로 */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroTop}>
              <Image className={styles.heroMiniLogo} src="/logo.png" alt="로고" width={140} height={25} />

              {/* (기존 텍스트 유지) */}
              <h2 className={styles.heroTitle}>
                구하기 어려웠던
                <br />
                <span className={styles.hlYellow}>나의 최애</span>가 여기에!
              </h2>

              <Link className={styles.ctaYellow} href="/market">
                최애 찾으러 가기
              </Link>
            </div>

            {/* 중앙 목업/이미지 자리 */}
            <div className={styles.heroStage}>
              <div className={styles.heroDevice}>DEVICE IMG</div>

              {/* 좌우 이미지 자리(겹쳐지는 카드 느낌) */}
              <div className={`${styles.heroSideImg} ${styles.left1}`}>IMG</div>
              <div className={`${styles.heroSideImg} ${styles.left2}`}>IMG</div>
              <div className={`${styles.heroSideImg} ${styles.right1}`}>IMG</div>
              <div className={`${styles.heroSideImg} ${styles.right2}`}>IMG</div>
            </div>
          </div>
        </section>

        {/* 카드1 */}
        <section className={`${styles.featureSection} ${styles.featureGreen}`}>
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>
                포인트로 <span className={styles.hlYellow}>안전하게</span> 거래하세요
              </h3>

              {/* (기존 텍스트 유지) */}
              <p className={styles.featureDesc}>
                내 포토카드를 포인트로 팔고, 원하는 포토카드를
                <br />
                포인트로 안전하게 교환하세요
              </p>
            </div>

            <div className={styles.featureVisual}>
              {/* 우측 이미지/목업 자리 */}
              <div className={styles.mockDevice}>
                <Image src="/img2.png" alt="featureImg1" width={1068} height={518}/>
              </div>
            </div>
          </div>
        </section>

        {/* 카드2 */}
        <section className={`${styles.featureSection} ${styles.featureBlue}`}>
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>
                알림으로 보다 <span className={styles.hlBlue}>빨라진 거래</span>
              </h3>

              {/* (기존 텍스트 유지) */}
              <p className={styles.featureDesc}>
                교환 제안부터 판매 완료까지,
                <br />
                실시간 알림으로 놓치지 마세요.
              </p>
            </div>

            <div className={styles.featureVisual}>
              {/* 말풍선 자리 */}
              <div className={styles.chatBubble}>채팅/알림</div>

              {/* 우측 이미지/목업 자리 */}
              <div className={styles.mockPanel}>NOTI PANEL</div>
            </div>
          </div>
        </section>

        {/* 카드3 */}
        <section className={`${styles.featureSection} ${styles.featureYellow}`}>
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>
                랜덤 상자로 <span className={styles.hlYellow}>포인트 받자!</span> 🎉
              </h3>

              {/* (기존 텍스트 유지) */}
              <p className={styles.featureDesc}>
                한 시간마다 주어지는 랜덤 상자를 열고,
                <br />
                포인트를 획득하세요
              </p>
            </div>

            <div className={styles.featureVisual}>
              {/* 모달/기프트 자리 */}
              <div className={styles.giftModal}>RANDOM BOX MODAL</div>
              <div className={styles.giftDeco}>🎁</div>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className={styles.footer}>
          <div className={styles.footerCard}>PHOTO CARD</div>
          <p className={styles.footerText}>나의 최애를 지금 찾아보세요!</p>
          <Link className={styles.ctaYellow} href="/market">
            최애 찾으러 가기
          </Link>
        </footer>
      </main>
    </>
  );
}
