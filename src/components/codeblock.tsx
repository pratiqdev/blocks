"use client"

import React from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useTheme } from "next-themes"


export const CodeBlock = ({ code }:{ code: string; }) => {
    const { theme } = useTheme()
    return(
    
    <Highlight
        theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
        code={code}
        language="tsx"
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className="flex-1 h-full w-full text-xs p-1">
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            <span className="opacity-40 !w-[2.2em] inline-block">{i + 1}</span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
        )}
    </Highlight>

    )
}