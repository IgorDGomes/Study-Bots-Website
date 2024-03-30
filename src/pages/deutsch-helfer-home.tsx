import deutschHelfer from "../assets/German_guru_cat.jpg"
import DeutschHelferAccordion from "@/components/deutsch-helfer-accordion";

export default function DeutschHelferHome() {
    return (
        <div className="max-w-[1200px] mx-auto my-[200px]">
            <div className="flex gap-10 items-center w-fit mx-auto my-20">
                <img src={deutschHelfer} alt="Deutsch Helfer" className="w-[300px] rounded-xl" />
                <div className="flex flex-col gap-5 max-w-[670px]">
                    <h1 className="text-2xl font-semibold">Meet Deutsch Helfer, your new German Tutor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas praesentium iure nemo, iusto doloremque, aliquid dolore non deserunt quos, eius consequatur sequi. Quae dolore debitis aliquid minima illo recusandae?</p>
                </div>
            </div>
            <DeutschHelferAccordion />
        </div>
    )
}