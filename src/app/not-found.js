"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-8 py-16 text-center font-mono">
      <div className="max-w-md w-full bg-[#1c1b1b] border border-[#222222] p-8 space-y-6 text-left">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222222] text-xs text-[#888888]">
          <div className="flex items-center gap-1.5 text-[#ffb4ab]">
            <Terminal size={14} />
            <span>KERNEL_PANIC // 404</span>
          </div>
          <span>ERR_NOT_FOUND</span>
        </div>

        {/* Big 404 */}
        <div className="space-y-1">
          <div className="text-5xl sm:text-6xl font-extrabold text-[#e5e2e1]">
            404
          </div>
          <div className="text-xs text-[#ffb4ab]">
            [ ERROR: REQUESTED_ROUTE_DOES_NOT_EXIST ]
          </div>
        </div>

        {/* Code Dump Box */}
        <div className="p-3 bg-[#0e0e0e] border border-[#222222] text-xs text-[#888888] space-y-1">
          <div><span className="text-[#555555]">1</span> const target = &apos;<span className="text-[#00FF41]">{pathname}</span>&apos;;</div>
          <div><span className="text-[#555555]">2</span> if (!system.routeExists(target)) &#123;</div>
          <div><span className="text-[#555555]">3</span>   throw new RouteNotFoundException();</div>
          <div><span className="text-[#555555]">4</span> &#125;</div>
        </div>

        <p className="text-xs text-[#888888] leading-relaxed">
          The requested system pathway could not be resolved in the routing registry. 
          Return to root terminal node.
        </p>

        {/* Return Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="btn-terminal w-full justify-center"
          >
            <ArrowLeft size={14} />
            <span>&gt; RETURN_TO_ROOT</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
