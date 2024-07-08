async function createModel() {
    const model = tf.sequential();

    model.add(tf.layers.conv2d({
        inputShape: [13, 174, 1],
        filters: 32,
        kernelSize: 3,
        activation: 'relu'
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
    model.add(tf.layers.conv2d({
        filters: 64,
        kernelSize: 3,
        activation: 'relu'
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 5, activation: 'softmax' }));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    return model;
}

async function trainModel(model, trainingData, trainingLabels) {
    const xs = tf.tensor4d(trainingData, [trainingData.length, 13, 174, 1]);
    const ys = tf.tensor2d(trainingLabels, [trainingLabels.length, 5]);

    await model.fit(xs, ys, {
        epochs: 50,
        batchSize: 32,
        validationSplit: 0.2,
        callbacks: tf.callbacks.earlyStopping({ patience: 5 })
    });

    return model;
}

async function loadModel() {
    try {
        const model = await tf.loadLayersModel('/path/to/your/model.json');
        return model;
    } catch (error) {
        console.error("Error loading the model: ", error);
    }
}

async function saveModel(model) {
    await model.save('localstorage://my-model');
}

async function runPrediction(features) {
    let model;
    try {
        model = await loadModel();
        if (!model) {
            model = await createModel();
            // Assume you have trainingData and trainingLabels available for training
            // model = await trainModel(model, trainingData, trainingLabels);
            await saveModel(model);
        }
    } catch (error) {
        console.error("Error during model creation or loading: ", error);
    }

    const mfcc = tf.tensor2d(features.mfcc, [1, features.mfcc.length, features.mfcc[0].length, 1]);

    const prediction = model.predict(mfcc);
    const genreIndex = prediction.argMax(1).dataSync()[0];

    const genres = ['Drum and Bass', 'Dubstep', 'House', 'Techno', 'Trap EDM'];
    document.getElementById('prediction').innerText = `Predicted genre: ${genres[genreIndex]}`;
}
