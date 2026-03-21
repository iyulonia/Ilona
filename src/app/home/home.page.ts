import { Component } from '@angular/core';
import {v4} from "uuid"

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myName: string = "Илона"
  todo: string[] = [
    "Купить",
    "Пойти в магазин",
    "Пойти на тренировку",
    "Пойти спать"
  ]

    laLa: Book ={
      id:v4(),
      title:"",
      author:"",
      description:""
  }

  books: Book[] = [
    {
      id: v4(),
      title: "Чайковский",
      author: "Петр",
      description: "Ильич"
    },
    {
      id: v4(),
      title: "Глинка",
      author: "Михаил",
      description: "Иванович"
    }
  ];



  btnClick() {
    this.books.push({...this.laLa, id:v4()})
    // this.books.push({
    //   id: this.books.length+1,
    //   title: this.laLa.title,
    //   author: this.laLa.author,
    //   description: this.laLa.description
    // });
  
  this.books.push}

  btnClick2() {
    this.myName = this.myName + "💜";
  }

  delClick(el:string){
    this.myName =el
    this.books=this.books.filter((record)=>record.id !== el)
 }
}
