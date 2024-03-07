"use client"
import { createContext, useContext, useState, SetStateAction, Dispatch, useEffect } from "react";
import { HslColor } from "react-colorful";

type CtxType = {
    color: HslColor;
    view: 'full' | 'desktop' | 'tablet' | 'mobile';
    codeOpen: false;
}

type BaseCtxType = {
    ctx: CtxType;
    // setCtx: (ctx: CtxType) => void;
    mergeCtx: (newCtx: Partial<CtxType>) => void;
}

const defaultContext: CtxType = {
    color: {
        h: 230,
        s: 65,
        l: 39
    },
    view: 'desktop',
    codeOpen: false
}

const Ctx = createContext<BaseCtxType>({
    ctx: defaultContext,
    // setCtx: () => {},
    mergeCtx: () => {}
});

export const useCtx = () => {
    const context = useContext(Ctx);

    if (context === undefined) {
        throw new Error('useCtx must be used within a Ctx.Provider');
    }

    return context;
};

export const StateProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [ctx, setCtx] = useState<CtxType>(defaultContext);

    const mergeCtx = (newCtx: Partial<CtxType>) => setCtx((prevCtx) => ({ ...prevCtx, ...newCtx }));

    useEffect(() => {
        document?.documentElement?.style?.setProperty('--blocks-theme-hsl', `${ctx.color.h} ${ctx.color.s}% ${ctx.color.l}%`);
    }, [ctx])

    return (
        <Ctx.Provider value={{ ctx, mergeCtx }}>
            {children}
        </Ctx.Provider>
    )
}
