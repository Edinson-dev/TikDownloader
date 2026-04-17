const fs = require('fs');
const path = require('path');

const files = {
    'index.html': `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TikDownloader | Descarga videos sin marca de agua</title>
    <meta name="description" content="TikDownloader: Descarga videos de TikTok, Instagram y Facebook sin marca de agua a velocidad ultra rápida. La herramienta definitiva para creadores.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Orbitron:wght@600;800;900&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Floating Download Button -->
    <a href="#" class="fab-download" id="fabDownload">
        <i data-lucide="download"></i>
    </a>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1 class="neon-title" data-text="TIK DOWNLOADER">TIK DOWNLOADER</h1>
            <p class="hero-subtitle">La herramienta definitiva para creadores. Descargas en HD, sin marcas de agua y en segundos.</p>
            <div class="hero-actions">
                <a href="#" class="btn-primary">
                    <span class="btn-text">DESCARGAR APK V1.0</span>
                    <div class="btn-glow"></div>
                </a>
            </div>
            <div class="hero-mockup">
                <div class="mockup-container scroll-reveal">
                    <!-- CSS Phone Mockup -->
                    <div class="app-ui">
                        <div class="app-header">
                            <div class="app-pill"></div>
                        </div>
                        <div class="app-content">
                            <div class="app-screen-circle">
                                <i data-lucide="download-cloud" class="cyan-text"></i>
                            </div>
                            <div class="app-input-bar"></div>
                            <div class="app-button-sim"></div>
                            <div class="app-grid-sim">
                                <div class="app-item-sim"></div>
                                <div class="app-item-sim"></div>
                                <div class="app-item-sim"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <div class="features-grid">
                <div class="feature-card scroll-reveal">
                    <div class="feature-icon cyan-glow">
                        <i data-lucide="zap"></i>
                    </div>
                    <h3>Velocidad Extrema</h3>
                    <p>Motor de descarga optimizado para redes 5G y Fibra.</p>
                </div>
                <div class="feature-card scroll-reveal">
                    <div class="feature-icon pink-glow">
                        <i data-lucide="ghost"></i>
                    </div>
                    <h3>Modo Fantasma</h3>
                    <p>Detecta links automáticamente desde tu portapapeles sin abrir la app.</p>
                </div>
                <div class="feature-card scroll-reveal">
                    <div class="feature-icon cyan-glow">
                        <i data-lucide="shield"></i>
                    </div>
                    <h3>Sin Marcas de Agua</h3>
                    <p>Obtén el video original y limpio para tus reposts.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How it works Section -->
    <section class="how-it-works" id="how-it-works">
        <div class="container">
            <h2 class="section-title scroll-reveal">Cómo funciona</h2>
            <div class="steps-container">
                <div class="step scroll-reveal">
                    <div class="step-number">01</div>
                    <p>Copia el link.</p>
                </div>
                <div class="step scroll-reveal">
                    <div class="step-number">02</div>
                    <p>La app lo detecta (Modo Fantasma).</p>
                </div>
                <div class="step scroll-reveal">
                    <div class="step-number">03</div>
                    <p>¡Listo! Organizado automáticamente en carpetas por red social.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <span class="footer-text">by edinson_dev • todos los derechos reservados</span>
                <i data-lucide="zap" class="footer-icon"></i>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="main.js"></script>
    <script>
      lucide.createIcons();
    </script>
</body>
</html>`,
    'style.css': `:root {
    --black: #050505;
    --cyan: #69C9D0;
    --pink: #EE1D52;
    --white: #ffffff;
    --gray: #888888;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.1);
    --font-header: 'Orbitron', sans-serif;
    --font-body: 'Montserrat', sans-serif;
    --glow-cyan: 0 0 10px var(--cyan), 0 0 20px var(--cyan);
    --glow-pink: 0 0 10px var(--pink), 0 0 20px var(--pink);
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--black);
    color: var(--white);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Typography */
h1, h2, h3 {
    font-family: var(--font-header);
    text-transform: uppercase;
    font-weight: 900;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(105, 201, 208, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(238, 29, 82, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.neon-title {
    font-size: clamp(3rem, 10vw, 6rem);
    text-align: center;
    margin-bottom: 1rem;
    color: var(--white);
    position: relative;
    letter-spacing: 4px;
    animation: neon-flicker 4s infinite alternate;
}

@keyframes neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 
            0 0 7px var(--white),
            0 0 10px var(--white),
            0 0 21px var(--white),
            0 0 42px var(--cyan),
            0 0 82px var(--cyan),
            0 0 92px var(--cyan),
            0 0 102px var(--cyan),
            0 0 151px var(--cyan);
    }
    20%, 22%, 24%, 55% {
        text-shadow: none;
    }
}

.hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.5rem);
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: var(--gray);
    font-weight: 400;
}

.hero-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
}

.btn-primary {
    position: relative;
    padding: 1.2rem 3rem;
    background: linear-gradient(90deg, var(--cyan), var(--pink));
    background-size: 200% auto;
    color: var(--white);
    text-decoration: none;
    font-family: var(--font-header);
    font-weight: 800;
    border-radius: 5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: var(--transition);
    overflow: hidden;
    animation: gradient-shift 3s linear infinite;
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.btn-primary:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 30px rgba(238, 29, 82, 0.6);
}

.hero-mockup {
    width: 100%;
    display: flex;
    justify-content: center;
    perspective: 1000px;
}

.mockup-container {
    width: 100%;
    max-width: 320px;
    height: 600px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 2px solid var(--glass-border);
    border-radius: 45px;
    padding: 10px;
    box-shadow: 0 0 50px rgba(105, 201, 208, 0.15), inset 0 0 20px rgba(255,255,255,0.05);
    animation: float 6s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    position: relative;
}

.app-ui {
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    border-radius: 35px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(255,255,255,0.05);
}

.app-header {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.app-pill {
    width: 60px;
    height: 6px;
    background: #1a1a1a;
    border-radius: 10px;
}

.app-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.app-screen-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(105, 201, 208, 0.05);
    border: 1px solid rgba(105, 201, 208, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    box-shadow: 0 0 20px rgba(105, 201, 208, 0.1);
}

.app-screen-circle i {
    width: 50px;
    height: 50px;
}

.cyan-text { color: var(--cyan); }

.app-input-bar {
    width: 100%;
    height: 45px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
}

.app-button-sim {
    width: 100%;
    height: 45px;
    background: linear-gradient(90deg, var(--cyan), var(--pink));
    border-radius: 10px;
    opacity: 0.8;
}

.app-grid-sim {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    margin-top: 20px;
}

.app-item-sim {
    aspect-ratio: 1;
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.05);
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotateX(5deg) rotateY(-5deg); }
    50% { transform: translateY(-30px) rotateX(10deg) rotateY(5deg); }
}

/* Features */
.features {
    padding: 10rem 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.feature-card {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    padding: 3rem 2rem;
    border-radius: 20px;
    text-align: center;
    transition: var(--transition);
    position: relative;
}

.feature-card:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-10px);
    border-color: rgba(105, 201, 208, 0.3);
}

.feature-card:nth-child(2):hover {
    border-color: rgba(238, 29, 82, 0.3);
}

.feature-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--black);
    border: 1px solid var(--glass-border);
}

.feature-icon i {
    width: 40px;
    height: 40px;
}

.cyan-glow { color: var(--cyan); box-shadow: 0 0 15px rgba(105, 201, 208, 0.3); }
.pink-glow { color: var(--pink); box-shadow: 0 0 15px rgba(238, 29, 82, 0.3); }

.feature-card h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.feature-card p {
    color: var(--gray);
}

/* How it works */
.how-it-works {
    padding: 5rem 0 10rem;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 5rem;
    background: linear-gradient(90deg, var(--cyan), var(--pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.steps-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 800px;
    margin: 0 auto;
}

.step {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: var(--glass-bg);
    padding: 2rem;
    border-radius: 15px;
    border-left: 5px solid var(--cyan);
}

.step:nth-child(even) {
    border-left: none;
    border-right: 5px solid var(--pink);
    flex-direction: row-reverse;
}

.step-number {
    font-family: var(--font-header);
    font-size: 3rem;
    font-weight: 900;
    opacity: 0.3;
}

.step p {
    font-size: 1.2rem;
}

/* Footer */
.footer {
    padding: 5rem 0;
    border-top: 1px solid var(--glass-border);
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.footer-text {
    color: var(--gray);
    font-size: 0.9rem;
    text-transform: lowercase;
}

.footer-icon {
    width: 16px;
    height: 16px;
    color: var(--cyan);
}

/* FAB */
.fab-download {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: var(--pink);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-decoration: none;
    box-shadow: var(--glow-pink);
    z-index: 1000;
    transition: var(--transition);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(238, 29, 82, 0.7); }
    70% { box-shadow: 0 0 0 20px rgba(238, 29, 82, 0); }
    100% { box-shadow: 0 0 0 0 rgba(238, 29, 82, 0); }
}

.fab-download:hover {
    transform: scale(1.1) rotate(10deg);
}

/* Scroll Reveal Initial */
.scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .neon-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
        padding: 0 1rem;
    }
    
    .step {
        flex-direction: column !important;
        text-align: center;
        gap: 1rem;
    }
    
    .step:nth-child(even) {
        flex-direction: column !important;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
}

/* Animations for Neon Text */
@keyframes neon-pulse {
    from { text-shadow: var(--glow-cyan); }
    to { text-shadow: 0 0 15px var(--cyan), 0 0 30px var(--cyan), 0 0 45px var(--cyan); }
}

.cyan-text-glow {
    color: var(--cyan);
    text-shadow: var(--glow-cyan);
}

.pink-text-glow {
    color: var(--pink);
    text-shadow: var(--glow-pink);
}`,
    'main.js': `document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                // Optional: hide element when scroll out
                // hideScrollElement(el);
            }
        });
    };

    // Initially trigger check
    handleScrollAnimation();

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
        
        // FAB visibility logic
        const fab = document.getElementById('fabDownload');
        if (window.scrollY > 300) {
            fab.style.display = 'flex';
            fab.style.opacity = '1';
        } else {
            // Optional: keep fixed or hide
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Neon flicker random variation
    const neonTitle = document.querySelector('.neon-title');
    if (neonTitle) {
        setInterval(() => {
            const random = Math.random();
            if (random > 0.95) {
                neonTitle.style.animation = 'none';
                setTimeout(() => {
                    neonTitle.style.animation = 'neon-flicker 4s infinite alternate';
                }, 50);
            }
        }, 1000);
    }
});`
};

Object.entries(files).forEach(([filename, content]) => {
    fs.writeFileSync(path.join(__dirname, filename), content);
    console.log(\`Generated \${filename}\`);
});

console.log('TikDownloader site successfully generated!');
