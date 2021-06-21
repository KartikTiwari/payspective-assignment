import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { DropdownsPageComponent } from './pages/dropdowns-page/dropdowns-page.component';
import { FormComponent } from './pages/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './pages/table/table.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    ProgressBarComponent,
    HomeComponent,
    DropdownsPageComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
