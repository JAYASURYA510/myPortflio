const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function() {
  const pdfUrl = 'my Resume12.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const viewButton = document.getElementById('viewButton');
const resumeContainer = document.getElementById('resumeContainer');

viewButton.addEventListener('click', function() {
  const pdfUrl = 'my Resume12.pdf';
  const embedElement = document.createElement('embed');
  embedElement.src = pdfUrl;
  embedElement.width = '100%';
  embedElement.height = '600px';
  resumeContainer.innerHTML = '';
  resumeContainer.appendChild(embedElement);
});
