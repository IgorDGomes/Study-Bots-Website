import { useEffect, useState } from "react";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";

import ChangeArrayCode from "./change-array-code";
import ChangeArrayCodeCorrection from "./change-array-correction";

export default function Steps() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [width])

    return (
        <div className="flex flex-col gap-24 items-center md:w-[1200px] max-w-[90vw] my-20 px-2 lg:px-10">
            <>
                <h2 className="text-3xl font-semibold max-w-[90vw] font-mono">Changing source code to use the Language Bots:</h2>

                <section className="flex flex-col gap-10 w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-semibold font-mono">Necessary steps</h3>
                        <p className="font-mono text-xl">To make the bot useful for any desired language is important to change the following parts of the code</p>
                    </div>
                    <ol className="flex flex-col gap-4 ml-14">
                        <li className="list-disc text-lg font-medium font-mono">Cloning the repository</li>
                        <li className="list-disc text-lg font-medium font-mono">Create Discord Bot</li>
                        <li className="list-disc text-lg font-medium font-mono">Create an <span className="underline">.env</span> file to store the enviroment variables.</li>
                        <li className="list-disc text-lg font-medium font-mono">Change the Arrays of Objects inside each command.</li>
                    </ol>
                </section>

                <section className="flex flex-col gap-10 w-full">
                    <h3 className="text-2xl font-semibold font-mono">Cloning Repository</h3>
                    <ol className="list-disc flex flex-col gap-8 ml-14">
                        <li>
                            <p className="font-mono text-xl">Go to the <a href="https://github.com/IgorDGomes/German-Helper-Discord-Bot" target="_blank" className="underline underline-offset-2 text-sky-500">Main repository</a>.</p>
                        </li>
                        <li>
                            <p className="font-mono text-xl">Follow the steps on the <a href="https://github.com/IgorDGomes/German-Helper-Discord-Bot?tab=readme-ov-file#getting-started" target="_blank" className="underline underline-offset-2 text-sky-500">Getting Started</a> section.</p>
                        </li>
                    </ol>
                </section>

                <section className="flex flex-col gap-10 w-full">
                    <h3 className="text-2xl font-semibold font-mono">Creating Discord Bot</h3>
                    <ol className="list-disc flex flex-col gap-8 ml-14">
                        <li>
                            <p className="font-mono text-xl">It&apos;s important to first register your bot on <a href="https://discord.com/developers/applications" className="text-sky-500 underline underline-offset-[2px]" target="_blank">Discord Developer</a> website.</p>
                        </li>
                        <li>
                            { (width >= 1150) ? (
                                <p className="font-mono text-xl">With your discord account logged, click on the top right button <span className="rounded-[3px] py-[10px] px-[16px] bg-extra text-base font-sans">New Application</span>.</p>
                                ) : (
                                <p className="font-mono text-xl">With your discord account logged, click on the top right button <br /> <span className="rounded-[3px] py-[10px] px-[16px] bg-extra text-base font-sans leading-[3rem]">New Application</span>.</p>
                            )}
                        </li>
                        <li>
                            <p className="font-mono text-xl">After created, enter on <span className="underline underline-offset-2">OAuth2</span> tab and copy the <span className="underline underline-offset-2">CLIENT ID</span> and the <span className="underline underline-offset-2">CLIENT SECRET</span>.</p>
                        </li>
                        <li>
                            <p className="font-mono text-xl">On the <span className="underline underline-offset-2">Bot</span> tab it&apos;s better to allow the permission <span className="underline underline-offset-2">Administrator</span>.</p>
                        </li>
                        <li>
                            <p className="font-mono text-xl">Go to <span className="underline underline-offset-2">Installation</span> tab, select the Guild Install, get the Install Link (Discord Provided Link)</p>
                            <p className="font-mono text-xl">and add your bot to the desired server.</p>
                        </li>
                        <li>
                            <p className="font-mono text-xl">Finally, copy the <span className="underline underline-offset-2">SERVER ID</span> in the settings of your discord server, inside the <span className="underline underline-offset-2">Widget</span> tab</p>
                        </li>
                    </ol>
                </section>

                <section className="flex flex-col gap-10 w-full">
                    <h3 className="text-2xl font-semibold font-mono">Creating <span className="underline">.env</span> file</h3>
                    <ol className="list-disc flex flex-col gap-8 sm:ml-14">
                        <li>
                            <p className="font-mono text-xl">First create a <span className="underline underline-offset-2">.env</span> file in the root directory of the cloned repository.</p>
                        </li>
                        <li>
                            <p className="font-mono text-xl mb-10">Add the following script:
                                <br />
                                <span className="text-lg font-bold underline underline-offset-2">Important note</span>:<span className="text-base"> you should use what you copied instead of the &#123;...&#125;.</span>
                            </p>
                            <ScrollArea className="flex flex-col max-w-[1080px] bg-secondary/80 rounded-xl py-10 sm:px-10" type="auto">
                                <pre className="border-b-[1px] border-foreground/40 px-5 bg-secondary mt-1">TOKEN=&#123;CLIENT SECRET&#125;</pre>
                                <pre className="border-b-[1px] border-foreground/40 px-5 bg-secondary">CLIENT_ID=&#123;CLIENT ID&#125;</pre>
                                <pre className="border-b-[1px] border-foreground/40 px-5 bg-secondary mb-1">GUILD_ID=&#123;SERVER ID&#125;</pre>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </li>
                    </ol>
                </section>
                <section className="flex flex-col gap-10 w-full">
                    <h3 className="text-2xl font-semibold font-mono">Changing the Array of Objects</h3>
                    <ol className="list-disc flex flex-col gap-8 sm:ml-14">
                        <li>
                            <p className="font-mono text-xl mb-10">Example:</p>
                            { (width >= 820) ? (
                                <div>
                                    <p className="font-mono text-lg mb-10">Artists</p>
                                    <ChangeArrayCode />

                                    <p className="font-mono text-lg my-10">Changes to:</p>
                                    <ChangeArrayCodeCorrection />
                                </div>
                            ) : (
                                <div className="ml-10">
                                    <p className="font-mono text-lg mb-10">Artists</p>
                                    <ChangeArrayCode />

                                    <p className="font-mono text-lg my-10">Changes to:</p>
                                    <ChangeArrayCodeCorrection />
                                </div>
                            )}
                        </li>
                    </ol>
                </section>
            </>
        </div>
    )
}