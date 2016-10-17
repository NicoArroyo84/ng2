import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroDetailModule } from './test/hero-detail.module';
import { AppComponent }  from './app.component';
//import { HeroDetailComponent } from './test/hero-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroDetailModule
  ],
  declarations: [
    AppComponent
    //HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
