console.log('Hello World!');
 // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '🌞';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙';
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '🌞' : '🌙';
        });
        
        // Form handling
        document.getElementById('prayerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for sharing your prayer request. Our team will pray for you.');
            this.reset();
        });
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon.');
            this.reset();
        });
        
        document.getElementById('subscribeForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our updates!');
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });