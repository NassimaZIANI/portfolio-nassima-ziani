import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SkillComponent } from './features/skill/skill.component';
import { FormationComponent } from './features/formation/formation.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { SectionScrollDirective } from './directives/section-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LandingPageComponent,
    SkillComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent,
    SectionScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
