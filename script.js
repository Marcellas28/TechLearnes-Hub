// Sample data for materials
const materials = [
  {
    id: 1,
    title: "Mathematics Revision Guide",
    description: "Comprehensive revision materials for advanced mathematics including calculus, algebra, and statistics.",
    image: "https://placehold.co/300x200",
    category: "Mathematics",
    level: "Advanced",
    price: 29.99,
    previewContent: "This comprehensive mathematics revision guide covers advanced topics including:\n\n- Calculus: Limits, derivatives, integrals\n- Linear Algebra: Matrices, vector spaces\n- Statistics: Probability distributions, hypothesis testing\n\nThe full document contains detailed explanations, worked examples, and practice problems with solutions.",
    fullContent: "Full document content would be available after purchase."
  },
  {
    id: 2,
    title: "Physics Past Papers",
    description: "Complete exam preparation materials with past papers and detailed solutions for physics students.",
    image: "https://placehold.co/300x200",
    category: "Physics",
    level: "Intermediate",
    price: 24.99,
    previewContent: "This collection of physics past papers includes:\n\n- Mechanics: Forces, motion, energy\n- Electromagnetism: Fields, circuits\n- Waves: Sound, light, interference\n\nThe full document contains 10 complete past papers with detailed solutions and examiner comments.",
    fullContent: "Full document content would be available after purchase."
  },
  {
    id: 3,
    title: "Biology Study Guide",
    description: "In-depth study guides and practice questions covering all major biology topics for exam preparation.",
    image: "https://placehold.co/300x200",
    category: "Biology",
    level: "Beginner",
    price: 19.99,
    previewContent: "This biology study guide covers essential topics including:\n\n- Cell Biology: Structure and function\n- Genetics: DNA, inheritance\n- Ecology: Ecosystems, biodiversity\n\nThe full document includes comprehensive notes, diagrams, and practice questions with answers.",
    fullContent: "Full document content would be available after purchase."
  },
  {
    id: 4,
    title: "Chemistry Lab Manual",
    description: "Detailed laboratory manual with experiments and explanations for chemistry students.",
    image: "https://placehold.co/300x200",
    category: "Chemistry",
    level: "Intermediate",
    price: 22.99,
    previewContent: "This chemistry lab manual includes protocols for:\n\n- Titration experiments\n- Organic compound synthesis\n- Spectroscopy analysis\n\nThe full manual contains detailed procedures, safety guidelines, and result interpretation guides.",
    fullContent: "Full document content would be available after purchase."
  },
  {
    id: 5,
    title: "English Literature Analysis",
    description: "Critical analysis of classic literature works with sample essays and examination techniques.",
    image: "https://placehold.co/300x200",
    category: "English",
    level: "Advanced",
    price: 18.99,
    previewContent: "This literature analysis guide covers:\n\n- Shakespeare's major works\n- 19th century novels\n- Modern poetry analysis\n\nThe full document includes critical essays, analysis frameworks, and model exam answers.",
    fullContent: "Full document content would be available after purchase."
  },
  {
    id: 6,
    title: "History Revision Notes",
    description: "Comprehensive notes covering major historical events and periods with timeline summaries.",
    image: "https://placehold.co/300x200",
    category: "History",
    level: "Intermediate",
    price: 21.99,
    previewContent: "These history revision notes cover:\n\n- World War I and II\n- The Cold War era\n- Decolonization movements\n\nThe full document includes detailed timelines, key figure biographies, and exam-focused summaries.",
    fullContent: "Full document content would be available after purchase."
  },
];

// Sample data for purchased materials
const purchasedMaterials = [
  {
    id: 1,
    title: "Mathematics Revision Guide",
    description: "Comprehensive revision materials for advanced mathematics including calculus, algebra, and statistics.",
    image: "https://placehold.co/300x200",
    category: "Mathematics",
    level: "Advanced",
    purchaseDate: "2023-03-15",
  },
  {
    id: 3,
    title: "Biology Study Guide",
    description: "In-depth study guides and practice questions covering all major biology topics for exam preparation.",
    image: "https://placehold.co/300x200",
    category: "Biology",
    level: "Beginner",
    purchaseDate: "2023-02-28",
  },
];

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElements = document.querySelectorAll('#current-year');
  const currentYear = new Date().getFullYear();
  
  currentYearElements.forEach(element => {
    element.textContent = currentYear;
  });
  
  // Initialize page-specific functionality
  const currentPage = getCurrentPage();
  
  switch (currentPage) {
    case 'materials':
      initMaterialsPage();
      break;
    case 'material-detail':
      initMaterialDetailPage();
      break;
    case 'dashboard':
      initDashboardPage();
      break;
    case 'search':
      initSearchPage();
      break;
    case 'login':
      initLoginPage();
      break;
    case 'signup':
      initSignupPage();
      break;
  }
  
  // Initialize mobile menu toggle
  initMobileMenu();
  
  // Initialize dropdowns
  initDropdowns();
});

// Get current page based on URL
function getCurrentPage() {
  const path = window.location.pathname;
  
  if (path.includes('materials.html')) {
    return 'materials';
  } else if (path.includes('material-detail.html')) {
    return 'material-detail';
  } else if (path.includes('dashboard.html')) {
    return 'dashboard';
  } else if (path.includes('search.html')) {
    return 'search';
  } else if (path.includes('login.html')) {
    return 'login';
  } else if (path.includes('signup.html')) {
    return 'signup';
  } else {
    return 'home';
  }
}

// Initialize mobile menu toggle
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
}

// Initialize dropdowns
function initDropdowns() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = this.closest('.dropdown');
      dropdown.classList.toggle('active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown.active');
    
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });
  });
}

// Materials Page
function initMaterialsPage() {
  const materialsContainer = document.getElementById('materials-container');
  const materialsSearch = document.getElementById('materials-search');
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const noResults = document.getElementById('no-results');
  
  if (!materialsContainer) return;
  
  // Render all materials initially
  renderMaterials(materials, materialsContainer);
  
  // Add event listeners for filters
  if (materialsSearch) {
    materialsSearch.addEventListener('input', filterMaterials);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterMaterials);
  }
  
  if (levelFilter) {
    levelFilter.addEventListener('change', filterMaterials);
  }
  
  function filterMaterials() {
    const searchQuery = materialsSearch.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const levelValue = levelFilter.value;
    
    const filteredMaterials = materials.filter(material => {
      const matchesSearch = material.title.toLowerCase().includes(searchQuery) || 
                            material.description.toLowerCase().includes(searchQuery);
      const matchesCategory = categoryValue === 'all' || material.category === categoryValue;
      const matchesLevel = levelValue === 'all' || material.level === levelValue;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
    
    renderMaterials(filteredMaterials, materialsContainer);
    
    if (filteredMaterials.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }
}

// Render materials to container
function renderMaterials(materialsArray, container) {
  container.innerHTML = '';
  
  materialsArray.forEach(material => {
    const materialCard = document.createElement('div');
    materialCard.className = 'material-card';
    
    materialCard.innerHTML = `
      <div class="material-image">
        <img src="${material.image}" alt="${material.title}">
      </div>
      <div class="material-header">
        <div class="material-badges">
          <span class="badge badge-outline">${material.category}</span>
          <span class="badge badge-secondary">${material.level}</span>
        </div>
        <h3>${material.title}</h3>
        <p>${material.description}</p>
      </div>
      <div class="material-footer">
        <div class="material-price">$${material.price.toFixed(2)}</div>
        <a href="material-detail.html?id=${material.id}" class="btn btn-primary">View Details</a>
      </div>
    `;
    
    container.appendChild(materialCard);
  });
}

// Material Detail Page
function initMaterialDetailPage() {
  const materialId = new URLSearchParams(window.location.search).get('id');
  
  if (!materialId) return;
  
  const material = materials.find(m => m.id === parseInt(materialId));
  
  if (!material) {
    window.location.href = 'materials.html';
    return;
  }
  
  // Set material details
  document.getElementById('material-title').textContent = material.title;
  document.getElementById('material-description').textContent = material.description;
  document.getElementById('material-image').src = material.image;
  document.getElementById('material-image').alt = material.title;
  document.getElementById('material-price').textContent = `$${material.price.toFixed(2)}`;
  
  // Set badges
  const badgesContainer = document.getElementById('material-badges');
  badgesContainer.innerHTML = `
    <span class="badge badge-outline">${material.category}</span>
    <span class="badge badge-secondary">${material.level}</span>
  `;
  
  // Set preview content
  document.getElementById('preview-content').textContent = material.previewContent;
  document.getElementById('full-content-preview').textContent = material.fullContent;
  
  // Set details tab content
  document.getElementById('detail-category').textContent = material.category;
  document.getElementById('detail-level').textContent = material.level;
  
  // Set payment modal content
  document.getElementById('payment-item-name').textContent = material.title;
  document.getElementById('summary-item-name').textContent = material.title;
  document.getElementById('summary-price').textContent = `$${material.price.toFixed(2)}`;
  document.getElementById('summary-total').textContent = `$${material.price.toFixed(2)}`;
  
  // Check if material is already purchased
  const isPurchased = purchasedMaterials.some(m => m.id === material.id);
  
  if (isPurchased) {
    document.getElementById('purchase-section').style.display = 'none';
    document.getElementById('purchased-section').style.display = 'block';
    document.getElementById('locked-content').style.display = 'none';
    document.getElementById('full-content').style.display = 'block';
    
    // Set full content
    document.getElementById('full-content-text').innerHTML = `
      <p>${material.fullContent}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
    `;
  }
  
  // Load related materials
  const relatedMaterials = materials
    .filter(m => m.id !== material.id && m.category === material.category)
    .slice(0, 2);
  
  const relatedContainer = document.getElementById('related-materials-container');
  
  relatedMaterials.forEach(relatedMaterial => {
    const relatedCard = document.createElement('div');
    relatedCard.className = 'related-material-card';
    
    relatedCard.innerHTML = `
      <div class="related-material-image">
        <img src="${relatedMaterial.image}" alt="${relatedMaterial.title}">
      </div>
      <div class="related-material-content">
        <h4>${relatedMaterial.title}</h4>
        <p>${relatedMaterial.description}</p>
        <div class="related-material-footer">
          <span class="material-price">$${relatedMaterial.price.toFixed(2)}</span>
          <a href="material-detail.html?id=${relatedMaterial.id}" class="btn btn-outline btn-sm">View</a>
        </div>
      </div>
    `;
    
    relatedContainer.appendChild(relatedCard);
  });
  
  // Initialize tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and buttons
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked button and corresponding tab
      this.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // Initialize purchase buttons
  const purchaseButton = document.getElementById('purchase-button');
  const lockedPurchaseButton = document.getElementById('locked-purchase-button');
  const paymentModal = document.getElementById('payment-modal');
  const cancelPayment = document.getElementById('cancel-payment');
  const completePayment = document.getElementById('complete-payment');
  
  // Payment method tabs
  const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
  const cardPaymentForm = document.getElementById('card-payment-form');
  const mpesaPaymentForm = document.getElementById('mpesa-payment-form');
  
  paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'card') {
        cardPaymentForm.style.display = 'block';
        mpesaPaymentForm.style.display = 'none';
        document.getElementById('summary-payment-method').textContent = 'Credit/Debit Card';
      } else {
        cardPaymentForm.style.display = 'none';
        mpesaPaymentForm.style.display = 'block';
        document.getElementById('summary-payment-method').textContent = 'M-Pesa';
      }
    });
  });
  
  // Payment modal tabs
  const paymentTabButtons = document.querySelectorAll('.modal .tab-button');
  
  paymentTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and buttons
      document.querySelectorAll('.modal .tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.modal .tab-content').forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked button and corresponding tab
      this.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // Open payment modal
  function openPaymentModal() {
    paymentModal.classList.add('active');
  }
  
  // Close payment modal
  function closePaymentModal() {
    paymentModal.classList.remove('active');
  }
  
  // Complete purchase
  function completePurchase() {
    closePaymentModal();
    
    // Simulate loading
    const completeButton = document.getElementById('complete-payment');
    completeButton.textContent = 'Processing...';
    completeButton.disabled = true;
    
    setTimeout(() => {
      document.getElementById('purchase-section').style.display = 'none';
      document.getElementById('purchased-section').style.display = 'block';
      document.getElementById('locked-content').style.display = 'none';
      document.getElementById('full-content').style.display = 'block';
      
      // Set full content
      document.getElementById('full-content-text').innerHTML = `
        <p>${material.fullContent}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
      `;
      
      completeButton.textContent = 'Complete Purchase';
      completeButton.disabled = false;
    }, 1500);
  }
  
  if (purchaseButton) {
    purchaseButton.addEventListener('click', openPaymentModal);
  }
  
  if (lockedPurchaseButton) {
    lockedPurchaseButton.addEventListener('click', openPaymentModal);
  }
  
  if (cancelPayment) {
    cancelPayment.addEventListener('click', closePaymentModal);
  }
  
  if (completePayment) {
    completePayment.addEventListener('click', completePurchase);
  }
  
  // Download button
  const downloadButton = document.getElementById('download-button');
  
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      alert('Downloading PDF...');
    });
  }
}

// Dashboard Page
function initDashboardPage() {
  const purchasedContainer = document.getElementById('purchased-materials-container');
  const materialsCount = document.getElementById('materials-count');
  
  if (purchasedContainer) {
    // Render purchased materials
    purchasedMaterials.forEach(material => {
      const materialCard = document.createElement('div');
      materialCard.className = 'material-card';
      
      materialCard.innerHTML = `
        <div class="material-image">
          <img src="${material.image}" alt="${material.title}">
        </div>
        <div class="material-header">
          <div class="material-badges">
            <span class="badge badge-outline">${material.category}</span>
            <span class="badge badge-secondary">${material.level}</span>
          </div>
          <h3>${material.title}</h3>
          <p>Purchased on: ${new Date(material.purchaseDate).toLocaleDateString()}</p>
        </div>
        <div class="material-footer">
          <a href="material-detail.html?id=${material.id}" class="btn btn-outline">View Material</a>
          <button class="btn btn-primary download-btn"><i class="fas fa-download"></i> Download</button>
        </div>
      `;
      
      purchasedContainer.appendChild(materialCard);
    });
    
    // Add event listeners to download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Downloading PDF...');
      });
    });
  }
  
  if (materialsCount) {
    materialsCount.textContent = purchasedMaterials.length;
  }
  
  // Initialize dashboard tabs
  const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');
  
  sidebarNavItems.forEach(item => {
    item.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and nav items
      document.querySelectorAll('.sidebar-nav-item').forEach(navItem => navItem.classList.remove('active'));
      document.querySelectorAll('.dashboard-tab').forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked nav item and corresponding tab
      this.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // Sign out button
  const signOutButton = document.getElementById('sign-out-button');
  
  if (signOutButton) {
    signOutButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
}

// Search Page
function initSearchPage() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results-container');
  const searchResultsHeader = document.getElementById('search-results-header');
  const resultsCount = document.getElementById('results-count');
  const noResultsMessage = document.getElementById('no-results-message');
  const categorySection = document.getElementById('category-section');
  const categoryGrid = document.getElementById('category-grid');
  
  if (!searchForm || !searchResultsContainer) return;
  
  // Initialize category grid
  if (categoryGrid) {
    const categories = {};
    
    materials.forEach(material => {
      if (!categories[material.category]) {
        categories[material.category] = 0;
      }
      categories[material.category]++;
    });
    
    for (const category in categories) {
      const categoryCard = document.createElement('a');
      categoryCard.className = 'category-card';
      categoryCard.href = `materials.html?category=${category}`;
      
      categoryCard.innerHTML = `
        <span>${category}</span>
        <span>${categories[category]} items</span>
      `;
      
      categoryGrid.appendChild(categoryCard);
    }
  }
  
  // Handle search form submission
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchQuery = searchInput.value.toLowerCase();
    
    if (!searchQuery.trim()) {
      searchResultsHeader.style.display = 'none';
      searchResultsContainer.innerHTML = '';
      categorySection.style.display = 'block';
      return;
    }
    
    // Filter materials based on search query
    const searchResults = materials.filter(material => {
      return material.title.toLowerCase().includes(searchQuery) || 
             material.description.toLowerCase().includes(searchQuery) ||
             material.category.toLowerCase().includes(searchQuery);
    });
    
    // Display search results
    searchResultsHeader.style.display = 'block';
    
    if (searchResults.length === 0) {
      resultsCount.textContent = 'No results found';
      noResultsMessage.style.display = 'block';
      searchResultsContainer.innerHTML = '';
    } else {
      resultsCount.textContent = `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`;
      noResultsMessage.style.display = 'none';
      renderMaterials(searchResults, searchResultsContainer);
    }
    
    // Hide category section when showing search results
    categorySection.style.display = searchResults.length === 0 ? 'block' : 'none';
  });
}

// Login Page
function initLoginPage() {
  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const googleLoginButton = document.getElementById('google-login-button');
  const errorAlert = document.getElementById('error-alert');
  const errorMessage = document.getElementById('error-message');
  
  if (!loginForm) return;
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
      showError('Please fill in all fields');
      return;
    }
    
    // Simulate login
    loginButton.textContent = 'Signing in...';
    loginButton.disabled = true;
    
    setTimeout(() => {
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    }, 1500);
  });
  
  if (googleLoginButton) {
    googleLoginButton.addEventListener('click', function() {
      // Simulate Google login
      googleLoginButton.textContent = 'Loading...';
      googleLoginButton.disabled = true;
      
      setTimeout(() => {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      }, 1500);
    });
  }
  
  function showError(message) {
    errorMessage.textContent = message;
    errorAlert.style.display = 'flex';
  }
}

// Signup Page
function initSignupPage() {
  const signupForm = document.getElementById('signup-form');
  const signupButton = document.getElementById('signup-button');
  const googleSignupButton = document.getElementById('google-signup-button');
  const errorAlert = document.getElementById('error-alert');
  const errorMessage = document.getElementById('error-message');
  
  if (!signupForm) return;
  
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      showError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      showError('Passwords do not match');
      return;
    }
    
    // Simulate signup
    signupButton.textContent = 'Creating account...';
    signupButton.disabled = true;
    
    setTimeout(() => {
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    }, 1500);
  });
  
  if (googleSignupButton) {
    googleSignupButton.addEventListener('click', function() {
      // Simulate Google signup
      googleSignupButton.textContent = 'Loading...';
      googleSignupButton.disabled = true;
      
      setTimeout(() => {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      }, 1500);
    });
  }
  
  function showError(message) {
    errorMessage.textContent = message;
    errorAlert.style.display = 'flex';
  }
}