/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

    {
        id: 'inicio',
        title:'',
        subtitle: '',
        type: 'group',
        children: [
            {
                id   : 'pagina-principal',
                title: 'Página Principal',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/inicio'
            }
        ]
    },
    {
        id   : 'datos-personales',
        title: 'Datos Principales',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/inicio/datos-personales'
    },
    {
        id      : 'tarjeta',
        title   : 'Tarjeta de Crédito',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id: 'resumenes',
                title: 'Resúmenes',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-list',
                link: '/tarjeta-credito/resumenes'
            },
            {
                title: 'Recargas Virtuales',
                id   : 'recargavirtual',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/tarjeta-credito/recarga-virtual'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
