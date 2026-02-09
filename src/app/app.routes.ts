import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './features/layout/layout.component';
import { TicketComponent } from './features/ticket/ticket.component';
import { UnidadesComponent } from './features/unidades/unidades.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'ticket',
                component: TicketComponent
            },
            {
                path: 'unidades',
                component: UnidadesComponent
            }
        ]
    }
];
