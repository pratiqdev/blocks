import * as hero_1 from '@/blocks/hero'
import * as hero_2 from '@/blocks/hero-2'
import * as layout_1 from '@/blocks/layout-1'
import * as layout_2 from '@/blocks/layout-2'

export const componentList:Record<string, Category> = {
    'heros': {
        name: 'Heros',
        description: 'hero sections',
        components: {
            'hero-1': hero_1,
            'hero-2': hero_2,
            'hero-3': hero_2,
            'hero-4': hero_2,
            'hero-5': hero_2,
            'hero-6': hero_2,
            'hero-7': hero_2,
            'hero-8': hero_2,
            'hero-9': hero_2,
            'hero-a': hero_2,
            'hero-s': hero_2,
            'hero-d': hero_2,
            'hero-f': hero_2,
            'hero-g': hero_2,
            'hero-h': hero_2,
            'hero-j': hero_2,
            'hero-q': hero_2,
            'hero-w': hero_2,
            'hero-e': hero_2,
            'hero-r': hero_2,
            'hero-t': hero_2,
            'hero-y': hero_2,
        }
    },
    'layout': {
        name: 'Layout',
        description: 'App Layouts and Structures',
        components: {
            'layout-1': layout_1,
            'layout-2': layout_2
        }
    }
}
    
export type Category = {
    name: string;
    description: string;
    components: Record<string, Component>;
}

export type Component = {
    name: string;
    description: string;
    Component: React.JSXElementConstructor<any>;
    code: string;
}
    
