import React from "react";

import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {

   let buttonClass = classNames('button ', {'button--confirm': props.confirm}, {'button--danger': props.danger}, {'button--dodo': props.dodo})

   return <>
      <button disabled={props.disabled} className={buttonClass} onClick={props.onClick}> {props.children}</button>
   </>;
}
