const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function() {
  const pdfUrl = 'my Resume``.pdf';
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
  const pdfUrl = 'my Resume``.pdf';
  const embedElement = document.createElement('embed');
  embedElement.src = pdfUrl;
  embedElement.width = '100%';
  embedElement.height = '600px';
  resumeContainer.innerHTML = '';
  resumeContainer.appendChild(embedElement);
});
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const rating = document.getElementById('rating').value;
  const feedback = document.getElementById('feedback').value;
  
  // Here, you can perform any action with the rating and feedback data, such as sending it to a server or storing it locally.
  
  alert('Thank you for your rating and feedback!');
  
  // Clear the form inputs
  document.getElementById('rating').value = '5';
  document.getElementById('feedback').value = '';
});
