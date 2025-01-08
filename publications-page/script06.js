// JavaScript for Publications Page

// Filter publications by year or search query
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const yearFilter = document.getElementById('year-filter');
  const publicationsList = document.getElementById('publications-list');

  // Function to filter publications
  function filterPublications() {
    const query = searchBar.value.toLowerCase();
    const selectedYear = yearFilter.value;

    const publicationYears = publicationsList.querySelectorAll('.publication-year');

    publicationYears.forEach((yearSection) => {
      const year = yearSection.getAttribute('data-year');
      const articles = yearSection.querySelectorAll('li');

      let hasVisibleArticles = false;

      articles.forEach((article) => {
        const text = article.textContent.toLowerCase();
        const matchesQuery = query === '' || text.includes(query);
        const matchesYear = selectedYear === '' || year === selectedYear;

        if (matchesQuery && matchesYear) {
          article.style.display = 'flex';
          hasVisibleArticles = true;
        } else {
          article.style.display = 'none';
        }
      });

      // Show or hide the year section based on visible articles
      yearSection.style.display = hasVisibleArticles ? 'block' : 'none';
    });
  }

  // Event listeners for search and filter
  searchBar.addEventListener('input', filterPublications);
  yearFilter.addEventListener('change', filterPublications);
});

// Handle PDF view button clicks
document.addEventListener('DOMContentLoaded', () => {
  const pdfButtons = document.querySelectorAll('.view-pdf');

  pdfButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const pdfUrl = button.getAttribute('data-pdf');
      if (pdfUrl) {
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
      } else {
        console.error('PDF URL not found!');
      }
    });
  });
});
