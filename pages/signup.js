export default function SignUp () {
  return (
  <>
    <Head>
      <title>회원가입 :: 최애의 포토</title>
    </Head>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>회원가입 하기</button>
    </form>
  </>
  );
}