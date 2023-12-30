import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  form: FormGroup 


  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      from_name: '',
      to_name: 'We Do Pavers',
      availability: '',
      hear: '',
      first_name: '',
      last_name: '',
      from_email: '',
      phone_number: '',
      address: '',
      description: ''
    }) 
  }

  async send() {
    emailjs.init('ycQAiMak6B7f6QFfO')
    let response = await emailjs.send("service_e4dg3cr","template_5deseap",{
    from_name: this.form.value.from_name,
    to_name: "We Do Pavers",
    availability: this.form.value.availability,
    hear: this.form.value.hear,
    first_name: this.form.value.first_name,
    last_name: this.form.value.last_name,
    from_email: this.form.value.from_email,
    phone_number: this.form.value.phone_number,
    address: this.form.value.address,
    description: this.form.value.description,
    });

    alert("Form has been Submitted, Please allow 24-48 hours for a follow-up")
    this.form.reset();
  }

}
