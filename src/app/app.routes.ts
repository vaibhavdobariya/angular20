import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { Databinding } from './components/databinding/databinding';
import { ControlFlow } from './components/control-flow/control-flow';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { Getapi } from './components/getapi/getapi';

export const routes: Routes = [
    {
        path: 'admin',
        component:Admin
    },
    {
        path: 'user',
        component:User
    },
    {
        path: 'databinding',
        component:Databinding
    },
    {
        path: 'control-flow',
        component:ControlFlow
    },
    {
        path:'signal-ex',
        component:SignalEx
    },
    {
        path:'att-directive',
        component:AttDirective
    },
    {
        path:'getapi',
        component:Getapi
    }
];
