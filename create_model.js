const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

async function createModel() {
    const model = tf.sequential();
    model.add(tf.layers.conv2d({
        inputShape: [13, 174, 1],
        kernelSize: 3,
        filters: 32,
        activation: 'relu'
    }));
    model.add(tf.layers.maxPooling2d({poolSize: [2, 2]}));
    model.add(tf.layers.conv2d({
        kernelSize: 3,
        filters: 64,
        activation: 'relu'
    }));
    model.add(tf.layers.maxPooling2d({poolSize: [2, 2]}));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({units: 128, activation: 'relu'}));
    model.add(tf.layers.dense({units: 5, activation: 'softmax'}));

    model.compile({
        optimizer: tf.train.adam(),
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    // 학습 데이터 로드 및 전처리
    const data = loadTrainingData();
    const {inputs, labels} = preprocessData(data);

    // 데이터 분포 확인
    verifyDatasetDistribution(data);

    // 모델 학습
    await model.fit(inputs, labels, {
        epochs: 50,
        validationSplit: 0.2,
        callbacks: tf.callbacks.earlyStopping({monitor: 'val_loss'})
    });

    // 모델 저장
    await model.save('file://' + path.resolve(__dirname, '../models/model'));
}

function loadTrainingData() {
    const dataDir = path.resolve(__dirname, '../data/processed');
    const files = fs.readdirSync(dataDir);

    const data = [];
    for (const file of files) {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        data.push(JSON.parse(content));
    }
    return data;
}

function preprocessData(data) {
    const inputs = [];
    const labels = [];

    for (const item of data) {
        inputs.push(item.features);
        labels.push(item.label);
    }

    return {
        inputs: tf.tensor4d(inputs, [inputs.length, 13, 174, 1]),
        labels: tf.tensor2d(labels, [labels.length, 5])
    };
}

function verifyDatasetDistribution(data) {
    const genreCounts = data.reduce((acc, item) => {
        acc[item.label] = (acc[item.label] || 0) + 1;
        return acc;
    }, {});

    console.log('Dataset Distribution:', genreCounts);
}

createModel().catch(err => console.error(err));
