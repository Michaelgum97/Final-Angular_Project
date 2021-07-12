import { TestBed } from '@angular/core/testing';
import { studentsService } from './pupil.service';
describe('studentsService', () => {
    let service: studentsService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(studentsService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
});