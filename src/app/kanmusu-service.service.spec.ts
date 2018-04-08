import { TestBed, inject } from '@angular/core/testing';

import { KanmusuServiceService } from './kanmusu-service.service';

describe('KanmusuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanmusuServiceService]
    });
  });

  it('should be created', inject([KanmusuServiceService], (service: KanmusuServiceService) => {
    expect(service).toBeTruthy();
  }));
});
