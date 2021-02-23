import { Header } from "semantic-ui-react";
import Gnb from "../component/Gnb";
export default function Top() {
  return (
    <div>
      <img src="/images/profile.png" alt="logo" />
      <Header as="h1">Jihu Park</Header>
      <Gnb />
    </div>
  );
}
