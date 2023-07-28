import { Test, TestingModule } from '@nestjs/testing';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';

describe('QrCodeController', () => {
  let controller: QrCodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QrCodeController],
      providers: [QrCodeService],
    }).compile();

    controller = app.get<QrCodeController>(QrCodeController);
  });

  describe('QR Code', () => {
    it('should returns image tag', async () => {
      const result = await controller.generateQrCode('Test');
      expect(result).toMatch(/<img(\s+)src=\"(.+?)\"(\s+)alt=\"(.+?)\" \/>/);
    });
  });
});
