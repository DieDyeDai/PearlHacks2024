import { Component, Input } from '@angular/core';
import { User } from '../../current-user.service';

@Component({
    selector: 'user-card',
    templateUrl: './user-card.widget.html',
    styleUrls: []
  })
export class UserCardWidget {
  @Input() user!: User;
}