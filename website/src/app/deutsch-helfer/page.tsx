import { Metadata } from "next";
import Image from "next/image";

import DeutschHelferAccordion from "@/components/deutsch-helfer/accordion";

import deutschHelfer from "@/assets/German_guru_cat.jpg";

export const metadata: Metadata = {
  title: "Deutsch Helfer Bot",
  description: "Page to know more about Deutsch Helfer",
};

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto my-[200px]">
      <div className="grid lg:flex gap-12 text-center sm:text-left items-center justify-items-center w-[70vw] mx-auto my-20 max-w-[1000px]">
        <Image
          src={deutschHelfer}
          alt="Deutsch Helfer"
          className="w-[300px] rounded-xl"
        />
        <div className="flex flex-col gap-5 max-w-[670px] text-center lg:text-left">
          <h1 className="text-2xl font-semibold">
            Meet Deutsch Helfer, your new German Tutor
          </h1>
          <p>
            The Deutsch Helfer discord bot was made to help you improve your
            german proficiency by providing real-life dialogues, resource
            recommendations, jokes in german and much more to come...
          </p>
        </div>
      </div>
      <DeutschHelferAccordion />
    </div>
  );
}
