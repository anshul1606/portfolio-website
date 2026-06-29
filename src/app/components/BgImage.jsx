"use client"
import Image from "next/image";

export default function BgImage(){
    return(
        <div className="fixed inset-0 -z-10 overflow-hidden">    
            <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1120] to-[#071A1A]" /> 
            <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#10B981]/20 blur-[120px]"/>
            <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500p] rounded-full bg-[#06B6D4]/20 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[150px]" />
        </div>
    );
}