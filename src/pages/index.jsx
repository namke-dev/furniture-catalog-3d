"use client";

import Cube from "@/components/cube/Cube";
import { Model2 } from "@/components/models/Model2";
import ModelContainer from "@/components/models/ModelContainer";
import React from "react";

export default function Home() {
  return (
    <ModelContainer>
      <Model2 />
    </ModelContainer>
  );
  // return <Cube />;
}
