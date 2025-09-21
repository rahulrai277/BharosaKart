// Application Data with Real Unsplash Images
const appData = {
    products: [
        {
            id: 1,
            name: "Premium Smartphone Pro Max",
            category: "Electronics", 
            price: 25999,
            originalPrice: 29999,
            images: [
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1574944985070-8f3ebc6b5956?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop"
            ],
            description: "Latest flagship smartphone with 108MP triple camera, 5000mAh battery, 120Hz OLED display, and 12GB RAM. Perfect for photography, gaming, and productivity.",
            stock: 50,
            rating: 4.8,
            reviews: 156,
            features: ["108MP Triple Camera", "5000mAh Battery", "120Hz OLED Display", "12GB RAM + 256GB Storage", "5G Ready"],
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "Wireless Bluetooth Headphones",
            category: "Electronics",
            price: 3999,
            originalPrice: 5999,
            images: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1608156639585-b3beaaef4f30?w=400&h=400&fit=crop"
            ],
            description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
            stock: 30,
            rating: 4.6,
            reviews: 89,
            features: ["Active Noise Cancellation", "30H Battery Life", "Premium Sound Quality", "Bluetooth 5.0", "Quick Charge"],
            badge: "Popular"
        },
        {
            id: 3,
            name: "Premium Cotton T-Shirt",
            category: "Fashion",
            price: 899,
            originalPrice: 1299,
            images: [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1583743814966-8936f37f82e0?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1622445275576-721325763edd?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop"
            ],
            description: "100% premium organic cotton t-shirt with perfect fit and superior comfort. Available in multiple colors and sizes.",
            stock: 100,
            rating: 4.3,
            reviews: 124,
            features: ["100% Organic Cotton", "Pre-shrunk", "Comfortable Fit", "Multiple Colors", "Eco-friendly"],
            badge: "Sale"
        },
        {
            id: 4,
            name: "Smart Watch Pro",
            category: "Electronics",
            price: 8999,
            originalPrice: 12999,
            images: [
                "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop"
            ],
            description: "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Perfect companion for active lifestyle.",
            stock: 25,
            rating: 4.7,
            reviews: 78,
            features: ["Health Monitoring", "GPS Tracking", "7-Day Battery", "Water Resistant", "Multiple Sports Modes"],
            badge: "New"
        },
        {
            id: 5,
            name: "Automatic Coffee Maker Deluxe",
            category: "Home & Garden",
            price: 4500,
            originalPrice: 6500,
            images: [
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=400&h=400&fit=crop"
            ],
            description: "Premium automatic coffee maker with programmable settings, thermal carafe, and built-in grinder for the perfect cup every time.",
            stock: 15,
            rating: 4.5,
            reviews: 67,
            features: ["Programmable Timer", "Built-in Grinder", "Thermal Carafe", "Auto Shut-off", "12-Cup Capacity"],
            badge: "Premium"
        },
        {
            id: 6,
            name: "Professional Running Shoes",
            category: "Sports",
            price: 5999,
            originalPrice: 7999,
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop"
            ],
            description: "High-performance running shoes with advanced cushioning technology, breathable mesh, and superior grip for all terrains.",
            stock: 60,
            rating: 4.4,
            reviews: 145,
            features: ["Advanced Cushioning", "Breathable Mesh", "All-Terrain Grip", "Lightweight Design", "Durable Construction"],
            badge: "Trending"
        },
        {
            id: 7,
            name: "Complete Programming Guide 2025",
            category: "Books",
            price: 1499,
            originalPrice: 1999,
            images: [
                "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop"
            ],
            description: "Comprehensive programming guide covering Python, JavaScript, React, and modern development practices. Perfect for beginners to advanced developers.",
            stock: 40,
            rating: 4.9,
            reviews: 89,
            features: ["800+ Pages", "Practical Examples", "Latest Technologies", "Expert Authors", "Online Resources"],
            badge: "Educational"
        },
        {
            id: 8,
            name: "Ultra-Thin Laptop Pro",
            category: "Electronics",
            price: 45999,
            originalPrice: 52999,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop"
            ],
            description: "Ultra-thin laptop with powerful performance, 16GB RAM, 512GB SSD, and all-day battery life. Perfect for professionals and creators.",
            stock: 20,
            rating: 4.6,
            reviews: 94,
            features: ["Intel i7 Processor", "16GB RAM", "512GB SSD", "14-inch 4K Display", "All-day Battery"],
            badge: "Professional"
        }
    ],
    categories: [
        {"id": 1, "name": "Electronics", "icon": "fas fa-laptop", "count": 28},
        {"id": 2, "name": "Fashion", "icon": "fas fa-tshirt", "count": 42},
        {"id": 3, "name": "Home & Garden", "icon": "fas fa-home", "count": 35},
        {"id": 4, "name": "Sports", "icon": "fas fa-dumbbell", "count": 31},
        {"id": 5, "name": "Books", "icon": "fas fa-book", "count": 18}
    ],
    testimonials: [
        {
            id: 1,
            name: "Priya Sharma",
            text: "Amazing quality products and lightning-fast delivery! The pay on delivery option is so convenient. Highly recommended!",
            rating: 5,
            location: "Mumbai",
            image: "https://images.unsplash.com/photo-1494790108755-2616c64a7ed9?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 2, 
            name: "Rajesh Kumar",
            text: "Excellent customer service and genuine products. The website is so easy to use and the checkout process is seamless!",
            rating: 5,
            location: "Delhi", 
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Anita Singh", 
            text: "Love shopping here! Great product variety, competitive prices, and reliable delivery. The pay on delivery feature is fantastic!",
            rating: 5,
            location: "Bangalore",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        }
    ],
    faqSections: [
        {
            title: "Payment & Delivery",
            icon: "fas fa-credit-card",
            questions: [
                {
                    question: "Do you accept Pay on Delivery?",
                    answer: "Yes! We offer Pay on Delivery (COD) for all orders. You can pay in cash when your order is delivered to your doorstep."
                },
                {
                    question: "What are the delivery charges?",
                    answer: "We offer free delivery on orders above ₹999. For orders below ₹999, delivery charges are ₹99."
                },
                {
                    question: "How long does delivery take?",
                    answer: "Standard delivery takes 3-5 business days. Express delivery (1-2 days) is available for select cities."
                },
                {
                    question: "Which areas do you deliver to?",
                    answer: "We deliver pan-India to all major cities and towns. Remote areas may take additional 1-2 days."
                }
            ]
        },
        {
            title: "Orders & Returns",
            icon: "fas fa-box",
            questions: [
                {
                    question: "How can I track my order?",
                    answer: "You'll receive a tracking link via email once your order is shipped. You can also track from your account dashboard."
                },
                {
                    question: "Can I cancel my order?",
                    answer: "Orders can be cancelled within 24 hours of placement. After that, you can return the product once delivered."
                },
                {
                    question: "What is your return policy?",
                    answer: "We offer 7-day return policy for most products. Items should be in original condition with tags intact."
                },
                {
                    question: "How do I return a product?",
                    answer: "Contact our support team or raise a return request from your account. We'll arrange pickup from your address."
                }
            ]
        },
        {
            title: "Product & Quality",
            icon: "fas fa-star",
            questions: [
                {
                    question: "Are your products genuine?",
                    answer: "Yes, all our products are 100% genuine and come with manufacturer warranty where applicable."
                },
                {
                    question: "Do you provide warranty?",
                    answer: "Electronic items come with manufacturer warranty. Other products have our quality guarantee."
                },
                {
                    question: "What if I receive a damaged product?",
                    answer: "We'll immediately replace damaged products at no extra cost. Just contact us within 48 hours of delivery."
                },
                {
                    question: "Can I exchange a product?",
                    answer: "Yes, exchanges are possible for size/color issues within 7 days of delivery for fashion items."
                }
            ]
        }
    ],
    contactInfo: {
        email: "rkrnauheed1995@gmail.com",
        phone: "7992312959",
        address: "New Delhi, India",
        portfolio: "https://portfolio-rahulrai.netlify.app/",
        businessHours: "Mon-Sat: 9 AM - 8 PM",
        supportEmail: "rkrnauheed1995@gmail.com"
    },
    themes: [
        {
            name: "blue",
            displayName: "Blue Professional", 
            primary: "#007bff",
            secondary: "#0056b3",
            accent: "#17a2b8",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            text: "#333333",
            particles: ["#007bff", "#17a2b8", "#6610f2"]
        },
        {
            name: "dark",
            displayName: "Dark Theme",
            primary: "#00d4aa",
            secondary: "#333333",
            accent: "#ff6b6b",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            text: "#ffffff",
            particles: ["#00d4aa", "#ff6b6b", "#4ecdc4"]
        },
        {
            name: "orange",
            displayName: "Orange Creative",
            primary: "#fd7e14",
            secondary: "#e55a00",
            accent: "#ffc107",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            text: "#333333", 
            particles: ["#fd7e14", "#ffc107", "#dc3545"]
        },
        {
            name: "purple",
            displayName: "Purple Modern",
            primary: "#6f42c1",
            secondary: "#5a32a3",
            accent: "#e83e8c",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            text: "#333333",
            particles: ["#6f42c1", "#e83e8c", "#fd7e14"]
        }
    ],
    emailjsConfig: {
        serviceId: "service_8eb5du5",
        templateId: "template_fcvyyha", 
        publicKey: "N0Zw19M_fhv4Lmbkp"
    }
};

// Application State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentTheme = localStorage.getItem('theme') || 'blue';
let filteredProducts = [...appData.products];
let currentFilter = 'all';
let currentSort = 'name';
let particleSystem = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing  BharosaKart application...');
    
    // Initialize EmailJS
    emailjs.init(appData.emailjsConfig.publicKey);
    
    // Apply saved theme
    applyTheme(currentTheme);
    
    // Initialize advanced particle system with delay to ensure canvas is ready
    setTimeout(() => {
        initializeAdvancedParticles();
    }, 100);
    
    // Load initial content
    loadFeaturedProducts();
    loadProducts();
    loadTestimonials();
    loadFAQ();
    updateCartBadge();
    
    // Initialize event listeners
    setupEventListeners();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Show welcome toast
    setTimeout(() => {
        showToast('Welcome to BharosaKart! Enjoy shopping with Pay on Delivery option.', 'success');
    }, 1000);
    
    console.log('Application initialized successfully');
}

// Advanced Particle System with Geometric Shapes
function initializeAdvancedParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) {
        console.error('Particles canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Cannot get canvas context');
        return;
    }
    
    console.log('Initializing advanced particle system...');
    
    let particles = [];
    let shapes = [];
    let mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };
    let animationId;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
    }
    
    // Particle class
    class Particle {
        constructor() {
            const currentThemeData = appData.themes.find(t => t.name === currentTheme);
            const colors = currentThemeData ? currentThemeData.particles : ['#007bff', '#17a2b8', '#6610f2'];
            
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 2;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.6 + 0.4;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off walls
            if (this.x <= 0 || this.x >= canvas.width) {
                this.speedX *= -1;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
            }
            if (this.y <= 0 || this.y >= canvas.height) {
                this.speedY *= -1;
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }
            
            // Mouse interaction
            const mouseDistance = Math.sqrt(
                Math.pow(mousePosition.x - this.x, 2) + Math.pow(mousePosition.y - this.y, 2)
            );
            
            if (mouseDistance < 150) {
                const force = (150 - mouseDistance) / 150;
                const angle = Math.atan2(this.y - mousePosition.y, this.x - mousePosition.x);
                this.speedX += Math.cos(angle) * force * 0.02;
                this.speedY += Math.sin(angle) * force * 0.02;
            }
            
            // Apply drag
            this.speedX *= 0.99;
            this.speedY *= 0.99;
            
            // Pulsing effect
            this.pulsePhase += this.pulseSpeed;
        }
        
        draw() {
            const pulseFactor = Math.sin(this.pulsePhase) * 0.3 + 1;
            const drawSize = this.size * pulseFactor;
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, drawSize, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity * (0.7 + Math.sin(this.pulsePhase) * 0.3);
            ctx.fill();
            
            // Add glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
    // Geometric Shape class
    class GeometricShape {
        constructor() {
            const currentThemeData = appData.themes.find(t => t.name === currentTheme);
            const colors = currentThemeData ? currentThemeData.particles : ['#007bff', '#17a2b8', '#6610f2'];
            
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 40 + 20;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.rotation = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 0.03;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.15 + 0.05;
            this.type = Math.floor(Math.random() * 4); // 0: triangle, 1: square, 2: hexagon, 3: circle
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;
            this.pulsePhase += this.pulseSpeed;
            
            // Wrap around screen
            if (this.x < -this.size) this.x = canvas.width + this.size;
            if (this.x > canvas.width + this.size) this.x = -this.size;
            if (this.y < -this.size) this.y = canvas.height + this.size;
            if (this.y > canvas.height + this.size) this.y = -this.size;
        }
        
        draw() {
            const pulseFactor = Math.sin(this.pulsePhase) * 0.2 + 1;
            const drawSize = this.size * pulseFactor;
            
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity * (0.8 + Math.sin(this.pulsePhase) * 0.2);
            
            ctx.beginPath();
            
            switch(this.type) {
                case 0: // Triangle
                    ctx.moveTo(0, -drawSize);
                    ctx.lineTo(-drawSize * 0.866, drawSize * 0.5);
                    ctx.lineTo(drawSize * 0.866, drawSize * 0.5);
                    break;
                case 1: // Square
                    ctx.rect(-drawSize/2, -drawSize/2, drawSize, drawSize);
                    break;
                case 2: // Hexagon
                    for(let i = 0; i < 6; i++) {
                        const angle = (i * Math.PI) / 3;
                        const x = drawSize * 0.5 * Math.cos(angle);
                        const y = drawSize * 0.5 * Math.sin(angle);
                        if(i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    break;
                case 3: // Circle
                    ctx.arc(0, 0, drawSize * 0.5, 0, Math.PI * 2);
                    break;
            }
            
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
    
    function initParticles() {
        particles = [];
        shapes = [];
        
        const particleCount = Math.min(100, Math.max(30, Math.floor((canvas.width * canvas.height) / 12000)));
        const shapeCount = Math.min(20, Math.max(5, Math.floor((canvas.width * canvas.height) / 40000)));
        
        console.log(`Creating ${particleCount} particles and ${shapeCount} shapes`);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        for (let i = 0; i < shapeCount; i++) {
            shapes.push(new GeometricShape());
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = particles[i].color;
                    ctx.globalAlpha = 0.2 * (1 - distance / 150);
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
    }
    
    function animate() {
        // Clear canvas with slight trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw shapes first (background layer)
        shapes.forEach(shape => {
            shape.update();
            shape.draw();
        });
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Connect particles
        connectParticles();
        
        animationId = requestAnimationFrame(animate);
    }
    
    function startParticleSystem() {
        console.log('Starting particle system...');
        resizeCanvas();
        initParticles();
        animate();
    }
    
    function stopParticleSystem() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            console.log('Particle system stopped');
        }
    }
    
    // Event listeners
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    
    // Enhanced mouse interaction
    let isMouseTracking = false;
    
    canvas.addEventListener('mouseenter', () => {
        isMouseTracking = true;
    });
    
    canvas.addEventListener('mouseleave', () => {
        isMouseTracking = false;
        // Smoothly return mouse position to center
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isMouseTracking) {
            const rect = canvas.getBoundingClientRect();
            mousePosition.x = e.clientX - rect.left;
            mousePosition.y = e.clientY - rect.top;
        }
    });
    
    // Touch support for mobile
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isMouseTracking = true;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mousePosition.x = touch.clientX - rect.left;
        mousePosition.y = touch.clientY - rect.top;
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (isMouseTracking && e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mousePosition.x = touch.clientX - rect.left;
            mousePosition.y = touch.clientY - rect.top;
        }
    });
    
    canvas.addEventListener('touchend', () => {
        isMouseTracking = false;
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
    });
    
    startParticleSystem();
    
    particleSystem = {
        start: startParticleSystem,
        stop: stopParticleSystem,
        updateTheme: () => {
            console.log('Updating particle theme to:', currentTheme);
            initParticles();
        }
    };
    
    console.log('Advanced particle system initialized successfully');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme switcher
    const themeToggle = document.getElementById('themeToggle');
    const themeOptions = document.getElementById('themeOptions');
    
    if (themeToggle && themeOptions) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            themeOptions.classList.toggle('active');
        });
        
        // Close theme options when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.theme-switcher')) {
                themeOptions.classList.remove('active');
            }
        });
        
        // Theme selection
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const theme = btn.dataset.theme;
                applyTheme(theme);
                
                // Update active button
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                themeOptions.classList.remove('active');
                showToast(`Theme changed to ${btn.textContent}!`, 'success');
            });
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Category filters
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const category = btn.dataset.category;
            filterProducts(category);
            
            // Update active button for filter buttons
            if (btn.classList.contains('btn-outline-primary')) {
                document.querySelectorAll('.category-filters .btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            e.stopPropagation();
            sortProducts(sortSelect.value);
        });
    }
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showCart();
        });
    }
    
    // Contact form - Enhanced with better input handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Fix input field focus issues
        const contactInputs = contactForm.querySelectorAll('input, textarea');
        contactInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--theme-primary)';
                this.style.borderColor = 'var(--theme-primary)';
            });
            
            input.addEventListener('blur', function() {
                this.style.outline = 'none';
                this.style.borderColor = 'var(--color-border)';
            });
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleContactForm(e);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNewsletter(e);
        });
    }
    
    // Checkout functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showCheckout();
        });
    }
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            processOrder();
        });
    }
    
    console.log('Event listeners set up successfully');
}

// Toast Notification System (Replaces all alerts)
function showToast(message, type = 'info', duration = 4000) {
    const toast = document.getElementById('toastNotification');
    const toastBody = document.getElementById('toastBody');
    
    if (!toast || !toastBody) {
        console.error('Toast elements not found');
        return;
    }
    
    // Set toast content and style
    toastBody.textContent = message;
    toast.className = `toast align-items-center border-0 toast-${type}`;
    
    // Show toast
    const toastBootstrap = new bootstrap.Toast(toast, {
        delay: duration
    });
    toastBootstrap.show();
}

// Global functions for cart operations
window.addToCart = function(productId) {
    event?.stopPropagation();
    const product = appData.products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showToast('Product not available or out of stock!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            showToast(`${product.name} quantity updated in cart!`, 'success');
        } else {
            showToast('Cannot add more items. Stock limit reached.', 'error');
            return;
        }
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            category: product.category,
            quantity: 1,
            image: product.images[0]
        });
        showToast(`${product.name} added to cart!`, 'success');
    }
    
    saveCart();
    updateCartBadge();
};

window.showProductDetails = function(productId) {
    event?.stopPropagation();
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = product.name;
    
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    document.getElementById('productModalBody').innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="product-gallery">
                    <img src="${product.images[0]}" class="main-product-image" id="mainProductImage" alt="${product.name}" 
                         style="width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
                    <div class="gallery-thumbnails" style="display: flex; gap: 10px; margin-top: 15px; overflow-x: auto; padding: 10px 0;">
                        ${product.images.map((img, index) => `
                            <img src="${img}" class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                                 onclick="changeMainImage('${img}', this)" alt="Product image ${index + 1}"
                                 style="width: 80px; height: 80px; object-fit: cover; border-radius: var(--radius-base); cursor: pointer; 
                                        border: 2px solid ${index === 0 ? 'var(--theme-primary)' : 'transparent'}; transition: all 0.3s ease;">
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="rating mb-3">
                    ${generateStars(product.rating)}
                    <span class="text-muted ms-2">(${product.rating} stars • ${product.reviews} reviews)</span>
                </div>
                <div class="pricing mb-3">
                    <span class="h4 text-primary me-3">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="text-muted text-decoration-line-through">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                    ${discount > 0 ? `<span class="badge bg-danger ms-2">${discount}% OFF</span>` : ''}
                </div>
                <p class="mb-3">${product.description}</p>
                <div class="mb-3">
                    <h6><i class="fas fa-star text-warning me-2"></i>Key Features:</h6>
                    <ul class="list-unstyled ms-4">
                        ${product.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="mb-3">
                    <span class="badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}">
                        ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                </div>
                <div class="quantity-selector mb-3">
                    <label class="form-label fw-bold">Quantity:</label>
                    <div class="input-group" style="max-width: 150px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="event.stopPropagation(); updateQuantity('product-qty', -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="form-control text-center" id="product-qty" value="1" min="1" max="${product.stock}">
                        <button class="btn btn-outline-secondary" type="button" onclick="event.stopPropagation(); updateQuantity('product-qty', 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary btn-lg" onclick="event.stopPropagation(); addToCartWithQuantity(${product.id})" 
                            ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-primary" onclick="event.stopPropagation(); buyNow(${product.id})">
                        <i class="fas fa-bolt me-2"></i>Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
};

window.changeMainImage = function(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
        
        // Update active thumbnail
        document.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
            thumb.style.borderColor = 'transparent';
            thumb.classList.remove('active');
        });
        thumbnail.style.borderColor = 'var(--theme-primary)';
        thumbnail.classList.add('active');
    }
};

window.updateQuantity = function(inputId, change) {
    event?.stopPropagation();
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const currentValue = parseInt(input.value) || 1;
    const maxValue = parseInt(input.max) || 999;
    const newValue = Math.max(1, Math.min(maxValue, currentValue + change));
    input.value = newValue;
};

window.addToCartWithQuantity = function(productId) {
    event?.stopPropagation();
    const quantityInput = document.getElementById('product-qty');
    const quantity = parseInt(quantityInput?.value) || 1;
    const product = appData.products.find(p => p.id === productId);
    
    if (!product || product.stock === 0) {
        showToast('Product not available or out of stock!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= product.stock) {
            existingItem.quantity = newQuantity;
            showToast(`${product.name} quantity updated in cart!`, 'success');
        } else {
            showToast('Cannot add more items. Stock limit reached.', 'error');
            return;
        }
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            category: product.category,
            quantity: quantity,
            image: product.images[0]
        });
        showToast(`${product.name} added to cart!`, 'success');
    }
    
    saveCart();
    updateCartBadge();
    
    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    if (modal) modal.hide();
};

window.buyNow = function(productId) {
    event?.stopPropagation();
    addToCartWithQuantity(productId);
    setTimeout(() => {
        showCart();
        setTimeout(() => {
            showCheckout();
        }, 500);
    }, 300);
};

window.updateCartItemQuantity = function(itemId, change) {
    event?.stopPropagation();
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    const product = appData.products.find(p => p.id === itemId);
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(itemId);
    } else if (newQuantity <= product.stock) {
        item.quantity = newQuantity;
        saveCart();
        updateCartBadge();
        showCart(); // Refresh cart display
    } else {
        showToast('Cannot add more items. Stock limit reached.', 'error');
    }
};

window.removeFromCart = function(itemId) {
    event?.stopPropagation();
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartBadge();
    showCart(); // Refresh cart display
    showToast('Item removed from cart!', 'success');
};

// Theme Management
function applyTheme(theme) {
    console.log('Applying theme:', theme);
    
    // Remove existing theme classes
    document.body.classList.remove(...Array.from(document.body.classList).filter(cls => cls.startsWith('theme-')));
    
    // Apply new theme
    document.body.classList.add(`theme-${theme}`);
    
    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // Update particle system if initialized
    if (particleSystem) {
        particleSystem.updateTheme();
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

// Product Management
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = appData.products.slice(0, 3);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function loadProducts() {
    const container = document.getElementById('productGrid');
    if (!container) return;
    
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Setup scroll animations for new products
    setupScrollAnimations();
}

function createProductCard(product) {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card product-card h-100 fade-in-up card-hover">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                ${discount > 0 ? `<div class="position-absolute top-0 start-0 m-2 z-2"><span class="badge bg-danger">${discount}% OFF</span></div>` : ''}
                <div class="product-image" style="background-image: url('${product.images[0]}'); background-size: cover; background-position: center; height: 250px; position: relative;">
                    <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; 
                                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                                transform: rotate(45deg); transition: all 0.6s ease; opacity: 0;"
                         class="product-shimmer"></div>
                </div>
                <div class="card-body product-info d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small mb-2">
                        <i class="fas fa-tag me-1"></i>${product.category}
                    </p>
                    <p class="card-text flex-grow-1">${product.description.substring(0, 80)}...</p>
                    <div class="mb-2">
                        <div class="rating mb-2">
                            ${generateStars(product.rating)}
                            <span class="text-muted small ms-1">(${product.rating})</span>
                        </div>
                        <div class="pricing mb-2">
                            <span class="product-price h6">₹${product.price.toLocaleString()}</span>
                            ${product.originalPrice ? `<span class="text-muted small text-decoration-line-through ms-2">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                        <div class="mb-2">
                            <small class="${product.stock > 0 ? 'text-success' : 'text-danger'}">
                                <i class="fas ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'} me-1"></i>
                                ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                            </small>
                        </div>
                    </div>
                    <div class="mt-auto">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                                <i class="fas fa-eye me-1"></i> View Details
                            </button>
                            <button class="btn btn-outline-primary btn-sm" onclick="event.stopPropagation(); addToCart(${product.id})" 
                                    ${product.stock === 0 ? 'disabled' : ''}>
                                <i class="fas fa-cart-plus me-1"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

// Search and Filter
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        filteredProducts = [...appData.products];
    } else {
        filteredProducts = appData.products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.features.some(feature => feature.toLowerCase().includes(query))
        );
    }
    
    loadProducts();
    
    // Show results count
    if (query !== '') {
        showToast(`Found ${filteredProducts.length} product(s) matching "${query}"`, 'info');
    }
}

function filterProducts(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredProducts = [...appData.products];
    } else {
        filteredProducts = appData.products.filter(product => product.category === category);
    }
    
    sortProducts(currentSort);
    loadProducts();
    
    // Show filter info
    showToast(`Showing ${filteredProducts.length} product(s) in ${category === 'all' ? 'all categories' : category}`, 'info');
    
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function sortProducts(sortBy) {
    currentSort = sortBy;
    
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
        default:
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    loadProducts();
}

// Cart Management
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = totalItems;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fs-1 text-muted mb-3"></i>
                <h5>Your cart is empty</h5>
                <p class="text-muted">Add some products to get started</p>
            </div>
        `;
        cartTotal.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => createCartItem(item)).join('');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
    }
    
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
}

function createCartItem(item) {
    const totalPrice = item.price * item.quantity;
    
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-right: 1rem;">
            <div class="cart-item-info">
                <h6 class="mb-1">${item.name}</h6>
                <p class="text-muted small mb-1">
                    <i class="fas fa-tag me-1"></i>${item.category}
                </p>
                <p class="text-primary fw-bold mb-0">₹${item.price.toLocaleString()} each</p>
                <p class="text-success small mb-0">Total: ₹${totalPrice.toLocaleString()}</p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="event.stopPropagation(); updateCartItemQuantity(${item.id}, -1)" title="Decrease quantity">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="mx-3 fw-bold">${item.quantity}</span>
                <button class="quantity-btn" onclick="event.stopPropagation(); updateCartItemQuantity(${item.id}, 1)" title="Increase quantity">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger ms-3" onclick="event.stopPropagation(); removeFromCart(${item.id})" title="Remove from cart">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

// Checkout Process
function showCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    const checkoutSummary = document.getElementById('checkoutSummary');
    if (!checkoutSummary) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 999 ? 0 : 99;
    const finalTotal = subtotal + shipping;
    
    checkoutSummary.innerHTML = `
        <div class="order-summary">
            <h6 class="mb-3"><i class="fas fa-list me-2"></i>Items in your order:</h6>
            ${cart.map(item => `
                <div class="order-summary-item small">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>₹${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            `).join('')}
            <hr>
            <div class="order-summary-item">
                <span>Subtotal</span>
                <span>₹${subtotal.toLocaleString()}</span>
            </div>
            <div class="order-summary-item">
                <span>Shipping ${subtotal >= 999 ? '(Free)' : ''}</span>
                <span>${shipping === 0 ? 'Free' : '₹' + shipping}</span>
            </div>
            <hr>
            <div class="order-summary-item text-primary">
                <span><strong>Total Amount</strong></span>
                <span><strong>₹${finalTotal.toLocaleString()}</strong></span>
            </div>
            ${subtotal < 999 ? '<small class="text-info mt-2 d-block"><i class="fas fa-info-circle me-1"></i>Add ₹' + (999 - subtotal) + ' more for free shipping!</small>' : ''}
        </div>
    `;
    
    // Hide cart modal and show checkout modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (cartModal) cartModal.hide();
    
    setTimeout(() => {
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
    }, 300);
}

function processOrder() {
    // Validate form
    const form = document.getElementById('checkoutForm');
    if (!form || !form.checkValidity()) {
        if (form) form.reportValidity();
        showToast('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('billingName').value,
        email: document.getElementById('billingEmail').value,
        phone: document.getElementById('billingPhone').value,
        pincode: document.getElementById('billingPincode').value,
        address: document.getElementById('billingAddress').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cod'
    };
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 999 ? 0 : 99;
    const finalTotal = subtotal + shipping;
    
    // Process order based on payment method
    if (formData.paymentMethod === 'cod') {
        processCODOrder(formData, finalTotal);
    } else {
        showToast('Selected payment method is not available yet. Please choose Pay on Delivery.', 'error');
    }
}

function processCODOrder(formData, amount) {
    // Show loading toast
    showToast('Processing your order...', 'info', 8000);
    
    // Simulate order processing
    setTimeout(() => {
        // Create order object
        const order = {
            id: 'ORD' + Date.now(),
            date: new Date().toLocaleString(),
            customer: formData,
            items: [...cart],
            subtotal: amount - (amount >= 999 ? 0 : 99),
            shipping: amount >= 999 ? 0 : 99,
            total: amount,
            paymentMethod: 'Pay on Delivery',
            status: 'Confirmed'
        };
        
        // Save order to localStorage (in real app, this would be sent to server)
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Send email notifications
        sendOrderConfirmationEmail(order);
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartBadge();
        
        // Hide checkout modal
        const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        if (checkoutModal) checkoutModal.hide();
        
        // Show success message
        showOrderSuccess(order);
        
        // Reset form
        const form = document.getElementById('checkoutForm');
        if (form) form.reset();
    }, 2000);
}

function sendOrderConfirmationEmail(order) {
    // Customer email
    const customerEmailParams = {
        to_name: order.customer.name,
        to_email: order.customer.email,
        from_name: 'BharosaKart',
        order_id: order.id,
        order_total: '₹' + order.total.toLocaleString(),
        order_items: order.items.map(item => `${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString()}`).join('\n'),
        delivery_address: order.customer.address,
        customer_phone: order.customer.phone,
        message: `Thank you for your order! Your order #${order.id} has been confirmed and will be delivered to your address. You can pay ₹${order.total.toLocaleString()} in cash upon delivery.`
    };
    
    emailjs.send(appData.emailjsConfig.serviceId, appData.emailjsConfig.templateId, customerEmailParams)
        .then(() => {
            console.log('Customer email sent successfully');
        })
        .catch((error) => {
            console.error('Customer email failed:', error);
        });
    
    // Admin email
    const adminEmailParams = {
        to_name: 'Admin',
        to_email: 'rkrnauheed1995@gmail.com',
        from_name: 'BharosaKart System',
        order_id: order.id,
        order_total: '₹' + order.total.toLocaleString(),
        order_items: order.items.map(item => `${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString()}`).join('\n'),
        delivery_address: order.customer.address,
        customer_phone: order.customer.phone,
        message: `New order received! Order #${order.id} from ${order.customer.name}. Customer: ${order.customer.name}, Phone: ${order.customer.phone}, Email: ${order.customer.email}. Payment Method: Pay on Delivery.`
    };
    
    emailjs.send(appData.emailjsConfig.serviceId, appData.emailjsConfig.templateId, adminEmailParams)
        .then(() => {
            console.log('Admin email sent successfully');
        })
        .catch((error) => {
            console.error('Admin email failed:', error);
        });
}

function showOrderSuccess(order) {
    const successHtml = `
        <div class="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded-3 shadow-lg" style="z-index: 9999; max-width: 500px; width: 90%;">
            <div class="text-center">
                <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                <h4 class="text-success mt-3">Order Placed Successfully! 🎉</h4>
                <div class="my-3">
                    <strong>Order ID:</strong> ${order.id}<br>
                    <strong>Total Amount:</strong> ₹${order.total.toLocaleString()}<br>
                    <strong>Payment:</strong> Pay on Delivery
                </div>
                <p class="text-muted">You will receive email confirmation shortly. Our team will contact you before delivery.</p>
                <button class="btn btn-primary" onclick="this.closest('.position-fixed').remove()">
                    <i class="fas fa-check me-2"></i>Continue Shopping
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHtml);
    
    // Remove success message after 15 seconds
    setTimeout(() => {
        const successMessage = document.querySelector('.position-fixed.top-50');
        if (successMessage) {
            successMessage.remove();
        }
    }, 15000);
}

// Testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;
    
    container.innerHTML = appData.testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
}

function createTestimonialCard(testimonial) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card testimonial-card h-100 fade-in-up">
                <div class="card-body text-center">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="customer-avatar"
                         style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                    <div class="rating mb-3">
                        ${generateStars(testimonial.rating)}
                    </div>
                    <blockquote class="mb-3">
                        <p class="text-muted fst-italic">"${testimonial.text}"</p>
                    </blockquote>
                    <div class="text-center">
                        <h6 class="mb-1">${testimonial.name}</h6>
                        <small class="text-muted">
                            <i class="fas fa-map-marker-alt me-1"></i>${testimonial.location}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// FAQ Management
function loadFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    container.innerHTML = appData.faqSections.map((section, sectionIndex) => 
        createFAQSection(section, sectionIndex)
    ).join('');
    
    // Setup FAQ toggle functionality
    setupFAQToggles();
}

function createFAQSection(section, sectionIndex) {
    return `
        <div class="faq-section">
            <h5>
                <i class="${section.icon} me-2"></i>${section.title}
            </h5>
            <div class="faq-questions">
                ${section.questions.map((qa, qaIndex) => `
                    <div class="faq-item">
                        <button class="faq-question" data-section="${sectionIndex}" data-question="${qaIndex}">
                            ${qa.question}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="faq-answer">
                            <p class="text-muted mb-0">${qa.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function setupFAQToggles() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Close all other FAQ answers in the same section
            const section = this.closest('.faq-section');
            section.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('active');
                    otherAnswer.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('active');
            if (answer.classList.contains('active')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
}

// Enhanced Form Handling
function handleContactForm(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Get form values directly from the form elements
    const form = e.target;
    const formData = {
        name: form.querySelector('#contactName').value.trim(),
        email: form.querySelector('#contactEmail').value.trim(),
        phone: form.querySelector('#contactPhone').value.trim() || 'Not provided',
        subject: form.querySelector('#contactSubject').value.trim(),
        message: form.querySelector('#contactMessage').value.trim()
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }
    
    // Show loading toast
    showToast('Sending your message...', 'info', 8000);
    
    // Send email using EmailJS
    const emailParams = {
        to_name: 'RahulShop Support',
        to_email: 'rkrnauheed1995@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        phone: formData.phone,
        message: formData.message,
        order_id: 'Contact Form',
        order_total: 'N/A',
        order_items: 'Contact Form Submission',
        delivery_address: 'N/A',
        customer_phone: formData.phone
    };
    
    emailjs.send(appData.emailjsConfig.serviceId, appData.emailjsConfig.templateId, emailParams)
        .then(() => {
            showToast('Thank you for your message! We will get back to you within 24 hours.', 'success');
            form.reset();
        })
        .catch((error) => {
            console.error('Contact form email failed:', error);
            showToast('Failed to send message. Please try again or contact us directly.', 'error');
        });
}

function handleNewsletter(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading toast
    showToast('Subscribing to newsletter...', 'info', 6000);
    
    // Send subscription email
    const emailParams = {
        to_name: 'Newsletter Subscriber',
        to_email: 'rkrnauheed1995@gmail.com',
        from_name: 'Newsletter Subscription',
        from_email: email,
        subject: 'New Newsletter Subscription',
        message: `New newsletter subscription from: ${email}`,
        order_id: 'Newsletter',
        order_total: 'N/A',
        order_items: 'Newsletter Subscription',
        delivery_address: 'N/A',
        customer_phone: 'Not provided',
        phone: 'Not provided'
    };
    
    emailjs.send(appData.emailjsConfig.serviceId, appData.emailjsConfig.templateId, emailParams)
        .then(() => {
            showToast('Thank you for subscribing! You\'ll receive our latest updates and exclusive offers.', 'success');
            e.target.reset();
        })
        .catch((error) => {
            console.error('Newsletter email failed:', error);
            showToast('Subscription failed. Please try again.', 'error');
        });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

// Update navbar on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.style.background = 'var(--theme-navbar-bg)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'var(--theme-navbar-bg)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScrollTop && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Add hover effects for product cards
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect for product card shimmer
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const shimmer = this.querySelector('.product-shimmer');
                if (shimmer) {
                    shimmer.style.opacity = '1';
                    shimmer.style.left = '100%';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const shimmer = this.querySelector('.product-shimmer');
                if (shimmer) {
                    shimmer.style.opacity = '0';
                    shimmer.style.left = '-50%';
                }
            });
        });
    }, 1000);
});
