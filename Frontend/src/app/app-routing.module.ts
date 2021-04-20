import { InputUserComponent } from '../app/components/sign-up/input-user.component';
import {InputComponent} from '../app/components/input-product/input.component';
import { SignInComponentComponent } from '../app/components/sign-in/sign-in-component.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import {ShowProductsXeComponent} from '../app/components/show-products-xe/show-products-xe.component';
import {ProductXeComponent} from '../app/components/show-products-xe/product-xe/product-xe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'viewdetail',component:ViewDetailComponent },
{ path: 'inputproduct',component:InputComponent },
{ path: 'signin',component:InputUserComponent },
{ path:'xe',component:ProductXeComponent},
{ path: 'signup',component:SignInComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
