import { Component, Input } from '@angular/core';
import { User } from '../../current-user.service';

@Component({
    selector: 'user-private-card',
    templateUrl: './user-private-card.widget.html',
    styleUrls: []
  })
export class UserPrivateCardWidget {
  @Input() user!: User;
}