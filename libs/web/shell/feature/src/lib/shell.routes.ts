import { Route } from '@angular/router';
import { LayoutComponent } from '@flava/web/shell/ui/layout';

export const shellRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: async () => (await import('@flava/web/home/feature')).HomeModule
            }
        ]
    }
];