import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('addApplicationModal') addApplicationModal: any
  users: any[] = []
  constructor(private modalService: NgbModal,
    private helper: HelperService) { }

  ngOnInit(): void {
    this.getUsers()

  }
  applicationAdd() {
    this.modalService.open(this.addApplicationModal)
  }

  getUsers() {
    this.helper.getData().subscribe((data: any) => {
      this.users = data
    })
  }
}
