const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function() {
  const pdfUrl = 'my resume.docx.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});