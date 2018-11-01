import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
   declarations: [
      BasicHighlightDirective,
      BetterHighlightDirective,
      AppComponent,
      UnlessDirective
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
