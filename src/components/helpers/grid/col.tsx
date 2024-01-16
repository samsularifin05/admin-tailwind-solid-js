import { JSX } from "solid-js/jsx-runtime";

interface PanelProps<T extends JSX.Element | string> {
  className?: string;
  children: T;
  colSize: number;
}
const Col = <T extends JSX.Element | string>(props: PanelProps<T>) => {
  // eslint-disable-next-line solid/reactivity
  const colClass = `w-full sm:w-1/4 lg:w-1/${props.colSize} p-4`;
  return (
    <div class={`${colClass} ${props.className ? props.className : ""} `}>
      {props.children}
    </div>
  );
};

export default Col;
