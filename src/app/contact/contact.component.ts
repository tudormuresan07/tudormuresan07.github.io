import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent {
  facebookLink : string = "https://www.facebook.com/tudor.muresan.165";
  whatsappLink : string = "https://wa.me/40731985190";
  emailLink : string = "mailto:tudor.vlad.muresan@stud.ubbcluj.ro";
  skypeLink : string = "https://msng.link/o?tudor.vlad.muresan@stud.ubbcluj.ro=sk";
}
