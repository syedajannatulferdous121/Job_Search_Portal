// script.js

// Fetch job listings from JSON
fetch('jobListings.json')
  .then((response) => response.json())
  .then((data) => {
    // Parse the JSON data and generate job listing cards
    data.forEach((job) => {
      const card = document.createElement('div');
      card.classList.add('job-card');

      const title = document.createElement('h2');
      title.textContent = job.title;

      const company = document.createElement('p');
      company.textContent = job.company;

      const location = document.createElement('p');
      location.textContent = job.location;

      const salary = document.createElement('p');
      salary.textContent = job.salary;

      card.appendChild(title);
      card.appendChild(company);
      card.appendChild(location);
      card.appendChild(salary);

      jobListingContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.log('Error fetching job listings:', error);
  });

// Filter job listings with AJAX
const filterForm = document.querySelector('.filter-form');

filterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(filterForm);
  const filterData = {
    keyword: formData.get('keyword'),
    location: formData.get('location'),
    // Add more filter criteria as needed
  };

  // Send filter criteria to the server using AJAX
  fetch('/filter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filterData),
  })
    .then((response) => response.json())
    .then((filteredData) => {
      // Parse the filtered JSON response and update the job listing cards
      jobListingContainer.innerHTML = '';

      filteredData.forEach((job) => {
        // Generate job listing cards similar to the previous code snippet
      });
    })
    .catch((error) => {
      console.log('Error filtering job listings:', error);
    });
});
