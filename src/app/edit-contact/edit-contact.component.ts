import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router:Router,
    private fb: FormBuilder
  ) { }

  contactForm = this.fb.nonNullable.group({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: <Date|null> null,
    favoritesRanking: <number|null>null,
    phone: this.fb.nonNullable.group({
      phoneNumber: '',
      phoneType: ''
    }),
    address: this.fb.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: ''
    })
  })

  // contactForm = new FormGroup({
  //   // firstName: new FormControl({value:'', disabled: true}),
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   dateOfBirth: '',
  //   favoritesRanking: '',
  //   phone: new FormGroup({
  //     phoneNumber: '',
  //     phoneType: ''
  //   }),
  //   address: new FormGroup({
  //     streetAddress: '',
  //     city: '',
  //     state: '',
  //     postalCode: '',
  //     addressType: ''
  //   })
  // })


  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    this.contactsService.getContact(contactId).subscribe((contact) => {
      console.log('Contact loaded');
      if (!contact) return;
      // this.contactForm.setValue(contact);
      this.contactForm.setValue(contact);


      // this.contactForm.controls.id.setValue(contact.id)
      // this.contactForm.controls.firstName.setValue(contact.firstName)
      // this.contactForm.controls.lastName.setValue(contact.lastName)
      // this.contactForm.controls.dateOfBirth.setValue(contact.dateOfBirth)
      // this.contactForm.controls.favoritesRanking.setValue(contact.favoritesRanking)
      // this.contactForm.controls.phone.controls.phoneNumber.setValue(contact.phone.phoneNumber)
      // this.contactForm.controls.phone.controls.phoneType.setValue(contact.phone.phoneType)

    })
    if (!contactId) return
  }

  saveContact() {
    // Contact (a)
    //this.contactsService.saveContact(this.contactForm.value); // all fields optional or disabled
    // this.contactsService.saveContact(this.contactForm.getRawValue());  // gets all the formControl Values even thought they are disbaled
    //console.log(this.contactForm.value); // when  formCOntrol is dissbled that formCOntorl is not included in formGroup value
    //console.log(this.contactsService.saveContact(this.contactForm.value));

    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/contacts'])
    })
  }
}
