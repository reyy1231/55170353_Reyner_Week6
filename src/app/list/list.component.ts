import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employees;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.employees = this.route.snapshot.data["empParam"];
  }
}

