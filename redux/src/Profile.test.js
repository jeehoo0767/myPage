import React from "react";
import { render } from "react-testing-library";
import Profile from "./Components/Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="velopert" name="김민준" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="velopert" name="김민준" />);
    utils.getByText("Jihu Park"); // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(박지후)"); // (김민준) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/박/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
