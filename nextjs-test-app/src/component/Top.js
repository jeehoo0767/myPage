import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: "20px" }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/profile.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">Jihu Park</Header>
      </div>
      <Gnb />
    </div>
  );
}
