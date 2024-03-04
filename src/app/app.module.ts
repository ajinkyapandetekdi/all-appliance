import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HindiVersionComponent } from './hindi-version/hindi-version.component';
import { TamilVersionComponent } from './tamil-version/tamil-version.component';
import { AutheringLocalComponent } from './authering-local/authering-local.component';
import { AutheringServerComponent } from './authering-server/authering-server.component';
import { KannadaVersionComponent } from './kannada-version/kannada-version.component';
import { LearnerAiComponent } from './learner-ai/learner-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    HindiVersionComponent,
    TamilVersionComponent,
    AutheringLocalComponent,
    AutheringServerComponent,
    KannadaVersionComponent,
    LearnerAiComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
