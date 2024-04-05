import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DeutschHelferAccordion() {
    return (
        <Accordion type="single" collapsible className="w-[70vw] max-w-[1000px] mx-auto">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Is it built with Texts about Real-Life Scenarios?</AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                    <span>
                        Yes, Deutsch Helfer bot gives you a diverse array of texts set in real-life scenarios. 
                        These resources are meticulously selected to immerse you in practical contexts, enhancing your German language comprehension and vocabulary skills.
                    </span>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Does it provides Resource Recommendations?</AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                    <span>
                        Yes. Deutsch Helfer bot offers various resource recommendations to help your language learning journey.
                        Whether you&apos;re looking for engaging YouTube channels, informative podcasts, helpful language learning apps, captivating movies and series, reputable newspapers, or talented artists.
                        Explore Deutsch Helfer and immerse yourself in the German language.
                    </span>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">Is the support team 24/7?</AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                    <span>
                                No, not really. I&apos;m alone.
                    </span>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">Deutsch Helfer makes jokes?</AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                            Yes, Unleash your sense of humor with Deutsch Helfer&apos;s collection of German jokes. 
                            Deutsch Helfer may not have a good sense of humor, possibly because of the person behind it.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">Does it offers resources for languages other than German?</AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                            Deutsch Helfer was intentionally designed to be adaptable and customizable, welcoming anyone eager to explore and learn about various languages.
                            To addapt it in another language follow these steps: ...
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}