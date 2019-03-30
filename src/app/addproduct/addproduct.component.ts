import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductsForm: FormGroup;
  submitted: Boolean = false;
  category: Array<string> = [
    "Simple",
    "Multifold",
    "Explosion Box"
  ]
  subCategory = {
    simple: [
      "Formal",
      "Casual",
      "Smart Casual"
    ],
    multi: [
      "Digital",
      "Analog",
      "Fitbit"
    ],
    explosion: [
      "Headphones",
      "Mobile Covers",
      "Speakers"
    ]
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProductsForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      price: ['', [Validators.required, Validators.min(500), Validators.max(10000)]],

      category: [
        // giving first value as default value
        this.category[0],
        [
          Validators.required
        ]
      ],
      subCategory: [
        this.subCategory.simple[0],
        [
          Validators.required
        ]
      ],

      code: ['', [Validators.required]]
    });
  }
  getSelectedCategory() {
    switch (this.addProductsForm.controls['category'].value) {
      case 'Simple': return 'simple'
      case 'Multifold': return 'multi'
      case 'Explosion Box': return 'explosion'
    }
  }
  get f() { return this.addProductsForm.controls; }
}
