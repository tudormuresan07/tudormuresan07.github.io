import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactComponent } from './contact/contact.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subject', component: SubjectComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
