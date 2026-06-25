document.addEventListener("DOMContentLoaded", function () {
  var tags = document.querySelector('.tags');
  var isDragging = false;
  var startX;
  var scrollLeft;
  tags.addEventListener('mousedown', function (e) {
    isDragging = true;
    tags.classList.add('dragging');
    startX = e.pageX - tags.offsetLeft;
    scrollLeft = tags.scrollLeft;
  });
  tags.addEventListener('mouseleave', function () {
    isDragging = false;
    tags.classList.remove('dragging');
  });
  tags.addEventListener('mouseup', function () {
    isDragging = false;
    tags.classList.remove('dragging');
  });
  tags.addEventListener('mousemove', function (e) {
    if (!isDragging) return; // Only run when dragging
    e.preventDefault();
    var x = e.pageX - tags.offsetLeft;
    var walk = (x - startX) * 2; // The scroll speed multiplier
    tags.scrollLeft = scrollLeft - walk;
  });
  function createSkeletonCard() {
    var card = document.createElement('div');
    card.className = 'skeleton-card';
    card.innerHTML = "\n      <div class=\"skeleton-image empty:block\"></div>\n      <div class=\"skeleton-content empty:block\">\n        <div class=\"skeleton-title empty:block\"></div>\n        <div class=\"skeleton-date empty:block\"></div>\n        <div class=\"skeleton-text empty:block\"></div>\n        <div class=\"skeleton-text empty:block\"></div>\n        <div class=\"skeleton-text empty:block\"></div>\n      </div>\n    ";
    return card;
  }
  // Listen for the enter key on the search input
  var currentPage = 1;
  // var totalPages = {{ paginate.pages }};
  var searchBox = document.getElementById('search-query');
  var nextBtn = document.getElementById('btn-next');
  var prevBtn = document.getElementById('btn-prev');
  function getSearchResult(searchQuery, page) {
    if (page === 1) {
      prevBtn.setAttribute('disabled', true);
    } else {
      prevBtn.removeAttribute('disabled');
    }
    if (page === totalPages) {
      nextBtn.setAttribute('disabled', true);
    } else {
      nextBtn.removeAttribute('disabled');
    }
    var blogListing = document.getElementById('blog-listing');
    blogListing.innerHTML = '';
    for (var i = 0; i < 6; i++) {
      blogListing.appendChild(createSkeletonCard());
    }
    if (searchQuery !== "") {
      var searchUrl = "/search?page=".concat(page, "&q={% if current_tags.size > 0 %}{{ current_tags }}+{% endif %}").concat(encodeURIComponent(searchQuery)); // Construct the search URL

      // Perform the fetch request
      fetch(searchUrl).then(function (response) {
        if (!response.ok) {
          throw new Error("Error fetching the search results: ".concat(response.statusText));
        }
        return response.text(); // Get the response as text (HTML)
      }).then(function (html) {
        // Create a temporary DOM element to parse the HTML response
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Find all <article> elements in the response
        var articles = tempDiv.querySelectorAll('article');

        // Convert the NodeList to an array
        var articlesArray = Array.from(articles);

        // Build the new HTML content from the articles array
        var newContent = "";
        articlesArray.forEach(function (article) {
          newContent += article.outerHTML;
        });

        // Replace the content inside the #blog-listing element with the new articles
        blogListing.innerHTML = newContent;
      }).catch(function (error) {
        console.error("Error fetching the search results: ", error);
      });
    }
  }
  nextBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of the button
    console.log(currentPage);
    if (currentPage < totalPages) {
      currentPage = currentPage + 1;
      getSearchResult(searchBox.value.trim() || '*', currentPage);
    }
  });
  prevBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of the button
    if (currentPage > 1) {
      currentPage = currentPage - 1;
      getSearchResult(searchBox.value.trim() || '*', currentPage);
    }
  });
  searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      var searchQuery = searchBox.value.trim() || '*'; // Get the value entered in the search box
      getSearchResult(searchQuery, 1);
    }
  });
});