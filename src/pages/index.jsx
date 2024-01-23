"use client";

import Cube from "@/components/cube/Cube";
import { MordernStyleTable } from "../components/models/Model2";
import ModelContainer from "@/components/models/ModelContainer";
import React from "react";

export default function Home() {
  return (
    <ModelContainer>
      <MordernStyleTable />
    </ModelContainer>
  );
  // return <Cube />;
}
