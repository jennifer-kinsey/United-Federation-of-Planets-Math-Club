import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
  providers: [MemberService]
})
export class ClubComponent implements OnInit {
  members: Member[];

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

    goToDetailPage(clickedMember: Member) {
    this.router.navigate(['albums', clickedMember.id]);
  };

}
