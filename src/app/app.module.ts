import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverColorDirective } from './temas/diretivas/hover-color/hover-color.directive';
import { ExampleComponent } from './temas/example.component';
import { PersonNamePipe } from './temas/pipes/person-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoverColorDirective,
    ExampleComponent,
    PersonNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
