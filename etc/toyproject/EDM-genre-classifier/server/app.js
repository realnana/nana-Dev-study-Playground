const express = require('express');
const path = require('path');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const Meyda = require('meyda');
const wav = require('wav-decoder');
const ffmpeg = require('fluent-ffmpeg');
const { Readable } = require('stream');

const app = express();
const PORT = 3000;

// 파일 업로드 설정
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, '../public')));

// 홈 라우트
app.get('/', (req, res) => {
    res.render('index');
});

// 파일 업로드 및 분석 라우트
app.post('/upload', upload.single('audio'), async (req, res) => {
    try {
        const buffer = req.file.buffer;

        // MP3를 WAV로 변환
        const wavBuffer = await convertMp3ToWav(buffer);

        // WAV 파일 디코딩
        const audioData = await wav.decode(wavBuffer);

        // Meyda를 사용한 특징 추출
        const features = extractFeatures(audioData);

        // TensorFlow.js 모델 로드 및 예측
        const model = await tf.loadLayersModel('file://' + path.resolve(__dirname, '../models/model.json'));
        const paddedFeatures = padFeatures(features, 13, 174);
        const reshapedFeatures = tf.tensor(paddedFeatures).reshape([1, 13, 174, 1]);

        console.log('Reshaped Features:', reshapedFeatures.arraySync()); // 재구성된 특징 데이터를 출력하여 확인

        const prediction = model.predict(reshapedFeatures);
        const genreIndex = prediction.argMax(1).dataSync()[0];

        const genres = ['Drum and Bass', 'Dubstep', 'House', 'Techno', 'Trap EDM'];
        const result = genreIndex < genres.length ? `업로드한 음원의 장르는 "${genres[genreIndex]}" 장르입니다.` : '장르를 알 수 없어요!';

        res.json({ message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '오류가 발생했습니다.' });
    }
});

function convertMp3ToWav(buffer) {
    return new Promise((resolve, reject) => {
        const readable = new Readable();
        readable._read = () => {};
        readable.push(buffer);
        readable.push(null);

        const chunks = [];
        ffmpeg(readable)
            .toFormat('wav')
            .on('error', reject)
            .on('end', () => resolve(Buffer.concat(chunks)))
            .pipe()
            .on('data', chunk => chunks.push(chunk));
    });
}

function extractFeatures(audioData) {
    const channelData = audioData.channelData[0];
    const bufferSize = 512;

    const features = [];

    for (let i = 0; i < channelData.length; i += bufferSize) {
        if (i + bufferSize <= channelData.length) {
            const buffer = channelData.slice(i, i + bufferSize);
            const extractedFeatures = Meyda.extract(['rms', 'spectralCentroid', 'spectralFlatness'], buffer);
            features.push([
                extractedFeatures.rms,
                extractedFeatures.spectralCentroid,
                extractedFeatures.spectralFlatness
            ]);
        }
    }

    console.log('Extracted Features:', features); // 특징 데이터를 출력하여 확인
    return features;
}

function padFeatures(features, numRows, numCols) {
    const paddedFeatures = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            if (i < features.length && j < features[i].length) {
                row.push(features[i][j]);
            } else {
                row.push(0); // 패딩을 위해 0 추가
            }
        }
        paddedFeatures.push(row);
    }
    return paddedFeatures;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
