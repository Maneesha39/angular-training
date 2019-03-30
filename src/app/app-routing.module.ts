import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UsersviewComponent } from './usersview/usersview.component';
import { ProductsdescComponent } from './productsdesc/productsdesc.component';
import { LoginreactComponent } from './loginreact/loginreact.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'logistics',
        component: LogisticsComponent
    },
    {
        path: 'usersview',
        component: UsersviewComponent
    },
    {
        path: 'users/:id',
        component: UsersviewComponent
    },
    {
        path: 'productsdesc',
        component: ProductsdescComponent
    },
    {
        path: 'forms',
        component: LoginreactComponent
    },
    {
        path: 'products/add',
        component: AddproductComponent
    },
    {
        path: 'sidebar',
        component: SidebarComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }