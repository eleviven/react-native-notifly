import React from "react";

type behaviour = "clear" | "swipe" | "over";

type FireArguments = {
  title: String;
  message: String;
  avatar: any;
  component: Function | Object;
  options: FireOptions;
  onPress: Function;
};

type FireOptions = {
  behaviour: behaviour;
  duration: Number;
};

export function fire(arguments: FireArguments): void;
export function remove(id: Any): void;
export class Notifly extends React.Component {}
