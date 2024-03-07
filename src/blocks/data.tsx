import * as hero_1 from '@/blocks/hero'
import * as layout_1 from '@/blocks/layout-1'
import * as layout_2 from '@/blocks/layout-2'

export const componentList:Record<string, Category> = {
    'heros': {
        name: 'Heros',
        description: 'hero sections',
        components: {
            'hero-1': hero_1
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
    
