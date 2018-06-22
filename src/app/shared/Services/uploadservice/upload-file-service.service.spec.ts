import { TestBed, inject } from '@angular/core/testing';

import { UploadFileServiceService } from './upload-file-service.service';

describe('UploadFileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadFileServiceService]
    });
  });

  it('should be created', inject([UploadFileServiceService], (service: UploadFileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
