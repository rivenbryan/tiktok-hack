"use client"
import React, { FormEventHandler } from "react";

type Props = {
  text: string;
  handleClick?: FormEventHandler<HTMLButtonElement>;
};

export default function AdminButton({ text, handleClick }: Props) {

  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 rounded bg-emerald-600 text-sm text-white"
    >
      {text}
    </button>
  );
}
