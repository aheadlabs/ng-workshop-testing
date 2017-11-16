import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { UsersProxyService } from './users-proxy.service';

describe('UsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersProxyService]
    });
  });

  it('should be created', inject([UsersProxyService], (service: UsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users from server', () => {
    const service: UsersProxyService = TestBed.get(UsersProxyService);
    service.getUsersFromServer().subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
      }
    );
  });

});
