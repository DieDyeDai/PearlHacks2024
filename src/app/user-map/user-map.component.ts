import { Component, OnInit, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import { UserListService } from '../user-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrl: './user-map.component.css'
})
export class UserMapComponent implements OnInit, OnDestroy {
  private profilesSubscription: Subscription = new Subscription();

  constructor(private userListService: UserListService) {}

  ngOnInit() {
    this.profilesSubscription = this.userListService.profilesUpdated.subscribe(() => {
      this.updateVisualization();
    });

    const profiles = this.userListService.getUsers();
    const svg = d3.select('#visualization').style('position', 'relative');

    // Example of adding a new dot for each profile
    profiles.forEach(profile => {
      const [x, y] = this.getRandomPosition();
      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 10) // Radius of the dot
        .style('fill', 'blue');
    });
  }

  ngOnDestroy() {
    this.profilesSubscription.unsubscribe();
  }

  initializeVisualization() {
    this.updateVisualization();
  }

  updateVisualization() {
    const profiles = this.userListService.getUsers();
    const svg = d3.select('#visualization').style('position', 'relative');

    // Example of adding a new dot for each profile
    profiles.forEach(profile => {
      const [x, y] = this.getRandomPosition();
      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 5) // Radius of the dot
        .style('fill', 'blue');
    });
  }

  getRandomPosition() {
    // Calculate a random position within a certain radius from the center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 100; // Adjust radius as needed

    const angle = Math.random() * Math.PI * 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return [x, y];
  }
}
