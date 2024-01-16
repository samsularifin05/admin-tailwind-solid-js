import { JSX } from "solid-js/jsx-runtime";

interface ContentProps<T extends JSX.Element | string> {
  children: T;
}

const Content = <T extends JSX.Element | string>({
  children
}: ContentProps<T>) => {
  return (
    <div class="flex-1 lg:ml-72 lg:mt-10 px-6 m-auto mt-3">{children}</div>
  );
};

export default Content;
