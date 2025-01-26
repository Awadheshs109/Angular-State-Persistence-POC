import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  postId: number = 0;
  postDetails: any = {};

 
  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadPostDetails();
    });
  }

  loadPostDetails() {
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .subscribe(data => {
        this.postDetails = data;
      });
  }
  goBack(): void {
    this.location.back();
  }
}