import ChangeArrayCode from "./change-array-code";
import ChangeArrayCodeCorrection from "./change-array-code-correction";

export default function Steps() {
    return (
        <div className="flex flex-col gap-24 items-center max-w-[1200px] my-20">
            <h2 className="text-3xl font-semibold"><pre>Changing source code to use the Language Bots:</pre></h2>

            <section className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold"><pre>Necessary steps</pre></h3>
                    <pre className="text-xl">To make the bot useful for any desired language is important to change the following parts of the code</pre>
                </div>
                <ol className="flex flex-col gap-4 ml-14">
                    <li className="list-disc text-lg font-medium"><pre>Cloning the repository</pre></li>
                    <li className="list-disc text-lg font-medium"><pre>Create Discord Bot</pre></li>
                    <li className="list-disc text-lg font-medium"><pre>Create an <span className="underline">.env</span> file to store the enviroment variables.</pre></li>
                    <li className="list-disc text-lg font-medium"><pre>Change the Arrays of Objects inside each command.</pre></li>
                </ol>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl font-semibold"><pre>Cloning Repository</pre></h3>
                <ol className="list-disc flex flex-col gap-8 ml-14">
                    <li>
                        <pre className="text-xl">Go to the <a href="https://github.com/IgorDGomes/German-Helper-Discord-Bot" target="_blank" className="underline underline-offset-2 text-sky-500">Main repository</a>.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">Follow the steps on the <a href="https://github.com/IgorDGomes/German-Helper-Discord-Bot?tab=readme-ov-file#getting-started" target="_blank" className="underline underline-offset-2 text-sky-500">Getting Started</a> section.</pre>
                    </li>
                </ol>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl font-semibold"><pre>Creating Discord Bot</pre></h3>
                <ol className="list-disc flex flex-col gap-8 ml-14">
                    <li>
                        <pre className="text-xl">It's important to first register your bot on <a href="https://discord.com/developers/applications" className="text-sky-500 underline underline-offset-[2px]" target="_blank">Discord Developer</a> website.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">With your discord account logged, click on the top right button <span className="rounded-[3px] py-[10px] px-[16px] bg-extra text-base font-sans">New Application</span>.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">After created, enter on <span className="underline underline-offset-2">OAuth2</span> tab and copy the <span className="underline underline-offset-2">CLIENT ID</span> and the <span className="underline underline-offset-2">CLIENT SECRET</span>.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">On the <span className="underline underline-offset-2">Bot</span> tab it's better to allow the permission <span className="underline underline-offset-2">Administrator</span>.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">Go to <span className="underline underline-offset-2">Installation</span> tab, select the Guild Install, get the Install Link (Discord Provided Link)</pre>
                        <pre className="text-xl">and add your bot to the desired server.</pre>
                    </li>
                    <li>
                        <pre className="text-xl">Finally, copy the <span className="underline underline-offset-2">SERVER ID</span> in the settings of your discord server, inside the <span className="underline underline-offset-2">Widget</span> tab</pre>
                    </li>
                </ol>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl font-semibold"><pre>Creating <span className="underline">.env</span> file</pre></h3>
                <ol className="list-disc flex flex-col gap-8 ml-14">
                    <li>
                        <pre className="text-xl">First create a <span className="underline underline-offset-2">.env</span> file in the root directory of the cloned repository.</pre>
                    </li>
                    <li>
                        <pre className="text-xl mb-10">Add the following script:
                            {'\n'}
                            <span className="font-bold underline underline-offset-2">Important note</span>: you should use what you copied instead of the &#123;...&#125;.
                        </pre>
                        <div className="flex flex-col max-w-[1120px] bg-secondary/80 rounded-xl py-10 px-10">
                            <p className="border-t-[1px] border-b-[1px] border-foreground/40 pl-2 bg-secondary">TOKEN=&#123;CLIENT SECRET&#125;</p>
                            <p className="border-b-[1px] border-foreground/40 pl-2 bg-secondary">CLIENT_ID=&#123;CLIENT ID&#125;</p>
                            <p className="border-b-[1px] border-foreground/40 pl-2 bg-secondary">GUILD_ID=&#123;SERVER ID&#125;</p>
                        </div>
                    </li>
                </ol>
            </section>
            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl font-semibold"><pre>Changing the Array of Objects</pre></h3>
                <ol className="list-disc flex flex-col gap-8 ml-14">
                    <li>
                        <pre className="text-xl mb-10">Example:</pre>
                        <div className="ml-10">
                            <pre className="text-lg mb-10">Artists</pre>
                            <ChangeArrayCode />

                            <pre className="text-lg my-10">Changes to:</pre>
                            <ChangeArrayCodeCorrection />
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    )
}