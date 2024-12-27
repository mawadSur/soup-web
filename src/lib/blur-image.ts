import { BLUR_DATA_URL } from '@/constant';
import sharp from 'sharp';

export async function processImage(url: string) {
  try {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const resizedBuffer = await sharp(buffer).resize(20).toBuffer();
    return {
      placeholder: `data:image/png;base64,${resizedBuffer.toString('base64')}`,
    };
  } catch {
    return { placeholder: BLUR_DATA_URL };
  }
}
