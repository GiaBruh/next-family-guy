import { ReactNode, ElementType, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const Container = ({
  as: Element = "div",
  children,
  className,
  ...rest
}: ContainerProps): JSX.Element => {
  return (
    <Element
      {...rest}
      className={`px-5 w-full max-w-screen-md m-auto ${className}`}
    >
      {children}
    </Element>
  );
};
