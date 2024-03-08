"use client"
import { createContext, useContext, useState, SetStateAction, Dispatch, useEffect } from "react";
import { HslColor } from "react-colorful";

type CtxType = {
    primaryColor: HslColor;
    secondaryColor: HslColor;
    view: 'full' | 'desktop' | 'tablet' | 'mobile';
    codeOpen: false;
    activeMenu: 'main' | 'color';
    contrastWarning: boolean;
}

type BaseCtxType = {
    ctx: CtxType;
    // setCtx: (ctx: CtxType) => void;
    mergeCtx: (newCtx: Partial<CtxType>) => void;
}

const defaultContext: CtxType = {
    primaryColor: {
        h: 230,
        s: 65,
        l: 59
    },
    secondaryColor: {
        h: 130,
        s: 0,
        l: 69
    },
    view: 'desktop',
    codeOpen: false,
    activeMenu: 'main',
    contrastWarning: true
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

    const { h:ph, s:ps, l:pl } = ctx.primaryColor
    const { h:sh, s:ss, l:sl } = ctx.secondaryColor

    useEffect(() => {
        const primaryColor = JSON.parse(window.localStorage.getItem('bks_primary_color') || '{}');
        const secondaryColor = JSON.parse(window.localStorage.getItem('bks_secondary_color') || '{}');
        if (Object.keys(primaryColor).length > 0) {
            mergeCtx({ primaryColor });
        }
        if (Object.keys(secondaryColor).length > 0) {
            mergeCtx({ secondaryColor });
        }
        
    }, []); 

    useEffect(() => {
        window?.localStorage?.setItem('bks_primary_color', JSON.stringify({ h:ph, s:ps, l:pl }))
        document?.documentElement?.style?.setProperty('--bks-primary-hsl', `${ph} ${ps}% ${pl}%`);
        document?.documentElement?.style?.setProperty('--bks-primary-hsla', `${ph}, ${ps}%, ${pl}%, 0.1`);
    }, [ph, ps, pl])
    
    
    useEffect(() => {
        window?.localStorage?.setItem('bks_secondary_color', JSON.stringify({ h:sh, s:ss, l:sl }))
        document?.documentElement?.style?.setProperty('--bks-secondary-hsl', `${sh} ${ss}% ${sl}%`);
        document?.documentElement?.style?.setProperty('--bks-secondary-hsla', `${sh}, ${ss}%, ${sl}%, 0.1`);
    }, [sh, ss, sl])

    return (
        <Ctx.Provider value={{ ctx, mergeCtx }}>
            {children}
        </Ctx.Provider>
    )
}
