import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-post-cho-duyet',
  templateUrl: './user-post-cho-duyet.component.html',
  styleUrls: ['./user-post-cho-duyet.component.css']
})
export class UserPostChoDuyetComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserPostChoDuyet();
    // this.profileSubscription = this.profilesService
    //   .getProfilesStream()
    //   .subscribe((profiles: Profile[]) => {
    //     this.profiles = profiles;
    //   });
  }
  public count = 0;price = 0;
  getUserPostChoDuyet(){
    this.http
          .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp=trong.phamtranduc&status=0")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles.length;i++){
              this.count++
              this.price += parseFloat(profiles[i].productPrice);
            }
          });
  }

}
