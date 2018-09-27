import { TestBed, inject } from '@angular/core/testing';

import { BookLibraryService } from './book-library.service';

describe('BookLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookLibraryService]
    });
  });

  it('should be created', inject([BookLibraryService], (service: BookLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
