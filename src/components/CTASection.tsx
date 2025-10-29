import { ArrowRight, Circle, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  return (
    <section id="contact" className="section bg-[#1A1D21] border-b border-[#2D3748]">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <Badge className="rounded-lg bg-[#2D3748] text-[#FFFFFF] border border-[#2D3748] hover:bg-[#2D3748]/80">
            <Mail className="mr-2 h-4 w-4 text-[#DD6B20]" />
            Get In Touch
          </Badge>

          {/* Heading */}
          <h3 className="mt-6 text-center">
            Connect with L.K. Group
          </h3>

          {/* Form */}
          <form className="mt-8 flex w-full flex-col gap-2 md:w-auto">
            <div className="group relative flex w-full items-center gap-2 rounded-lg px-3 md:w-[416px]">
              <Input
                type="email"
                required
                placeholder="Enter your email..."
                className="bg-[#2D3748] border-[#2D3748] text-[#FFFFFF] placeholder:text-[#94A3B8] rounded-lg"
              />
              <Button
                type="submit"
                className="rounded-lg bg-[#DD6B20] hover:bg-[#9C4221]"
                aria-label="Submit form"
              >
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </form>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[#F8FAFC]">
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 stroke-[#DD6B20] stroke-3" />
              Business inquiries
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 stroke-[#DD6B20] stroke-3" />
              Partnership opportunities
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 stroke-[#DD6B20] stroke-3" />
              Quick response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };