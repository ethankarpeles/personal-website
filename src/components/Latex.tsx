import { useEffect, useRef } from "react";
import katex from "katex";

type LatexProps = {
    math: string;
    display?: boolean;
};

export default function Latex({ math, display = false }: LatexProps) {
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        katex.render(math, ref.current, {
            displayMode: display,
            throwOnError: false,
        });
    }, [math, display]);

    return <span ref={ref} />;
}