import React from "react";

import "components/Button.scss";

export default function Button(props) {
   let buttonClass = 'button';
   let disabled = '';

   if (props.disabled){
      disabled = 'disabled'
   }
   
   if (props.confirm) {
      buttonClass += " button--confirm"
   }

   if (props.danger) {
      buttonClass += " button--danger"
   }


   return <>
      <button disabled={disabled} className={buttonClass} onClick={props.onClick}> {props.children}</button>
   </>;
}
