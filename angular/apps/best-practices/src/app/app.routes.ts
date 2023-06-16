import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: async() => (await import('@nx/decorators')).CustomDecoratorPage,
        pathMatch: 'full'
    },
    {
        path: 'ad-agency',
        loadComponent: async() => (await import('@nx/agencies')).AdPage
    }
]