import React from "react";
import classNames from "classnames";
import "./Button.scss";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  type: "category" | "category-footer" | "link";
  onSelect?: () => void;
  isSelect?: boolean;
  href?: string;
}

export default function Button({
  children,
  type,
  onSelect,
  isSelect,
  href,
}: IProps) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={classNames("button", `button--${type}`, {
            [`button--${type}--selected`]: isSelect,
          })}
        >
          {children}
        </Link>
      ) : (
        <button
          className={classNames("button", `button--${type}`, {
            [`button--${type}--selected`]: isSelect,
          })}
          type="button"
          onClick={onSelect}
        >
          {children}
        </button>
      )}
    </>
  );
}
