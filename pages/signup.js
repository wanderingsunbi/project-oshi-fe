export default function SignUp () {
  return (
  <>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>회원가입 하기</button>
    </form>
  </>
  );
}