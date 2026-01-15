export default function Login () {
  return (
  <>
    <Head>
      <title>로그인 :: 최애의 포토</title>
    </Head>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>로그인 하기</button>
    </form>
  </>
  );
}