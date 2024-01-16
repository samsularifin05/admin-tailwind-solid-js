import { JSX } from "solid-js/jsx-runtime";

interface CardProps<T extends JSX.Element | string> {
  header?: string;
  children: T;
  footer?: string;
}

const Card = <T extends JSX.Element | string>(props: CardProps<T>) => {
  return (
    <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      {props.header && (
        <div class="border-b-2 border-neutral-100 px-6 py-3 border-y-black-20">
          {props.header}
        </div>
      )}
      <div class="p-6">{props.children}</div>
      {props.footer && (
        <div class="border-t-2 border-neutral-100 border-x-black-20 px-6 py-3">
          {props.footer}
        </div>
      )}
    </div>
  );
};

export default Card;
