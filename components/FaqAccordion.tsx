import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <div className="flex flex-col md:flex-row mx-2 md:mx-0 gap-4">
        <AccordionItem value="item-1" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            Is there any pain during aligners treatment ?
          </AccordionTrigger>
          <AccordionContent>
            Usually 90% of patient do not need any pain killer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            How often should the patient wear aligners?
          </AccordionTrigger>
          <AccordionContent>
            to get perdictable results; Midligner recommends to wear aligner for
            22 hours in daily basis during the treatment, to get best results.
          </AccordionContent>
        </AccordionItem>
      </div>

      <div className="flex flex-col md:flex-row mx-2 md:mx-0 gap-4">
        <AccordionItem value="item-3" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            How do you keep your aligners clean?
          </AccordionTrigger>
          <AccordionContent>Brush with warm water and soap.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            What are the attachments and how do they work?
          </AccordionTrigger>
          <AccordionContent>
            They made out of composite, which bonds to the teeth, to allow
            movement with aligners (most of the cases use attachments).
          </AccordionContent>
        </AccordionItem>
      </div>

      <div className="flex flex-col md:flex-row mx-2 md:mx-0 gap-4">
        <AccordionItem value="item-5" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>How to apply attachments?</AccordionTrigger>
          <AccordionContent>
            Use same process of applying braces, so it is very simple process;
            no drilling, No Needle, just glow on the aligner.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            What is IPR and its demand with midligner?
          </AccordionTrigger>
          <AccordionContent>
            IPR is inter proximal reduction, used in most cases to create space
            between teeth, when having crowded cases; it is usually replacing
            teeth extraction.
          </AccordionContent>
        </AccordionItem>
      </div>

      <div className="flex flex-col md:flex-row mx-2 md:mx-0 gap-4">
        <AccordionItem value="item-7" className="w-[380px] md:w-[450px]">
          <AccordionTrigger>
            Does this treatment affect your speech?
          </AccordionTrigger>
          <AccordionContent>
            Any thing that you put on mouth will certainly affect the speech,
            but it takes couple of days maximum, to get back to normal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="w-[380px] md:w-[450px]
        
        
        ">
          <AccordionTrigger>
            What food and beverage to avoid during treatment time?
          </AccordionTrigger>
          <AccordionContent>
            Nothing as far as you take aligner off during that time and cleaning
            your teeth after, then you re-put it on.
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
}
