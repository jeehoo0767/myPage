import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 박지후</title>
      </Head>
      Create-next-app !!! Create-next-app 으로 설치하면
      <br />
      1. 컴파일과 번들링이 자동으로 된다.
      <br />
      2. 차동 리프레쉬 기능으로 수정하면 화면이 바로 반영 된다.
      <br />
      3. 서버사이드 렌더링이 지원된다.
      <br />
      4. 스태틱 파일을 지원한다.
    </div>
  );
}
