import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }
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
    </Menu>
  );
}
