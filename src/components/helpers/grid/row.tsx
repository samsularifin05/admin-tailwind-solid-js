import { JSX } from "solid-js/jsx-runtime";

interface PanelProps<T extends JSX.Element | string> {
  className?: string;
  children: T;
}
const Row = <T extends JSX.Element | string>(props: PanelProps<T>) => {
  return (
    <div
      class={`flex w-full flex-wrap ${
        props.className ? props.className : ""
      } md:flex-col lg:flex-row`}
    >
      {props.children}
    </div>
  );
};

export default Row;
