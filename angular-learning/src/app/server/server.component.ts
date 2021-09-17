import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  title: string = 'server';
  serverId: number = 101;
  serverStatus: string = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}
