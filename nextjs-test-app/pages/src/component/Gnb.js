import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
export default function Gnb() {
  const { activeItem } = "home";
  const router = useRouter();
  const golink = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={golink} />
      <Menu.Item
        name="about"
        active={activeItem === "messages"}
        onClick={golink}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={golink}
      />
    </Menu>
  );
}
