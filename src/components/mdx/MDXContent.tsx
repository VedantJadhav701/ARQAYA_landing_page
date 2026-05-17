import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const components = {
  h1: (props: any) => <h1 className="font-serif text-[42px] text-text-black mb-8 leading-tight" {...props} />,
  h2: (props: any) => <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6 leading-tight" {...props} />,
  h3: (props: any) => <h3 className="font-serif text-[24px] text-text-black mt-10 mb-4 leading-tight" {...props} />,
  p: (props: any) => <p className="font-sans text-[18px] text-text-dark leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-8 space-y-4" {...props} />,
  li: (props: any) => <li className="font-sans text-[17px] text-text-dark" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gold pl-8 my-10 italic font-serif text-[24px] text-text-black leading-snug" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-xl shadow-lg my-12 w-full object-cover" {...props} />
  ),
  hr: () => <hr className="my-16 border-t border-border" />,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="mdx-content">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
