import { Test, TestingModule } from '@nestjs/testing';
import { ComouterController } from './comouter.controller';

describe('ComouterController', () => {
  let controller: ComouterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComouterController],
    }).compile();

    controller = module.get<ComouterController>(ComouterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
