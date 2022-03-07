import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { BindingComponent } from './component/binding/binding.component';
import { MainComponent } from './component/main/main.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './component/pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './component/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BindingComponent,
    MainComponent,
    StructuralDirectiveComponent,
    PipesComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
