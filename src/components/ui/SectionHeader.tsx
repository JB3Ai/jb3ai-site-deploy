import React from 'react';

type SectionHeaderProps = {
    title: string
    subtitle?: string
    titleClassName?: string
}

export function SectionHeader({ title, subtitle, titleClassName }: SectionHeaderProps) {
    return (
        <div className="text-center mb-16">
            <h2 className={titleClassName || "text-5xl md:text-7xl font-orbitron font-bold tracking-tight text-jb3-light mb-6 drop-shadow-2xl uppercase"}>
                {title}
            </h2>

            <div className="mx-auto h-[2px] w-32 bg-[#66FF66]" />

            {subtitle && (
                <p className="mt-6 text-jb3-coolgray text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
