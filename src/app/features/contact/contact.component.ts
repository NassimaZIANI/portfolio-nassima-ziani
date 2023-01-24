import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const { name, email, subject, message } = this.form.value;

    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Subject: ${subject}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = {
      to: 'nassima.ziani1996@gmail.com',
      message: {
        subject: subject,
        message: message,
        html: html,
      },
    };

    const messagesCollection = this.db.collection('messages');
    messagesCollection.add(formRequest);

    this.form.reset();
  }
}
