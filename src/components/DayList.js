import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const daysArray = props.days
  const newList = daysArray.map((day) =>
    <DayListItem
      id={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
    />
  )

  return (
    <ul>
      {newList}
    </ul>
  )
}