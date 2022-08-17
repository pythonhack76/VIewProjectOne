import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  titolo:string = 'Shining';
  autore: string = 'SK';
  src: string = '../../assets/imgs/book.jpg';

  titolo2: string = 'Programming';
  autore2: string = 'Coom';
  src2: string = '../../assets/imgs/student.jpg';

  isDisabled: boolean = false;


  ;

  constructor() { }

  ngOnInit(): void {}

  handleClick(){
    this.isDisabled = true;

  }


}
