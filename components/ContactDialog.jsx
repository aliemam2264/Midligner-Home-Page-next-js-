import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ContactDialog({ isOpen, setOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-[300px] h-[218px] bg-white border-none md:w-[527px] md:h-[303px] rounded-xl">
        <div className="flex flex-col gap-6 items-center justify-center">
          <img src="/images/done.png" />
          <div className="w-[268px] flex flex-col items-center justify-center gap-4">
            <p className="text-sm">We received your message successfully.</p>
            <p className="text-sm">We will contact you as soon as possible. </p>
          </div>
          <Button
            className="border border-[#DEDDDC] w-[171px] h-9 rounded-xl"
            onClick={() => setOpen(!open)}
          >
            Ok
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
