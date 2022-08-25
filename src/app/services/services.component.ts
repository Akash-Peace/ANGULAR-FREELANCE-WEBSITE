import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = [{"title":"Business/Startup Website",
               "desc":"Establish the online presence of your business/startup to reach wider and gain customer's trust.",
               "illustration": "../../assets/images/business_illustration.png"},
               {"title":"Event Website",
               "desc":"Are you conducting an event? Looking to reach a broad audience! Then the event site is your central command station, acting as the anchor of your event marketing efforts.",
               "illustration": "../../assets/images/event_illustration.png"},
               {"title":"Non-profit Website",
               "desc":"Place the visitors with information about your non-profit organization's mission, goals, and core values.",
               "illustration": "../../assets/images/nonprofit_illustration.png"},
               {"title":"Portfolio/Personal Website",
               "desc":"A portfolio/personal website is a great way to give your online presence a boost and promote your individuality and interests.",
               "illustration": "../../assets/images/portfolio_illustration.png"},]

}
