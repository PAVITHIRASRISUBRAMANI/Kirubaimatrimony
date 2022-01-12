import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivateheaderComponent } from './privateheader/privateheader.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { CancellationandrefundComponent } from './cancellationandrefund/cancellationandrefund.component';
import { LocationComponent } from './ourservices/location/location.component';
import { GiftregistryComponent } from './ourservices/giftregistry/giftregistry.component';
import { AccomodationComponent } from './ourservices/accomodation/accomodation.component';
import { MarriagecounsellingComponent } from './ourservices/marriagecounselling/marriagecounselling.component';
import { PremarriagecounsellingComponent } from './ourservices/premarriagecounselling/premarriagecounselling.component';
import { AssistedserviceComponent } from './ourservices/assistedservice/assistedservice.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    FormComponent,
    ProfileComponent,
    PrivateheaderComponent,
    AboutusComponent,
    ContactusComponent,
    ErrorpageComponent,
    ResetpasswordComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    CancellationandrefundComponent,
    LocationComponent,
    GiftregistryComponent,
    AccomodationComponent,
    MarriagecounsellingComponent,
    PremarriagecounsellingComponent,
    AssistedserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
