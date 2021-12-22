import { Component, OnInit } from '@angular/core';
import { LeadersService } from '../services/leaders.service';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    leaders!:Leader[];
  constructor(private leaderService: LeadersService) { }

  ngOnInit(): void {
    this.leaderService.getLeader()
    .subscribe(leaders => this.leaders = leaders);
  }

}
