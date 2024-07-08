document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('audio', document.querySelector('input[type="file"]').files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('result').textContent = result.message;

    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = URL.createObjectURL(document.querySelector('input[type="file"]').files[0]);
    audioPlayer.load();
});
