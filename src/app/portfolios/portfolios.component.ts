import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  portfolios = [{"title": "Sri Sai Industries",
                 "desc": "Showcase Industrial products offered by this corporation.",
                 "link": "https://srisaiindustries.web.app/",
                 "image": "../../assets/images/photo1.png"},
                 {"title": "Paid Promoters",
                 "desc": "A recommendation system about youtube content creators for advertisers.",
                 "link": "https://paid-promoters-recommender.web.app/",
                 "image": "../../assets/images/photo2.png"},
                 {"title": "Bingers Play",
                 "desc": "Show and share your binged movies & series list with your friends.",
                 "link": "https://bingers-play.web.app/",
                 "image": "../../assets/images/photo3.png"},
                 {"title": "Hello Akash",
                 "desc": "A overview of my education, skills, projects, contributions.",
                 "link": "https://helloakash.vercel.app/",
                 "image": "../../assets/images/photo4.png"}]

}
