import React from "react";

export const Container = (props: { children: React.ReactNode }) => {
  return (
    <div className="pl-16 flex overflow-x-hidden justify-start space-x-12 no-scrollbar overflow-y-hidden snap-x">
      {props.children}
    </div>
  );
};
