/**
 * AC SERVICE ESTIMATE
 * - GSAP Animations
 * - 3D Background (Three.js)
 * - Multi-step Logic
 * - Arabic/English Localization
 */

// --- TRANSLATIONS ---
const translations = {
    en: {
        heroTitle: "AC Service Estimate",
        subtitle: "Quick Questions, Quick Quote.",
        section1: "Section 1 / 3",
        pinLocation: "📍 Pin your location",
        mapDesc: "Select your property location on the map.",
        propertyType: "🏠 Property type",
        apartment: "Apartment",
        villa: "Villa",
        office: "Office",
        shop: "Shop / Restaurant",
        warehouse: "Warehouse",
        floorLevel: "🏢 Floor level",
        groundFloor: "Ground floor",
        nextStep: "Next Step &rarr;",
        prevStep: "&larr; Previous Step",
        section2: "Section 2 / 3",
        acDetails: "❄️ AC Details",
        acDetailsDesc: "Tell us more about your air conditioning unit.",
        acType: "❄️ AC type",
        splitAC: "Split AC",
        centralAC: "Central AC",
        windowAC: "Window AC",
        cassette: "Cassette / Ducted",
        notSure: "Not sure",
        numUnits: "🔢 Number of AC units",
        section3: "Section 3 / 3",
        diagnosis: "⚠️ Problem Diagnosis",
        diagnosisDesc: "What specific issues are you facing?",
        mainIssue: "⚠️ Main issue",
        issue1: "Not cooling",
        issue2: "Weak cooling",
        issue3: "Water leakage",
        issue4: "Bad smell",
        issue5: "Strange noise",
        issue6: "AC not turning on",
        issue7: "Gas refill needed",
        issue8: "General maintenance",
        duration: "⏱️ How long has this issue existed?",
        today: "Today",
        days13: "1–3 days",
        week1plus: "1 week+",
        longTerm: "Long-term issue",
        coolingCond: "🌡️ Cooling condition",
        warmAir: "Completely warm air",
        slightCooling: "Slight cooling",
        inconsistent: "Cooling but inconsistent",
        urgency: "🚨 Urgency",
        emergency: "Emergency (same day)",
        todayTomorrow: "Today / Tomorrow",
        thisWeek: "This week",
        checkingPrice: "Just checking price",
        getEstimate: "Get Estimate &rarr;",
        editDetails: "Edit Details",
        waBtn: "Get Estimate via WhatsApp",
        emailBtn: "Get Estimate via Email",
        smsBtn: "Get Estimate via SMS",
        waMessage: "Hello {name}, I'd like to request an AC Service estimate."
    },
    ar: {
        heroTitle: "تقدير خدمة المكيف",
        subtitle: "أسئلة سريعة، اقتباس سريع.",
        section1: "القسم ١ / ٣",
        pinLocation: "📍 حدد موقعك",
        mapDesc: "حدد موقع العقار على الخريطة.",
        propertyType: "🏠 نوع العقار",
        apartment: "شقة",
        villa: "فيلا",
        office: "مكتب",
        shop: "محل / مطعم",
        warehouse: "مستودع",
        floorLevel: "🏢 طابق",
        groundFloor: "الطابق الأرضي",
        nextStep: "الخطوة التالية &larr;",
        prevStep: "الخطوة السابقة &rarr;",
        section2: "القسم ٢ / ٣",
        acDetails: "❄️ تفاصيل المكيف",
        acDetailsDesc: "أخبرنا المزيد عن وحدة التكييف الخاصة بك.",
        acType: "❄️ نوع المكيف",
        splitAC: "سبليت",
        centralAC: "مركزي",
        windowAC: "شباك",
        cassette: "كاسيت / دكت",
        notSure: "غير متأكد",
        numUnits: "🔢 عدد الوحدات",
        section3: "القسم ٣ / ٣",
        diagnosis: "⚠️ تشخيص المشكلة",
        diagnosisDesc: "ما هي المشاكل المحددة التي تواجهها؟",
        mainIssue: "⚠️ المشكلة الرئيسية",
        issue1: "لا يبرد",
        issue2: "تبريد ضعيف",
        issue3: "تسريب مياه",
        issue4: "رائحة كريهة",
        issue5: "صوت غريب",
        issue6: "المكيف لا يعمل",
        issue7: "يحتاج غاز",
        issue8: "صيانة عامة",
        duration: "⏱️ منذ متى والمشكلة موجودة؟",
        today: "اليوم",
        days13: "١-٣ أيام",
        week1plus: "أسبوع+",
        longTerm: "مشكلة طويلة الأمد",
        coolingCond: "🌡️ حالة التبريد",
        warmAir: "هواء حار تماماً",
        slightCooling: "تبريد خفيف",
        inconsistent: "يبرد لكن بشكل متقطع",
        urgency: "🚨 الاستعجال",
        emergency: "طارئ (نفس اليوم)",
        todayTomorrow: "اليوم / غداً",
        thisWeek: "هذا الأسبوع",
        checkingPrice: "مجرد استفسار عن السعر",
        getEstimate: "احصل على التقدير &larr;",
        editDetails: "تعديل التفاصيل",
        waBtn: "الحصول على التقدير عبر واتساب",
        emailBtn: "الحصول على التقدير عبر البريد",
        smsBtn: "الحصول على التقدير عبر الرسائل القصيرة",
        waMessage: "مرحباً {name}، أود طلب تقدير لخدمة المكيف."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update buttons
    document.getElementById('btnEn').classList.toggle('active', lang === 'en');
    document.getElementById('btnAr').classList.toggle('active', lang === 'ar');

    updateTranslations();
    updateUI(false);
}

function updateTranslations() {
    const t = translations[currentLang];

    // Hero
    document.querySelector('.hero-title .line').innerText = t.heroTitle;
    document.querySelector('.subtitle').innerText = t.subtitle;

    // Badges & Headers
    document.querySelectorAll('.step-badge').forEach((el, i) => {
        if (i === 0) el.innerText = t.section1;
        if (i === 1) el.innerText = t.section2;
        if (i === 2) el.innerText = t.section3;
    });

    document.querySelector('.wizard-step[data-step="1"] h2').innerText = t.pinLocation;
    document.querySelector('.wizard-step[data-step="1"] p').innerText = t.mapDesc;
    document.querySelector('.wizard-step[data-step="1"] label').innerText = t.propertyType;

    document.querySelector('.wizard-step[data-step="2"] h2').innerText = t.acDetails;
    document.querySelector('.wizard-step[data-step="2"] p').innerText = t.acDetailsDesc;
    document.querySelector('.wizard-step[data-step="2"] .form-group:nth-child(2) label').innerText = t.acType;

    document.querySelector('.wizard-step[data-step="3"] h2').innerText = t.diagnosis;
    document.querySelector('.wizard-step[data-step="3"] p').innerText = t.diagnosisDesc;

    // Navigation
    document.querySelectorAll('.next-btn').forEach(btn => {
        if (btn.closest('[data-step="3"]')) {
            btn.innerHTML = t.getEstimate;
        } else {
            btn.innerHTML = t.nextStep;
        }
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
        if (btn.classList.contains('btn-text')) {
            btn.innerText = t.editDetails;
        } else {
            btn.innerHTML = t.prevStep;
        }
    });

    // Options (Property Type)
    const propOptions = document.querySelectorAll('.shape-option[data-group="propertyType"]');
    propOptions[0].querySelector('span').innerText = t.apartment;
    propOptions[1].querySelector('span').innerText = t.villa;
    propOptions[2].querySelector('span').innerText = t.office;
    propOptions[3].querySelector('span').innerText = t.shop;
    propOptions[4].querySelector('span').innerText = t.warehouse;

    // Options (AC Type)
    const acOptions = document.querySelectorAll('.shape-option[data-group="acType"]');
    acOptions[0].querySelector('span').innerText = t.splitAC;
    acOptions[1].querySelector('span').innerText = t.centralAC;
    acOptions[2].querySelector('span').innerText = t.windowAC;
    acOptions[3].querySelector('span').innerText = t.cassette;
    acOptions[4].querySelector('span').innerText = t.notSure;

    // Options (Main Issue)
    const issueOptions = document.querySelectorAll('.shape-option[data-group="mainIssue"]');
    issueOptions[0].querySelector('span').innerText = t.issue1;
    issueOptions[1].querySelector('span').innerText = t.issue2;
    issueOptions[2].querySelector('span').innerText = t.issue3;
    issueOptions[3].querySelector('span').innerText = t.issue4;
    issueOptions[4].querySelector('span').innerText = t.issue5;
    issueOptions[5].querySelector('span').innerText = t.issue6;
    issueOptions[6].querySelector('span').innerText = t.issue7;
    issueOptions[7].querySelector('span').innerText = t.issue8;

    // Options (Cooling Condition)
    const condOptions = document.querySelectorAll('.shape-option[data-group="coolingCondition"]');
    condOptions[0].querySelector('span').innerText = t.warmAir;
    condOptions[1].querySelector('span').innerText = t.slightCooling;
    condOptions[2].querySelector('span').innerText = t.inconsistent;

    // Options (Urgency)
    const urgencyOptions = document.querySelectorAll('.shape-option[data-group="urgency"]');
    urgencyOptions[0].querySelector('span').innerText = t.emergency;
    urgencyOptions[1].querySelector('span').innerText = t.todayTomorrow;
    urgencyOptions[2].querySelector('span').innerText = t.thisWeek;
    urgencyOptions[3].querySelector('span').innerText = t.checkingPrice;

    // Sliders
    document.querySelector('.wizard-step[data-step="1"] .form-group:nth-child(4) label').innerText = t.floorLevel;
    document.querySelector('.wizard-step[data-step="2"] .form-group:nth-child(3) label').innerText = t.numUnits;
    document.querySelector('.wizard-step[data-step="3"] .form-group:nth-child(3) label').innerText = t.duration;
    document.querySelector('.wizard-step[data-step="3"] .form-group:nth-child(4) label').innerText = t.coolingCond;
    document.querySelector('.wizard-step[data-step="3"] .form-group:nth-child(5) label').innerText = t.urgency;

    // Buttons (Final)
    document.getElementById('waBtn').innerHTML = `<span class="icon">💬</span> ${t.waBtn}`;
    document.getElementById('emailBtn').innerHTML = `<span class="icon">✉️</span> ${t.emailBtn}`;
    document.getElementById('smsBtn').innerHTML = `<span class="icon">📱</span> ${t.smsBtn}`;

    // Update current values
    if (floorSlider) floorSlider.dispatchEvent(new Event('input'));
    if (unitsSlider) unitsSlider.dispatchEvent(new Event('input'));
    if (durationSlider) durationSlider.dispatchEvent(new Event('input'));
}

// --- CONFIGURATION ---

let rooferConfig = {
    name: "AC Technician",
    phoneNumber: "9987412299", // Default fallback
    whatsappNumber: "9987412299", // Default fallback
    email: ""
};

// State Object
let state = {
    step: 1,
    location: null, // Lat/Lng object
    propertyType: '',
    floorLevel: 'Ground floor',
    acType: '',
    units: '1 unit',
    mainIssue: '',
    duration: 'Today',
    coolingCondition: '',
    urgency: ''
};

// --- DOM ELEMENTS ---
const progressBar = document.getElementById('progressBar');
const dots = document.querySelectorAll('.step-dot');
const steps = document.querySelectorAll('.wizard-step');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadRooferConfig();
    initThreeJS();
    initGSAP();
    initEventListeners();
    initMap();
    updateUI(false);
});

function loadRooferConfig() {
    const hostname = window.location.hostname;
    const urlParams = new URLSearchParams(window.location.search);

    // 1. Check for manual override in URL: ?config=name
    let clientName = urlParams.get('config');

    // 2. Local Environment Check (localhost, 127.0.0.1, or no dots in hostname)
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || !hostname.includes('.');

    // 3. Subdomain Detection (only if not local and no manual override)
    if (!clientName && !isLocal) {
        const parts = hostname.split('.');
        if (parts.length > 2) {
            clientName = parts[0];
        }
    }

    // Default to 'ACService' for local development or if no client detected
    if (!clientName || isLocal) {
        clientName = clientName || 'ACService';
    }

    const configFile = `configs/${clientName}.json`;
    console.log(`%c[Config Debug] Hostname: ${hostname}`, "color: #3b82f6; font-weight: bold;");
    console.log(`%c[Config Debug] Client Name: ${clientName}`, "color: #3b82f6; font-weight: bold;");
    console.log(`%c[Config Debug] Attempting to load: ${configFile}`, "color: #3b82f6; font-weight: bold;");

    if (window.location.protocol === 'file:') {
        console.warn("%c[Config Warning] You are opening this file directly (file://). Browsers like Chrome block 'fetch' calls for local files. Please use a local server (e.g., VS Code Live Server or 'npx serve') to test JSON configurations.", "color: #f59e0b; font-weight: bold;");
        return; // Stop here as fetch will fail
    }

    fetch(configFile)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(config => {
            rooferConfig = { ...rooferConfig, ...config };
            console.log("%c[Config Success] Config merged:", "color: #10b981; font-weight: bold;", rooferConfig);

            // Personalization
            const heroTitle = document.querySelector('.hero-title');
            const ogTitle = document.getElementById('ogTitle');
            const twitterTitle = document.getElementById('twitterTitle');
            const displayName = rooferConfig.companyName || rooferConfig.name || "AC Technician";

            if (rooferConfig.companyName) {
                const fullTitle = `${rooferConfig.companyName} - AC Service Estimate`;
                document.title = fullTitle;
                if (ogTitle) ogTitle.setAttribute('content', fullTitle);
                if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);

                heroTitle.innerHTML = `
                    <span class="line">AC Service Estimate</span>
                    <span class="line brand-line">by <span class="company-brand">${rooferConfig.companyName}</span></span>
                `;
            } else {
                const defaultTitle = "AC Service Estimate";
                document.title = defaultTitle;
                if (ogTitle) ogTitle.setAttribute('content', defaultTitle);
                if (twitterTitle) twitterTitle.setAttribute('content', defaultTitle);

                heroTitle.innerHTML = `<span class="line">AC Service Estimate</span>`;
            }
        })
        .catch(error => {
            console.error(`%c[Config Error] Failed to load ${configFile}:`, "color: #ef4444; font-weight: bold;", error);

            // Fallback to the default roofer_config.json if a specific one fails
            if (clientName !== 'roofer_config') {
                console.log("%c[Config Info] Falling back to default configs/roofer_config.json", "color: #3b82f6;");
                fetch('configs/roofer_config.json')
                    .then(res => res.json())
                    .then(data => {
                        rooferConfig = { ...rooferConfig, ...data };
                    })
                    .catch(err => console.error("Critical: Could not load fallback config", err));
            }
        });
}

// --- 3D BACKGROUND (Three.js) ---
function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
        color: 0xFACC15,
        wireframe: true,
        transparent: true,
        opacity: 0.05
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 15;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;
        particlesMesh.rotation.y -= 0.0005;

        sphere.position.y = Math.sin(Date.now() * 0.0005) * 1;

        renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// --- GSAP ANIMATIONS ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Animation
    const tl = gsap.timeline();
    tl.from(".hero-title .line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    })
        .from(".subtitle", {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.5")
        .from(".calculator-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.3");
}

// --- MAP INTEGRATION ---
let map, marker;

async function locateUserByIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('IP detection failed');
        const data = await response.json();
        return { lat: data.latitude, lng: data.longitude, zoom: 11 };
    } catch (error) {
        console.warn("Geolocation Error: Falling back to world view.", error);
        return { lat: 20, lng: 0, zoom: 2 }; // World view fallback
    }
}

async function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Get initial view based on IP or fallback
    const initialView = await locateUserByIP();
    map = L.map('map').setView([initialView.lat, initialView.lng], initialView.zoom);

    // CartoDB Voyager tiles (clear, light, and high contrast)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Click handler
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        state.location = { lat: lat.toFixed(6), lng: lng.toFixed(6) };

        if (marker) {
            marker.setLatLng(e.latlng);
        } else {
            marker = L.marker(e.latlng, {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="color: #ef4444; filter: drop-shadow(0 0 4px rgba(0,0,0,0.5));">
                             <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none">
                               <line x1="18" y1="6" x2="6" y2="18"></line>
                               <line x1="6" y1="6" x2="18" y2="18"></line>
                             </svg>
                           </div>`,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                })
            }).addTo(map);
        }

        // Visual Confirmation (Much more intense green glow)
        gsap.fromTo("#map-container",
            { borderColor: "#22c55e", boxShadow: "0 0 40px rgba(34, 197, 94, 1)", borderWidth: "4px" },
            { borderColor: "rgba(255, 255, 255, 0.15)", boxShadow: "0 0 0px rgba(34, 197, 94, 0)", borderWidth: "2px", duration: 1.5, ease: "power2.out" }
        );

        // Auto-advance if relation is also selected
        if (state.relation) {
            setTimeout(() => {
                if (state.step === 1 && state.location && state.relation) {
                    nextStep();
                }
            }, 1000);
        }
    });

    window.addEventListener('resize', () => map.invalidateSize());
}

// --- WIZARD LOGIC ---
function initEventListeners() {

    // Generic Card Selection (Delegation or specific selection)
    const options = document.querySelectorAll('.shape-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const group = opt.dataset.group;
            const value = opt.dataset.value;

            // Update State
            state[group] = value;

            // UI Update: Deselect all in this group, Select clicked
            document.querySelectorAll(`.shape-option[data-group="${group}"]`).forEach(o => {
                o.classList.remove('selected');
            });
            opt.classList.add('selected');

            // Animation
            gsap.fromTo(opt, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
        });
    });


    // --- SLIDERS ---
    function updateSliderFill(slider) {
        const min = slider.min || 0;
        const max = slider.max || 100;
        const val = slider.value;
        const percent = (val - min) * 100 / (max - min);
        slider.style.setProperty('--range-percent', percent + '%');

        // Move glitter position based on value (10px per unit)
        slider.style.setProperty('--glitter-pos', (val * 10) + 'px');
    }

    // Floor Slider
    const floorSlider = document.getElementById('floorSlider');
    const floorDisplay = document.getElementById('floorDisplay');
    const floorLabels = {
        en: ["Ground floor", "1–5", "6–10", "10+"],
        ar: ["الطابق الأرضي", "١-٥", "٦-١٠", "١٠+"]
    };

    if (floorSlider) {
        floorSlider.classList.add('glitter-slider');
        updateSliderFill(floorSlider);
        floorSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const label = floorLabels[currentLang][val];
            state.floorLevel = label;
            floorDisplay.innerText = label;
            updateSliderFill(e.target);
        });
    }

    // Units Slider
    const unitsSlider = document.getElementById('unitsSlider');
    const unitsDisplay = document.getElementById('unitsDisplay');
    const unitsLabels = ["1", "2–3", "4–6", "7+"];

    if (unitsSlider) {
        unitsSlider.classList.add('glitter-slider');
        updateSliderFill(unitsSlider);
        unitsSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const label = unitsLabels[val];
            if (currentLang === 'ar') {
                state.units = val === 0 ? "وحدة واحدة" : `${label} وحدات`;
            } else {
                state.units = val === 0 ? "1 unit" : `${label} units`;
            }
            unitsDisplay.innerText = state.units;
            updateSliderFill(e.target);
        });
    }

    // Brand Dropdown - REMOVED


    // Duration Slider
    const durationSlider = document.getElementById('durationSlider');
    const durationDisplay = document.getElementById('durationDisplay');
    const durationList = {
        en: ["Today", "1–3 days", "1 week+", "Long-term issue"],
        ar: ["اليوم", "١-٣ أيام", "أسبوع+", "مشكلة طويلة الأمد"]
    };

    if (durationSlider) {
        durationSlider.classList.add('glitter-slider');
        updateSliderFill(durationSlider);
        durationSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            const label = durationList[currentLang][val];
            state.duration = label;
            durationDisplay.innerText = label;
            updateSliderFill(e.target);
        });
    }


    // Navigation Buttons
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => nextStep());
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', () => prevStep());
    });
}

function nextStep() {
    if (validateStep(state.step)) {
        if (state.step < 4) {
            state.step++;
            updateUI(true);
        }
        if (state.step === 4) {
            calculateFinal();
        }
    } else {
        // Shake animation for error
        gsap.to(`.wizard-step[data-step="${state.step}"]`, { x: 10, duration: 0.1, yoyo: true, repeat: 5 });

        // Highlight missing fields
        highlightMissingFields(state.step);
    }
}

function prevStep() {
    if (state.step > 1) {
        state.step--;
        updateUI(true);
    }
}

function validateStep(step) {
    if (step === 1) {
        // Property Type & Location
        return state.propertyType !== '' && state.location !== null;
    }
    if (step === 2) {
        // AC Type, Units
        return state.acType !== '' && state.units !== '';
    }
    if (step === 3) {
        // Main Issue, Duration, Cooling Condition, Urgency
        return state.mainIssue !== '' && state.duration !== '' && state.coolingCondition !== '' && state.urgency !== '';
    }
    return true;
}

function highlightMissingFields(step) {
    // Helper to find groups that are empty in the current step and shake them
    if (step === 1) {
        if (state.location === null) {
            gsap.fromTo('#map-container',
                { borderColor: "#ef4444", boxShadow: "0 0 25px rgba(239, 68, 68, 0.7)", x: -10 },
                { borderColor: "rgba(255, 255, 255, 0.15)", boxShadow: "0 0 0px rgba(0,0,0,0)", x: 0, duration: 0.1, repeat: 5, yoyo: true, clearProps: "x" }
            );
        }
        if (state.propertyType === '') gsap.to('.shape-option[data-group="propertyType"]', { borderColor: "#ef4444", duration: 0.2, yoyo: true, repeat: 1, clearProps: "borderColor" });
    }
    if (step === 2) {
        ['acType'].forEach(group => {
            if (state[group] === '') {
                gsap.to(`.shape-option[data-group="${group}"]`, { borderColor: "red", duration: 0.2, yoyo: true, repeat: 1, clearProps: "borderColor" });
            }
        });
    }
    if (step === 3) {
        ['mainIssue', 'coolingCondition', 'urgency'].forEach(group => {
            if (state[group] === '') {
                gsap.to(`.shape-option[data-group="${group}"]`, { borderColor: "red", duration: 0.2, yoyo: true, repeat: 1, clearProps: "borderColor" });
            }
        });
    }
}


function updateUI(shouldScroll = false) {
    // Optional scroll to top of calculator for mobile users
    if (shouldScroll) {
        const calculator = document.getElementById('calculator');
        if (calculator) {
            calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // 1. Update Progress Bar
    const progress = ((state.step - 1) / 3) * 100; // 4 steps total (3 questions + 1 result), so fraction of 3 intervals
    if (progressBar) progressBar.style.width = `${progress}%`;

    // 2. Update Dots
    dots.forEach((dot, idx) => {
        const stepNum = idx + 1;
        dot.classList.remove('active', 'completed');

        if (stepNum === state.step) {
            dot.classList.add('active');
        } else if (stepNum < state.step) {
            dot.classList.add('completed');
        }
    });

    // 3. Show Active Step
    steps.forEach(s => {
        s.classList.remove('active');
        if (parseInt(s.dataset.step) === state.step) {
            s.classList.add('active');
            gsap.fromTo(s,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, clearProps: "all" }
            );

            // Fix for Leaflet map grey tiles when Step 1 is active
            if (parseInt(s.dataset.step) === 1 && map) {
                setTimeout(() => map.invalidateSize(), 150);
            }
        }
    });
}

// --- CALCULATION LOGIC ---
function calculateFinal() {
    prepareContactLinks();
}

function prepareContactLinks() {
    const t = translations[currentLang];
    const intro = t.waMessage.replace('{name}', rooferConfig.name);

    let details = "";
    if (currentLang === 'ar') {
        details = `التفاصيل:
- الموقع: ${state.location ? `https://www.google.com/maps?q=${state.location.lat},${state.location.lng}` : 'غير محدد'}
- نوع العقار: ${state.propertyType}
- الطابق: ${state.floorLevel}
- نوع المكيف: ${state.acType}
- عدد الوحدات: ${state.units}
- المشكلة الأساسية: ${state.mainIssue}
- منذ متى: ${state.duration}
- حالة التبريد: ${state.coolingCondition}
- الاستعجال: ${state.urgency}`;
    } else {
        details = `Details:
- Location: ${state.location ? `https://www.google.com/maps?q=${state.location.lat},${state.location.lng}` : 'Not pinned'}
- Property Type: ${state.propertyType}
- Floor Level: ${state.floorLevel}
- AC Type: ${state.acType}
- Number of Units: ${state.units}
- Main Issue: ${state.mainIssue}
- Issue Duration: ${state.duration}
- Cooling Condition: ${state.coolingCondition}
- Urgency: ${state.urgency}`;
    }

    const message = `${intro}
    
${details}

${currentLang === 'ar' ? 'يرجى الاتصال بي لمناقشة الخطوات التالية.' : 'Please contact me to discuss next steps.'}`;

    const encoded = encodeURIComponent(message);
    const waBtn = document.getElementById('waBtn');
    const emailBtn = document.getElementById('emailBtn');
    const smsBtn = document.getElementById('smsBtn');

    // 1. WhatsApp Button
    if (waBtn) {
        if (rooferConfig.whatsappNumber) {
            waBtn.href = `https://wa.me/${rooferConfig.whatsappNumber}?text=${encoded}`;
            waBtn.style.display = 'flex';
        } else {
            waBtn.style.display = 'none';
        }
    }

    // 2. SMS Button
    if (smsBtn) {
        if (rooferConfig.phoneNumber) {
            smsBtn.href = `sms:${rooferConfig.phoneNumber}?&body=${encoded}`;
            smsBtn.style.display = 'flex';
        } else {
            smsBtn.style.display = 'none';
        }
    }

    // 3. Email Button
    if (emailBtn) {
        if (rooferConfig.email) {
            emailBtn.href = `mailto:${rooferConfig.email}?subject=AC Service Inquiry&body=${encoded}`;
            emailBtn.style.display = 'flex';
        } else {
            emailBtn.style.display = 'none';
        }
    }
}
