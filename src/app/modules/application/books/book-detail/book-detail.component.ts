import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/books";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.book = this.router.getCurrentNavigation().extras.state.book;
      }
    });
  }

  ngOnInit() {}

  returnToList() {
    this.router.navigate(["/books"]);
  }
}
