import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';

import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }