import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function ChangeArrayCode() {
    return (
        <ScrollArea className="flex flex-col max-w-[1080px] bg-secondary/80 rounded-xl py-10 sm:px-10" type="auto">
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent hover:border-t-2 pl-2">{'// German'}</pre>
            <pre> </pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-2">const artists = [</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-6">&#123;</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">id: 1,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">name: &apos;**Pop**&apos;,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">value: &apos;*Nena Hebert, Herbert Grönemeyer*&apos;,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-6">&#125;,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-6">&#123;</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">id: 2,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">name: &apos;**Rock**&apos;,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-12">value: &apos;*Rammstein, Herbert Grönemeyer*&apos;,</pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-6">&#125;,</pre>
            <pre> </pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-2">...</pre>
            <pre> </pre>
            <pre className="hover:border-b-2 hover:border-foreground/10 border-2 border-transparent pl-2">]</pre>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}