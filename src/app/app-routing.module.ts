import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonTreeComponent } from './components/json-tree/json-tree.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  {
    path:'',
    component:JsonTreeComponent
  },{
    path:'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
