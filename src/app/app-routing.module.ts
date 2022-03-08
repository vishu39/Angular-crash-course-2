import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './component/binding/binding.component';
import { FormComponent } from './component/form/form.component';
import { HttpComponent } from './component/http/http.component';
import { MainComponent } from './component/main/main.component';
import { MaterialComponent } from './component/material/material.component';
import { ChildComponent } from './component/parent/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'binding',
    component: BindingComponent,
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'http',
    component: HttpComponent,
  },
  {
    path: 'material',
    component: MaterialComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
