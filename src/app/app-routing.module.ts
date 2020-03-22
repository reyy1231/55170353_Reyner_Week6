import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { Error404Component} from './error404/error404.component';
import { EmployeeResolverService } from "./employee-resolver.service";


const routes: Routes = 
[
  {path:'',component: HomeComponent},
  {path:'list',component: ListComponent,
  resolve: { empParam: EmployeeResolverService }},
  {path:'info',component: InfoComponent,
  resolve: { empParam: EmployeeResolverService }},
  {path:'**',component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
