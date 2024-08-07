import { Test, TestingModule } from '@nestjs/testing';
import { TasxController } from './tasx.controller';
import { TasxService } from './tasx.service';

describe('TasxController', () => {
  let controller: TasxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasxController],
      providers: [TasxService],
    }).compile();

    controller = module.get<TasxController>(TasxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
