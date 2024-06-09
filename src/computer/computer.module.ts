import { Module } from '@nestjs/common';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';
import { ComouterController } from './computer.controller';
@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComouterController],
})
export class ComputerModule {}
