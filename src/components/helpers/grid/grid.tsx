import { JSX } from "solid-js/jsx-runtime";

interface PanelProps<T extends JSX.Element | string> {
  className?: string;
  children: T;
  gridSize: number;
}
const Grid = <T extends JSX.Element | string>(props: PanelProps<T>) => {
  return (
    <div
      class={`grid grid-rows-${
        props.gridSize
      } grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-pink rounded-lg p-4 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Grid;
