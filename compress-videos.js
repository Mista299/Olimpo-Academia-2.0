import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta absoluta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir directorios de entrada y salida
const inputDir = path.join(__dirname, 'src', 'videos');
const outputDir = path.join(__dirname, 'dist', 'videos');

// Crear la carpeta de destino si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar videos
const optimizeVideo = (input, output, format) => {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .output(output)
      .videoCodec(format === 'webm' ? 'libvpx-vp9' : 'libx264') // Codec para WebM o MP4
      .outputOptions(format === 'webm' ? ['-crf 30', '-b:v 0'] : ['-crf 28']) // Ajustar calidad para cada formato
      .on('end', () => {
        console.log(`Video optimizado: ${output}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error optimizando el video ${input}:`, err);
        reject(err);
      })
      .run();
  });
};

// Leer los archivos de la carpeta
fs.readdir(inputDir, (err, files) => {
  if (err) {
    return console.error('No se pudieron leer los archivos de la carpeta', err);
  }

  const videoFiles = files.filter((file) => path.extname(file) === '.mp4'); // Filtrar archivos de video MP4

  videoFiles.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFileMP4 = path.join(outputDir, file); // MP4
    const outputFileWebM = path.join(outputDir, file.replace('.mp4', '.webm')); // WebM

    // Optimizar tanto en MP4 como en WebM
    optimizeVideo(inputFilePath, outputFileMP4, 'mp4');
    optimizeVideo(inputFilePath, outputFileWebM, 'webm');
  });
});
