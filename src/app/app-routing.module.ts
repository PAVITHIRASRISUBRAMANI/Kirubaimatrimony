import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { CancellationandrefundComponent } from './cancellationandrefund/cancellationandrefund.component';


const routes: Routes = [
  {path:'signup',component: SignupComponent},
  {path:'signin',component: SigninComponent},
  {path:'profile',component: ProfileComponent},
  {path:'form',component:FormComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'errorpage',component:ErrorpageComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'termsandconditions',component:TermsandconditionsComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'cancellationandrefund',component:CancellationandrefundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
