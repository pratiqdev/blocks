"use client"
import { createContext, useContext, useState, SetStateAction, Dispatch, useEffect, useRef } from "react";
import { HslColor } from "react-colorful";

type CtxType = {
    primaryColor: HslColor;
    secondaryColor: HslColor;
    view: 'full' | 'desktop' | 'tablet' | 'mobile';
    codeOpen: boolean;
    activeMenu: 'main' | 'color';
    contrastWarning: boolean;
    isColorPanelOpen: boolean;
}

type BaseCtxType = {
    ctx: CtxType;
    // setCtx: (ctx: CtxType) => void;
    mergeCtx: (newCtx: Partial<CtxType>) => void;
}

const defaultContext: CtxType = {
    primaryColor: {
        h: 0,
        s: 0,
        l: 0
    },
    secondaryColor: {
        h: 0,
        s: 0,
        l: 30
    },
    view: 'desktop',
    codeOpen: false,
    isColorPanelOpen: false,
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


function useUpdateEffect(callback: () => any, dependencies: any[]) {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }

        return callback();
    }, dependencies);
}


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

    useUpdateEffect(() => {
        try{
            console.log('setting new primary color to storage')
            window?.localStorage?.setItem('bks_primary_color', JSON.stringify({ h:ph, s:ps, l:pl }))
        }catch(err){
            console.log('error setting theme color to local storage:', err)
        }
        document?.documentElement?.style?.setProperty('--bks-primary-hsl', `${ph} ${ps}% ${pl}%`);
        document?.documentElement?.style?.setProperty('--bks-primary-hsla', `${ph}, ${ps}%, ${pl}%, 0.05`);
    }, [ph, ps, pl])
    
    
    useUpdateEffect(() => {
        try{
            console.log('setting new secondary color to storage')
            window?.localStorage?.setItem('bks_secondary_color', JSON.stringify({ h:sh, s:ss, l:sl }))
        }catch (err) {
            console.log('error setting theme color to local storage:', err)
        }
        document?.documentElement?.style?.setProperty('--bks-secondary-hsl', `${sh} ${ss}% ${sl}%`);
        document?.documentElement?.style?.setProperty('--bks-secondary-hsla', `${sh}, ${ss}%, ${sl}%, 0.05`);
    }, [sh, ss, sl])

    return (
        <Ctx.Provider value={{ ctx, mergeCtx }}>
            {children}
        </Ctx.Provider>
    )
}
