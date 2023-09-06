import Container from "@/app/components/Container";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <Container>
      <div className="flex m-5">
        <h1>Nearby Groups</h1>
        <div className="flex ml-auto">
          <h1>Sort By:</h1>
          <h1>Distance</h1>
        </div>
      </div>
    </Container>
  );
}
