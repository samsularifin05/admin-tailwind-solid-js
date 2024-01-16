import { JSX } from "solid-js/jsx-runtime";

interface PanelProps<T extends JSX.Element | string> {
  title: string;
  children: T;
}
const PanelContent = <T extends JSX.Element | string>(props: PanelProps<T>) => {
  return (
    <div class="bg-white border border-gray-200 shadow-md rounded-md">
      <div class="bg-zinc-900 border-b p-3 rounded-tl-md rounded-tr-md">
        <h4 class="text-xl font-semibold text-white">{props.title}</h4>
      </div>
      <div class="panel-body p-4">{props.children}</div>
    </div>
  );
};

export default PanelContent;
