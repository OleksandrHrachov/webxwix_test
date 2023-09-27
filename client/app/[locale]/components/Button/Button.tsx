import React from "react";
import classNames from 'classnames';
import "./Button.scss";

interface IProps {
  children: React.ReactNode;
  type: "details" | "category";
  onSelect?: () => void;
  isSelect?: boolean;
}

export default function Button({ children, type, onSelect, isSelect }: IProps) {
  return (
    <button className={classNames('button', `button--${type}`, {['button--selected']: isSelect})} type="button" onClick={onSelect}>
      {children}
    </button>
  );
}
