import { Accommodation } from "@/app/page";
import React from "react";
import ResidenceImg from "./ResidenceImg";
import ResidenceDetials from "./ResidenceDet";

export type OneResidence = {
  residence: Accommodation;
};

function Residence({ residence }: OneResidence) {
  return (
    <section className="section">
      <ResidenceImg residence={residence} />
      <ResidenceDetials residence={residence}/>
    </section>
  );
}

export default Residence;
