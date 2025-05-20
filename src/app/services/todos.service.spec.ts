import { TestBed } from '@angular/core/testing';

import { ToDosService } from './todos.service';

describe('ToDosService', () => {
  let service: ToDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
