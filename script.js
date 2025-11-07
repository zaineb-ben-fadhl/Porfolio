 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const overlay = document.querySelector('.mobile-menu-overlay');
        const navLinkItems = document.querySelectorAll('.nav-link');

        function toggleMobileMenu() {
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking on a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });

        // Rest of your existing JavaScript remains the same
        // Initialisation de GSAP et ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animation de l'en-tête au défilement
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animation d'entrée de la section Hero
        const heroTimeline = gsap.timeline();
        
        heroTimeline
            .from('.hero-badge', {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
            .from('.hero-title', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")
            .from('.hero-subtitle', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from('.hero-description', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            .from('.hero-contact', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")
            .from('.hero-btns', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")
            .from('.image-container', {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.5");

        // Animation des sections au défilement
        gsap.utils.toArray('.section').forEach(section => {
            gsap.fromTo(section, 
                { 
                    y: 50, 
                    opacity: 0 
                }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animation des compétences
        gsap.utils.toArray('.skill-category').forEach(category => {
            gsap.fromTo(category, 
                { 
                    x: -50, 
                    opacity: 0 
                }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: category,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animation des certifications
        gsap.utils.toArray('.certification-category').forEach(category => {
            gsap.fromTo(category, 
                { 
                    x: 50, 
                    opacity: 0 
                }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: category,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animation des éléments d'éducation
        gsap.utils.toArray('.education-item').forEach(item => {
            gsap.fromTo(item, 
                { 
                    x: -50, 
                    opacity: 0 
                }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animation des cartes d'expérience
        gsap.utils.toArray('.experience-item').forEach(item => {
            gsap.fromTo(item, 
                { 
                    x: -50, 
                    opacity: 0 
                }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animation des projets
        gsap.utils.toArray('.project-card').forEach(card => {
            gsap.fromTo(card, 
                { 
                    y: 50, 
                    opacity: 0 
                }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Formulaire de contact
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Récupération des données du formulaire
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                // Ici, vous pouvez envoyer les données à un serveur
                console.log('Données du formulaire:', formData);
                
                // Animation de confirmation
                gsap.to('.btn-primary', {
                    scale: 0.9,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    onComplete: function() {
                        // Affichage d'un message de confirmation
                        alert('Merci pour votre message! Je vous répondrai dans les plus brefs délais.');
                        
                        // Réinitialisation du formulaire
                        contactForm.reset();
                    }
                });
            });
        }

        // Animation des liens sociaux au survol
        gsap.utils.toArray('.social-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Animation pour le bouton de téléchargement du CV
        const cvBtn = document.querySelector('.btn-cv');
        if (cvBtn) {
            cvBtn.addEventListener('click', function(e) {
                // Animation au clic
                gsap.to(cvBtn, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });
            });
        }

        // Touch device improvements
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }