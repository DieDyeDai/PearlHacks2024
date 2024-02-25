import { Component, OnInit, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import { UserListService } from '../user-list.service';
import { Subscription } from 'rxjs';
import { User } from '../current-user.service';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrl: './user-map.component.css'
})
export class UserMapComponent implements OnInit, OnDestroy {

  public static Route = {
    path: 'map',
    title: 'Network!',
    component: UserMapComponent
  }

  static positions: number[][] = [
    [0, 0],
    [100, 100],
    [-100, 100],
    [-100, -100],
    [100, -100],
    [150, -200],
    [-200, 150],
    [-150, 200],
    [200, -150]
  ]
  private posIndex = 0;

  private profilesSubscription: Subscription = new Subscription();

  constructor(private userListService: UserListService) {this.posIndex = 0;}

  ngOnInit() {
    this.profilesSubscription = this.userListService.profilesUpdated.subscribe(() => {
      this.updateVisualization();
    });

    const profiles = this.userListService.getUsers();
    const svg = d3.select('#visualization').style('position', 'relative');
    
    let [x, y] = this.getNextPosition();
    svg.append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', 10)
      .style('fill', 'green');

    // Add a circle for each user
    profiles.forEach(profile => {
      const [x, y] = this.getNextPosition();
      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 10) // Radius of the dot
        .style('fill', 'blue');
    });

    d3.selectAll('circle')
    .on('mouseover', function (event, d) {
      d3.select(this).transition()
        .duration(100) // Duration of the animation
        .attr('r', 12); // New radius size
    })
    .on('mouseout', function () {
      d3.select(this).transition()
        .duration(100)
        .attr('r', 10); // Original radius size
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
      const [x, y] = this.getNextPosition();
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

  getNextPosition() {
    this.posIndex++;
    return [UserMapComponent.positions[this.posIndex - 1][0] + window.innerWidth/2,
    UserMapComponent.positions[this.posIndex - 1][1] + window.innerHeight/2];
  }
}