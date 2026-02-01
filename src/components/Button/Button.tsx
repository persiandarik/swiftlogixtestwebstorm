import styles from './Button.module.css';
import type {PropsWithChildren, ReactElement} from "react";
import clsx from "clsx";

export enum Variant {
  SOLID = "solid",
  OUTLINE = "outline",
}

type Props = PropsWithChildren & {
  variant?: Variant;
};

export default function Button({
  children,
  variant = Variant.SOLID,
}: Props): ReactElement {
  return (
    <button className={clsx(styles.button, styles[variant])}>{children}</button>
  );
}
