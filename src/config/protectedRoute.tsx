import { getItem } from "../utils/helperFunction";
import { UserDataInterFace } from "../interface";
import { setThemes } from "../utils";
import { JSX, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";

interface CardProps<T extends JSX.Element | string> {
  children: T;
}

export const ProtectedRoute = <T extends JSX.Element | string>(
  props: CardProps<T>
) => {
  const userData = getItem<UserDataInterFace>("userdata");
  const navigate = useNavigate();

  createEffect(() => {
    if (userData.username) {
      setThemes({ sidebar: true, header: true, blankScreen: true });
    }
  });

  if (!userData.username) {
    navigate("/");
    setThemes({ sidebar: false, header: false, blankScreen: false });
  }

  return <>{props.children}</>;
};
