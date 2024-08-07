import { Test, TestingModule } from '@nestjs/testing';
import { TasxService } from './tasx.service';

describe('TasxService', () => {
  let service: TasxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasxService],
    }).compile();

    service = module.get<TasxService>(TasxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
