import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  form: FormGroup;
  divs: number[];
  numberOfDivs: number;
  color: string;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      divsNumber: new FormControl(0, Validators.required),
      divsColor: new FormControl('green', Validators.required),
      selectSort: new FormControl('Selection sort', Validators.required)
    });
  }

  submitForm(): void {
    this.numberOfDivs = +this.form.controls.divsNumber.value;
    this.color = this.form.controls.divsColor.value;

    this.createAndFillDivsArray(this.numberOfDivs);
  }

  createAndFillDivsArray(numberOfItems): void {
    this.divs = Array.from(Array(numberOfItems), item => Math.round(Math.random() * 200));
  }

  selectChannged(event): void {
    console.log(event.target.value);
  }

  selectionSort(arrayToSort): void {
    let smallest = arrayToSort[0];
    let smallestIndex = 0;

    for (const [i, index] of arrayToSort) {
      if (arrayToSort[i] < smallest) {
        console.table('i equals to: ', i);
        console.table('index equals to: ', index);
        smallest = arrayToSort[index];
        smallestIndex = arrayToSort[index];
      }
    }
  }

  trySort(): void {
    const selectedSort = () => {
      return this.form.controls.selectSort.value;
    };

    const availableSorts: object = {
      selectionSort: this.selectionSort
    };

    availableSorts[selectedSort()]();
  }
}
