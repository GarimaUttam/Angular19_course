import { Routes } from '@angular/router';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch:'full'
    },
    {
        path: 'admin',
        component:AdminComponent
    },
    {
        path: 'ng-class',
        component:NgClassComponent
    },
    {
        path: 'dataBinding',
        component:DataBindingComponent
    },
    {
        path: 'control-flow',
        component:ControlStatementComponent
    }
];
