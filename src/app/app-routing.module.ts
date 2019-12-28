import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import all components
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'user-profile',component:UserprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
