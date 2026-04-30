// BURAYA KENDİ FIREBASE YAPILANDIRMANIZI (CONFIG) YAPIŞTIRINIZ
const firebaseConfig = {
  apiKey: "AIzaSyDECpHvIX8PHGSqjT7LcWx-FirsNOKLfv8",
  authDomain: "global-group-fy.firebaseapp.com",
  projectId: "global-group-fy",
  storageBucket: "global-group-fy.firebasestorage.app",
  messagingSenderId: "340460178540",
  appId: "1:340460178540:web:5f79c555cd3d71fcc51c49",
  measurementId: "G-49YRL2W6RB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const translations = {
    tr: {
        title: '20 Yıllık Vergi <span class="highlight">Muafiyeti Fırsatı</span>',
        desc: "Yurt dışı kaynaklı gelir ve kazançlarınız için Türkiye'de 20 yıl boyunca vergi ödemeyin. <strong>F&Y Global Group</strong> olarak, dönüş sürecinizde ve sonrasında servetinizi güvence altına almak için <strong>Uzman Hukuk ve Mali Danışmanlık</strong> hizmeti sunuyoruz.",
        badge1: 'Uzman Hukuk Desteği',
        badge2: 'Mali Danışmanlık',
        badge3: '%100 Gizlilik',
        formTitle: 'Hemen Başvurun',
        formDesc: 'Hukuk ve Mali Müşavirlerimiz sizinle iletişime geçsin.',
        placeholderName: 'Adınız Soyadınız',
        placeholderEmail: 'E-posta Adresiniz',
        placeholderPhone: 'Telefon Numaranız',
        placeholderCountry: 'Yaşadığınız Ülke',
        btnSubmit: 'Bilgi Alın',
        langName: 'Türkçe',
        dir: 'ltr'
    },
    en: {
        title: '20 Years Tax <span class="highlight">Exemption Opportunity</span>',
        desc: "Pay zero tax in Turkey for 20 years on your foreign-sourced income. As <strong>F&Y Global Group</strong>, we provide <strong>Expert Legal and Financial Consulting</strong> to ensure your wealth is protected and your transition is legally flawless.",
        badge1: 'Expert Legal Counsel',
        badge2: 'Financial Advisory',
        badge3: '100% Confidentiality',
        formTitle: 'Apply Now',
        formDesc: 'Let our Legal & Financial experts contact you.',
        placeholderName: 'Full Name',
        placeholderEmail: 'Email Address',
        placeholderPhone: 'Phone Number',
        placeholderCountry: 'Country of Residence',
        btnSubmit: 'Get Information',
        langName: 'English',
        dir: 'ltr'
    },
    de: {
        title: '20 Jahre Steuer- <span class="highlight">Befreiungschance</span>',
        desc: "Zahlen Sie in der Türkei 20 Jahre lang keine Steuern auf Ihre Einkünfte aus dem Ausland. Als <strong>F&Y Global Group</strong> bieten wir <strong>fachkundige rechtliche und finanzielle Beratung</strong> an, um Ihr Vermögen rechtssicher zu schützen.",
        badge1: 'Rechtliche Expertise',
        badge2: 'Finanzberatung',
        badge3: '100% Diskretion',
        formTitle: 'Jetzt Bewerben',
        formDesc: 'Lassen Sie sich von unseren Experten kontaktieren.',
        placeholderName: 'Vollständiger Name',
        placeholderEmail: 'E-Mail Adresse',
        placeholderPhone: 'Telefonnummer',
        placeholderCountry: 'Wohnsitzland',
        btnSubmit: 'Informationen Erhalten',
        langName: 'Deutsch',
        dir: 'ltr'
    },
    fr: {
        title: '20 Ans <span class="highlight">D\'Exonération Fiscale</span>',
        desc: "Ne payez aucun impôt en Turquie pendant 20 ans sur vos revenus de source étrangère. En tant que <strong>F&Y Global Group</strong>, nous fournissons <strong>des conseils juridiques et financiers experts</strong> pour protéger légalement votre patrimoine.",
        badge1: 'Conseil Juridique',
        badge2: 'Conseil Financier',
        badge3: 'Confidentialité à 100%',
        formTitle: 'Postulez Maintenant',
        formDesc: 'Laissez nos experts juridiques vous contacter.',
        placeholderName: 'Nom Complet',
        placeholderEmail: 'Adresse Email',
        placeholderPhone: 'Numéro de Téléphone',
        placeholderCountry: 'Pays de Résidence',
        btnSubmit: 'Obtenir des Infos',
        langName: 'Français',
        dir: 'ltr'
    },
    es: {
        title: '20 Años de <span class="highlight">Exención Fiscal</span>',
        desc: "No pague impuestos en Turquía durante 20 años sobre sus ingresos de origen extranjero. Como <strong>F&Y Global Group</strong>, ofrecemos <strong>consultoría legal y financiera experta</strong> para garantizar la seguridad total de su patrimonio.",
        badge1: 'Asesoría Legal',
        badge2: 'Asesoría Financiera',
        badge3: '100% Confidencial',
        formTitle: 'Aplicar Ahora',
        formDesc: 'Deje que nuestros expertos le contacten.',
        placeholderName: 'Nombre Completo',
        placeholderEmail: 'Correo Electrónico',
        placeholderPhone: 'Número de Teléfono',
        placeholderCountry: 'País de Residencia',
        btnSubmit: 'Obtener Información',
        langName: 'Español',
        dir: 'ltr'
    },
    ar: {
        title: 'فرصة إعفاء ضريبي <span class="highlight">لمدة 20 عاماً</span>',
        desc: "لا تدفع أي ضرائب في تركيا لمدة 20 عاماً على دخلك الأجنبي. بصفتنا <strong>F&Y Global Group</strong>، نقدم <strong>استشارات قانونية ومالية متخصصة</strong> لضمان حماية ثروتك بشكل قانوني لا تشوبه شائبة.",
        badge1: 'استشارة قانونية متخصصة',
        badge2: 'استشارة مالية',
        badge3: 'سرية تامة 100%',
        formTitle: 'قدم الآن',
        formDesc: 'دع خبرائنا القانونيين والماليين يتواصلون معك.',
        placeholderName: 'الاسم الكامل',
        placeholderEmail: 'البريد الإلكتروني',
        placeholderPhone: 'رقم الهاتف',
        placeholderCountry: 'بلد الإقامة',
        btnSubmit: 'احصل على معلومات',
        langName: 'العربية',
        dir: 'rtl'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Telefon numarası doğrulama: Sadece rakam, artı ve boşluk
    const phoneInput = document.getElementById('input-phone');
    phoneInput.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9+\s]/g, '');
    });

    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    let lastSubmitTime = localStorage.getItem('lastSubmitTime') || 0;

    document.getElementById('lead-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'en';
        
        // Spam koruması: 60 saniyede bir gönderim sınırı
        const now = Date.now();
        if (now - lastSubmitTime < 60000) {
            alert(currentLang === 'tr' ? 'Lütfen tekrar göndermeden önce 1 dakika bekleyin.' : 'Please wait 1 minute before sending again.');
            return;
        }

        const btnText = document.getElementById('btn-text');
        btnText.innerText = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
        
        // Form verilerini al
        const name = document.getElementById('input-name').value;
        const email = document.getElementById('input-email').value;
        const phone = document.getElementById('input-phone').value;
        const country = document.getElementById('input-country').value;

        try {
            // Firestore 'leads' koleksiyonuna kaydet
            await db.collection("leads").add({
                name: name,
                email: email,
                phone: phone,
                country: country,
                language: currentLang,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            lastSubmitTime = Date.now();
            localStorage.setItem('lastSubmitTime', lastSubmitTime);

            btnText.innerText = currentLang === 'tr' ? 'Başarıyla Gönderildi!' : 'Successfully Sent!';
            btnText.parentElement.style.background = 'linear-gradient(135deg, #28a745 0%, #218838 100%)';
            e.target.reset();
            
            setTimeout(() => {
                btnText.innerText = translations[currentLang].btnSubmit;
                btnText.parentElement.style.background = '';
            }, 4000);
        } catch (error) {
            console.error("Firebase'e kaydederken hata oluştu: ", error);
            btnText.innerText = currentLang === 'tr' ? 'Hata Oluştu!' : 'An Error Occurred!';
            btnText.parentElement.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
            setTimeout(() => {
                btnText.innerText = translations[currentLang].btnSubmit;
                btnText.parentElement.style.background = '';
            }, 4000);
        }
    });

    createParticles();
});

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    document.getElementById('hero-title').innerHTML = t.title;
    document.getElementById('hero-desc').innerHTML = t.desc;
    document.getElementById('badge-1').innerHTML = t.badge1;
    document.getElementById('badge-2').innerHTML = t.badge2;
    document.getElementById('badge-3').innerHTML = t.badge3;
    
    document.getElementById('form-title').innerHTML = t.formTitle;
    document.getElementById('form-desc').innerHTML = t.formDesc;
    
    document.getElementById('input-name').placeholder = t.placeholderName;
    document.getElementById('input-email').placeholder = t.placeholderEmail;
    document.getElementById('input-phone').placeholder = t.placeholderPhone;
    document.getElementById('input-country').placeholder = t.placeholderCountry;
    
    document.getElementById('btn-text').innerHTML = t.btnSubmit;
    document.querySelector('#current-lang span').innerHTML = t.langName;
}

function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}
