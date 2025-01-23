import { Routes } from '@angular/router';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetAPIComponent } from './components/API/get-api/get-api.component';
import { PostAPIComponent } from './components/API/post-api/post-api.component';
import { CustomerComponent } from './components/API/customer/customer.component';
import { ResourceAPIComponent } from './components/resource-api/resource-api.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgForDirectiveComponent } from './components/ng-for-directive/ng-for-directive.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        // canActivate:[authGuard],
        children:[
            {
                path: 'admin',
                component:AdminComponent
            },
            {
                path: 'ng-class',
                component:NgClassComponent
            },
            {
                path: 'ng-for',
                component:NgForDirectiveComponent
            },
            {
                path: 'dataBinding',
                component:DataBindingComponent
            },
            {
                path: 'control-flow',
                component:ControlStatementComponent
            },
            {
                path: 'signal',
                component:SignalComponent
            },
            {
                path:'linked-signal',
                component:LinkedSignalComponent
            },
            {
                path:'template-forms',
                component:TemplateFormComponent
            },
            {
                path:'reactive-form',
                component:ReactiveFormComponent
            },
            {
                path:'get-api',
                component:GetAPIComponent
            },
            {
                path:'post-api',
                component:PostAPIComponent
            },
            {
                path:'customer',
                component:CustomerComponent
            },
            {
                path:'resource-api',
                component:ResourceAPIComponent
            },
            {
                path:'life-cycle',
                component:LifeCycleComponent
            },
            {
                path:'temp-container',
                component:NgTempNgContainerComponent
            }
        ]
    }
   
];
