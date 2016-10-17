import { NgModule }      from '@angular/core';
import { HeroDetailComponent }  from './hero-detail.component';
@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  exports : [HeroDetailComponent]
})
export class HeroDetailModule { }
