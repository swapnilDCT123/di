import { DiskService } from './../disk/disk.service';
import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';

@Controller('computer')
export class ComouterController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
