import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  review = [{
                "name":"AK Vasu",
                "review": "NFS has helped shape up my startup into a creative design and exceptional development. Nocturnal freelance service capabilities are remarkable.",
                "profile": "../../assets/images/akash_v_review.jpg"
              },{
                "name":"Sailaesh Raja",
                "review": "Nocturnal has met all of our project requirements on time. They are highly recommended because they function as your in-house team.",
                "profile": "../../assets/images/sylesh_review.jpeg"
              }]

}
