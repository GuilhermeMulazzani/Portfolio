        // Configuração do fundo VANTA.NET
        VANTA.NET({
            el: "#hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3498db,
            backgroundColor: 0xf0f0f0,
            points: 10.00,
            maxDistance: 25.00,
            spacing: 18.00
        })

        /* Toggle do modo escuro
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            updateParticlesColor();
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }); */

        // Animações com GSAP
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("header", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
        gsap.from("#hero h1", { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.7, ease: "power3.out" });
        gsap.from("#hero a", { opacity: 0, y: 50, duration: 1, delay: 0.9, ease: "power3.out" });

        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            });
        });

        // Animação das barras de habilidades
        gsap.utils.toArray('.skill-bar').forEach(bar => {
            gsap.to(bar, {
                width: bar.style.width,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 80%",
                }
            });
        });

        // Validação do formulário de contato
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });

        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#4299e1' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#4299e1', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        function updateParticlesColor() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const particleColor = isDarkMode ? '#63b3ed' : '#4299e1';
            const lineColor = isDarkMode ? '#63b3ed' : '#4299e1';
        
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                window.pJSDom[0].pJS.particles.color.value = particleColor;
                window.pJSDom[0].pJS.particles.line_linked.color = lineColor;
                window.pJSDom[0].pJS.particles.array.forEach(particle => {
                    particle.color.value = particleColor;
                });
            }
        }
        
        // Certifique-se de que esta função é chamada quando o tema é alternado
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            updateParticlesColor();
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }); 
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#4299e1' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5, random: false },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: '#4299e1', opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
                },
                retina_detect: true
            });
        });

        function reinitializeParticles() {
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
            particlesJS('particles-js', { /* configuração das partículas */ });
            updateParticlesColor();
        }
        
        // Chame reinitializeParticles() quando a rota mudar