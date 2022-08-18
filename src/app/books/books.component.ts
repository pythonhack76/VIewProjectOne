import { Component, OnInit } from '@angular/core';
interface Book {
  titolo: string;
  autore: string;
  src: string;

}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [

    {

      titolo: 'Shining',
      autore:  'SK',
      src:  '../../assets/imgs/book.jpg',

    },

    {

      titolo:  'Programming',
      autore:  'Coom',
      src:  '../../assets/imgs/student.jpg',


    },

  ];








  isDisabled: boolean = false;

  isShowing: boolean = true;


  constructor() { }

  ngOnInit(): void {}

  // handleClick(){
    // this.isDisabled = true;

  // }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }




    }
