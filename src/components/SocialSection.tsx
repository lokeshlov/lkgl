import { ArrowUpRight, Award, Building, HandshakeIcon, Users } from "lucide-react";

const SocialSection = () => {
  return (
    <section id="csr" className="section border border-t-0 border-x-0 border-[#2D3748] bg-[#2D3748]">
      <div className="container">
        <h2 className="mb-5 text-[#FFFFFF]">
          Memberships & Community Impact
        </h2>
        <p className="font-medium text-[#F8FAFC] text-xl mb-12">
          Proud members of India's leading industry associations and committed to giving back to society.
        </p>
        <div className="grid grid-4">
          <a
            className="group rounded-none bg-[#1A1D21] border border-[#2D3748] p-8 hover:bg-[#1A1D21]/80 transition-colors"
            href="#"
          >
            <div className="flex items-center justify-between gap-4">
              <Building className="size-5 text-[#DD6B20]" />
              <ArrowUpRight className="size-4 text-[#F8FAFC] -translate-x-2 translate-y-2 opacity-100 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#DD6B20]" />
            </div>
            <div className="mt-4">
              <h4 className="mb-1 font-semibold text-[#FFFFFF]">Steel Chamber of India</h4>
              <p className="text-sm text-[#F8FAFC]">
                Committee member of India's premier steel industry association.
              </p>
            </div>
          </a>
          <a
            className="group rounded-none bg-[#1A1D21] border border-[#2D3748] p-8 hover:bg-[#1A1D21]/80 transition-colors"
            href="#"
          >
            <div className="flex items-center justify-between gap-4">
              <Award className="size-5 text-[#DD6B20]" />
              <ArrowUpRight className="size-4 text-[#F8FAFC] -translate-x-2 translate-y-2 opacity-100 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#DD6B20]" />
            </div>
            <div className="mt-4">
              <h4 className="mb-1 font-semibold text-[#FFFFFF]">3 Star Export House</h4>
              <p className="text-sm text-[#F8FAFC]">
                Government recognized export excellence certificate holder.
              </p>
            </div>
          </a>
          <a
            className="group rounded-none bg-[#1A1D21] border border-[#2D3748] p-8 hover:bg-[#1A1D21]/80 transition-colors"
            href="#"
          >
            <div className="flex items-center justify-between gap-4">
              <HandshakeIcon className="size-5 text-[#DD6B20]" />
              <ArrowUpRight className="size-4 text-[#F8FAFC] -translate-x-2 translate-y-2 opacity-100 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#DD6B20]" />
            </div>
            <div className="mt-4">
              <h4 className="mb-1 font-semibold text-[#FFFFFF]">IFAPA</h4>
              <p className="text-sm text-[#F8FAFC]">
                Indian Ferro Alloy Producers Association committee member.
              </p>
            </div>
          </a>
          <a
            className="group rounded-none bg-[#1A1D21] border border-[#2D3748] p-8 hover:bg-[#1A1D21]/80 transition-colors"
            href="#"
          >
            <div className="flex items-center justify-between gap-4">
              <Users className="size-5 text-[#DD6B20]" />
              <ArrowUpRight className="size-4 text-[#F8FAFC] -translate-x-2 translate-y-2 opacity-100 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#DD6B20]" />
            </div>
            <div className="mt-4">
              <h4 className="mb-1 font-semibold text-[#FFFFFF]">CSR Initiatives</h4>
              <p className="text-sm text-[#F8FAFC]">
                Medical camps, education programs, and community development projects.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { SocialSection };