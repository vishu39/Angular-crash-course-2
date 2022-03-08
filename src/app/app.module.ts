import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { BindingComponent } from './component/binding/binding.component';
import { MainComponent } from './component/main/main.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './component/pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './component/http/http.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/parent/child/child.component';
import { MaterialComponent } from './component/material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './component/material/mat/mat.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BindingComponent,
    MainComponent,
    StructuralDirectiveComponent,
    PipesComponent,
    HttpComponent,
    ParentComponent,
    ChildComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
