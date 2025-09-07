// =================================================================
// 1. GLOBAL VARIABLES & DATA
const APIKEY = '187774e2bc818aca26309836cec5f170';
// =================================================================

// Quiz Data and State
const odishaQuizData = [
    { question: "What is the classical dance form that originated in Odisha?", options: ["Kathak", "Bharatanatyam", "Odissi", "Kuchipudi"], correct: 2 },
    { question: "Which temple in Odisha is known as the 'Black Pagoda'?", options: ["Jagannath Temple", "Lingaraj Temple", "Konark Sun Temple", "Rajarani Temple"], correct: 2 },
    { question: "What is the largest coastal lagoon in India, located in Odisha?", options: ["Vembanad Lake", "Chilika Lake", "Pulicat Lake", "Sambhar Lake"], correct: 1 },
    { question: "The famous Rath Yatra (Chariot Festival) is associated with which deity?", options: ["Lord Shiva", "Lord Vishnu", "Goddess Durga", "Lord Jagannath"], correct: 3 },
    { question: "Which city in Odisha is famous for its silver filigree work (Tarakasi)?", options: ["Bhubaneswar", "Puri", "Cuttack", "Sambalpur"], correct: 2 },
    { question: "What is the staple food of Odisha?", options: ["Wheat", "Maize", "Rice", "Barley"], correct: 2 },
    { question: "The 'Pattachitra' art form is a traditional painting style from which state?", options: ["West Bengal", "Odisha", "Bihar", "Andhra Pradesh"], correct: 1 },
    { question: "Which of these is a famous sweet dish from Odisha?", options: ["Rasgulla", "Jalebi", "Petha", "Mysore Pak"], correct: 0 },
    { question: "The capital city of Odisha is:", options: ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"], correct: 1 },
    { question: "Which National Park in Odisha is known for its saltwater crocodiles?", options: ["Simlipal National Park", "Bhitarkanika National Park", "Ushakothi Wildlife Sanctuary", "Satkosia Tiger Reserve"], correct: 1 },
    { question: "The ancient name of Odisha was:", options: ["Magadha", "Vanga", "Kalinga", "Anga"], correct: 2 },
    { question: "Which river is known as the 'Sorrow of Odisha'?", options: ["Ganges", "Brahmani", "Mahanadi", "Subarnarekha"], correct: 2 },
    { question: "The Hirakud Dam, one of the longest in the world, is built on which river?", options: ["Baitarani", "Mahanadi", "Rushikulya", "Indravati"], correct: 1 },
    { question: "What does 'Namaskar' mean in Odia?", options: ["Thank you", "Goodbye", "A respectful greeting", "How are you?"], correct: 2 },
    { question: "Which beach in Odisha is a major nesting site for Olive Ridley turtles?", options: ["Puri Beach", "Gopalpur Beach", "Gahirmatha Beach", "Chandrabhaga Beach"], correct: 2 },
    { question: "The Lingaraj Temple in Bhubaneswar is dedicated to which deity?", options: ["Lord Vishnu", "Lord Shiva", "Lord Brahma", "Goddess Parvati"], correct: 1 },
    { question: "Sambalpuri sarees are famous for which weaving technique?", options: ["Brocade", "Ikat (Bandha)", "Jamdani", "Zari"], correct: 1 },
    { question: "What is 'Pakhala', a popular dish in Odisha?", options: ["A spicy curry", "A type of bread", "Fermented rice with water", "A sweet dessert"], correct: 2 },
    { question: "The Udayagiri and Khandagiri caves near Bhubaneswar were carved for which religious group?", options: ["Buddhist monks", "Hindu ascetics", "Jain monks", "Sufi saints"], correct: 2 },
    { question: "Which festival in Odisha celebrates the relationship between brothers and sisters?", options: ["Raja Parba", "Nuakhai", "Kumar Purnima", "Raksha Bandhan"], correct: 3 },
    { question: "What is the main language spoken in Odisha?", options: ["Bengali", "Telugu", "Hindi", "Odia"], correct: 3 },
    { question: "The city of Puri is one of the four major Hindu pilgrimage sites known as:", options: ["Sapta Puri", "Char Dham", "Dwadasa Jyotirlinga", "Pancha Kshetras"], correct: 1 },
    { question: "Which of these is a tribal art form of Odisha?", options: ["Warli Painting", "Madhubani Painting", "Saura Art", "Gond Art"], correct: 2 },
    { question: "The 'Dhauli' peace pagoda near Bhubaneswar commemorates which historical event?", options: ["The Kalinga War", "The Battle of Plassey", "The First War of Independence", "The Gupta Empire's expansion"], correct: 0 },
    { question: "What is 'Chhena Poda'?", options: ["A spicy snack", "A roasted cheese dessert", "A type of fish curry", "A vegetable stir-fry"], correct: 1 },
    { question: "Simlipal National Park is primarily a reserve for which animal?", options: ["Lions", "Rhinoceros", "Tigers", "Elephants"], correct: 2 },
    { question: "The term 'Bhubaneswar' is often translated as:", options: ["City of Temples", "Lord of the Universe", "Land of Rivers", "Lord of the Three Worlds"], correct: 3 },
    { question: "Which district is known as the 'Rice Bowl of Odisha'?", options: ["Cuttack", "Bargarh", "Puri", "Ganjam"], correct: 1 },
    { question: "The rock edicts of which emperor are found at Dhauli and Jaugada?", options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Harshavardhana"], correct: 1 },
    { question: "What is the traditional folk theatre of Odisha called?", options: ["Nautanki", "Tamasha", "Jatra", "Bhavai"], correct: 2 },
    { question: "Gopalpur-on-Sea is a famous beach town in which district of Odisha?", options: ["Puri", "Ganjam", "Balasore", "Khurda"], correct: 1 },
    { question: "The festival of 'Nuakhai' is primarily a celebration of what?", options: ["New Year", "New Harvest", "Monsoon", "Victory"], correct: 1 },
    { question: "Which of these is NOT a part of the 'Golden Triangle' of tourism in Odisha?", options: ["Bhubaneswar", "Puri", "Konark", "Cuttack"], correct: 3 },
    { question: "The Kandhamal district is famous for producing which spice?", options: ["Cardamom", "Clove", "Turmeric", "Cinnamon"], correct: 2 },
    { question: "What is the meaning of 'Dhanyabad' in Odia?", options: ["Hello", "Please", "Sorry", "Thank you"], correct: 3 },
    { question: "The Deomali peak, the highest in Odisha, is located in which district?", options: ["Koraput", "Mayurbhanj", "Kalahandi", "Sundargarh"], correct: 0 },
    { question: "The 'Gotipua' dance is a precursor to which classical dance form?", options: ["Odissi", "Kathakali", "Manipuri", "Sattriya"], correct: 0 },
    { question: "Which freedom fighter from Odisha was popularly known as 'Utkal Gourab'?", options: ["Gopabandhu Das", "Madhusudan Das", "Biju Patnaik", "Subhas Chandra Bose"], correct: 1 },
    { question: "The Nandankanan Zoological Park is unique for being one of the few zoos in the world with:", options: ["White Tigers", "Giant Pandas", "Komodo Dragons", "Polar Bears"], correct: 0 },
    { question: "What is 'Dahi Bara Aloo Dum'?", options: ["A dessert", "A popular street food snack", "A breakfast dish", "A type of curry"], correct: 1 },
    { question: "The Rajarani Temple in Bhubaneswar is famous for its:", options: ["Large Shiva Linga", "Lack of a presiding deity", "Golden spire", "Association with royalty"], correct: 1 },
    { question: "The 'Boita Bandana' festival celebrates Odisha's ancient:", options: ["Military victories", "Literary achievements", "Maritime history", "Agricultural practices"], correct: 2 },
    { question: "Which city is known as the 'Steel City of Odisha'?", options: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"], correct: 2 },
    { question: "The applique work of which town is famous and has a GI tag?", options: ["Puri", "Pipili", "Raghurajpur", "Baripada"], correct: 1 },
    { question: "What does 'Kemiti Achanti?' mean in Odia?", options: ["What is your name?", "Where are you from?", "How are you?", "What time is it?"], correct: 2 },
    { question: "The Barehipani Falls, one of India's highest, is located in which national park?", options: ["Bhitarkanika", "Simlipal", "Ushakothi", "Satkosia"], correct: 1 },
    { question: "The 'Chhau' dance of Mayurbhanj is a form of:", options: ["Classical dance", "Folk dance", "Martial dance", "Tribal dance"], correct: 2 },
    { question: "Which place in Odisha is believed to be the 'Shakti Peetha' where Goddess Sati's navel fell?", options: ["Konark", "Puri (Vimala Temple)", "Jajpur (Biraja Temple)", "Bhubaneswar (Lingaraj)"], correct: 2 },
    { question: "The writer of the epic 'Odia Mahabharata' was:", options: ["Fakir Mohan Senapati", "Sarala Das", "Gopabandhu Das", "Radhanath Ray"], correct: 1 },
    { question: "What is the name of the international airport in Bhubaneswar?", options: ["Netaji Subhas Airport", "Biju Patnaik Airport", "Veer Surendra Sai Airport", "Utkal Airport"], correct: 1 }
];
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

var currentCardIndex = 0;
var map = null;
var isCardFlipped = false;

var vocabulary = [
    { odia: 'Aamba (ଆମ)', english: 'Mango' },
    { odia: 'Pani (ପାଣି)', english: 'Water' },
    { odia: 'Ghara (ଘର)', english: 'House' },
    { odia: 'Bhai (ଭାଇ)', english: 'Brother' },
    { odia: 'Bhagini (ଭଗିନୀ)', english: 'Sister' }
];

// =================================================================
// 2. FUNCTION DEFINITIONS
// =================================================================

// --- General Page Functions ---
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');

    if (sectionName === 'tour' && map === null) {
        loadMap();
    }
}

function loadMap() {
    map = L.map('map').setView([20.2961, 85.8245], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    touristLocations.forEach(place => {
        const marker = L.marker([place.coords.lat, place.coords.lng]).addTo(map);
        const popupContent = `
            <b>${place.name}</b><br>
            <button class="btn popup-learn-more-btn" data-id="${place.id}" style="margin-top: 10px;">Learn More</button>
        `;
        marker.bindPopup(popupContent);
    });
}
    
    function initTourGuide() {
        const placesGrid = document.getElementById('places-grid');
        if (!placesGrid) return;
    
        placesGrid.innerHTML = ''; // Clear existing content
    
        touristLocations.forEach(location => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <div class="place-card-img" style="background-image: url('${location.image}'); background-size: cover; background-position: center;">
                    <!-- Image is now a background -->
                </div>
                <div class="place-info">
                    <h3>${location.name}</h3>
                    <p>${location.short_desc}</p>
                    <button class="btn" data-id="${location.id}">Learn More</button>
                </div>
            `;
            placesGrid.appendChild(card);
        });
    }


    // ---------------------------------------------------------------------
    // Add these variables to your global variables section
let currentGalleryIndex = 0;
let currentLocationImages = [];

// Update your openTourModal function


    function filterPlaces() {
        const searchBar = document.getElementById('search-bar');
        const searchTerm = searchBar.value.toLowerCase();

        filteredPlaces = allPlaces.filter(place => 
            place.name.toLowerCase().includes(searchTerm) ||
            place.short_desc.toLowerCase().includes(searchTerm)
        );
        displayedPlaces = 0;
        document.getElementById('places-grid').innerHTML = ''; // Clear existing content
        displayPlaces();
    }

    

function openTourModal(locationId) {
    const location = touristLocations.find(loc => loc.id === locationId);
    if (!location) return;

    // Set up gallery images
    currentLocationImages = location.images || [];
    currentGalleryIndex = 0;

    // Update modal content
    document.getElementById('tour-modal-title').textContent = location.name;
    document.getElementById('tour-modal-history').textContent = location.details.history;
    document.getElementById('tour-modal-importance').textContent = location.details.importance;
    document.getElementById('tour-modal-nature').textContent = location.details.nature;
    document.getElementById('tour-modal-heritage').textContent = location.details.heritage;
    document.getElementById('tour-modal-wiki-link').href = location.wiki_link;

    // Create and populate gallery
    createImageGallery();
    
    // Show modal
    document.getElementById('tour-modal-overlay').classList.add('visible');
}

function createImageGallery() {
    const galleryContainer = document.querySelector('.tour-modal-gallery .gallery-container');
    
    if (currentLocationImages.length === 0) {
        // Fallback if no images array exists
        galleryContainer.innerHTML = `
            <div class="gallery-slides">
                <div class="gallery-slide">
                    <img src="images/placeholder.jpg" alt="No image available">
                </div>
            </div>
        `;
        return;
    }


    

    // Create slides HTML
    let slidesHtml = '<div class="gallery-slides" style="transform: translateX(0%)">';
    currentLocationImages.forEach((image, index) => {
        slidesHtml += `
            <div class="gallery-slide">
                <img src="${image}" alt="Gallery image ${index + 1}">
            </div>
        `;
    });
    slidesHtml += '</div>';

    // Create navigation buttons (only if more than 1 image)
    let navigationHtml = '';
    if (currentLocationImages.length > 1) {
        navigationHtml = `
            <button class="gallery-nav prev" onclick="changeGallerySlide(-1)">❮</button>
            <button class="gallery-nav next" onclick="changeGallerySlide(1)">❯</button>
        `;
    }

    // Create indicators (only if more than 1 image)
    let indicatorsHtml = '';
    if (currentLocationImages.length > 1) {
        indicatorsHtml = '<div class="gallery-indicators">';
        currentLocationImages.forEach((_, index) => {
            indicatorsHtml += `<div class="gallery-indicator ${index === 0 ? 'active' : ''}" onclick="goToGallerySlide(${index})"></div>`;
        });
        indicatorsHtml += '</div>';
    }

    // Set the complete gallery HTML
    galleryContainer.innerHTML = slidesHtml + navigationHtml + indicatorsHtml;
}

function changeGallerySlide(direction) {
    if (currentLocationImages.length <= 1) return;
    
    currentGalleryIndex += direction;
    
    // Handle loop around
    if (currentGalleryIndex >= currentLocationImages.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = currentLocationImages.length - 1;
    }
    
    updateGalleryDisplay();
}

function goToGallerySlide(index) {
    if (currentLocationImages.length <= 1) return;
    currentGalleryIndex = index;
    updateGalleryDisplay();
}

function updateGalleryDisplay() {
    const slidesContainer = document.querySelector('.gallery-slides');
    const indicators = document.querySelectorAll('.gallery-indicator');
    
    if (slidesContainer) {
        const translateX = -(currentGalleryIndex * 100);
        slidesContainer.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentGalleryIndex);
    });
}

// Add keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    if (document.getElementById('tour-modal-overlay').classList.contains('visible')) {
        if (e.key === 'ArrowLeft') {
            changeGallerySlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeGallerySlide(1);
        } else if (e.key === 'Escape') {
            closeTourModal();
        }
    }
});
    
    function closeTourModal() {
        document.getElementById('tour-modal-overlay').classList.remove('visible');
    }
    
function initCultureSection() {
    const heritageGrid = document.getElementById('heritage-arts-grid');
    const foodGrid = document.getElementById('food-grid');

    if (!heritageGrid || !foodGrid) return;

    heritageGrid.innerHTML = '';
    foodGrid.innerHTML = '';

    // Populate Heritage & Arts
    heritageAndArts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <div class="art-image">${item.image_placeholder}</div>
            <div class="art-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Origin:</strong> ${item.origin}</p>
                <p><strong>Specialty:</strong> ${item.specialty}</p>
            </div>
        `;
        heritageGrid.appendChild(card);
    });

    // Populate Famous Dishes
    famousDishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'art-card'; // Reusing the same card style
        card.innerHTML = `
            <div class="art-image">${dish.image_placeholder}</div>
            <div class="art-info">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p><strong>Type:</strong> ${dish.type}</p>
                <p><strong>Key Ingredients:</strong> ${dish.key_ingredients}</p>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}


//--------------------------------------Speaking-----------------------------------------------------------------------

function speakWord(word, isOdia = true) {
    if (!('speechSynthesis' in window)) {
        alert('Audio: ' + word);
        return;
    }

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    // Wait for voices to be loaded
    function speakWithVoice() {
        const utterance = new SpeechSynthesisUtterance(word);
        
        // Get all available voices
        const voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
        
        // Priority order for voice selection - specifically targeting Indian/female voices
        const voicePreferences = [
            // Google voices (usually better quality)
            voices.find(voice => 
                voice.name.toLowerCase().includes('google') && 
                voice.lang.includes('en-IN') &&
                !voice.name.toLowerCase().includes('male')
            ),
            // Indian English voices
            voices.find(voice => 
                voice.lang.includes('en-IN') && 
                !voice.name.toLowerCase().includes('male')
            ),
            // Any Indian voice
            voices.find(voice => voice.lang.includes('en-IN')),
            // Female voices in general English
            voices.find(voice => 
                voice.lang.includes('en') && 
                (voice.name.toLowerCase().includes('female') || 
                 voice.name.toLowerCase().includes('woman') ||
                 voice.name.toLowerCase().includes('zira') ||
                 voice.name.toLowerCase().includes('susan') ||
                 voice.name.toLowerCase().includes('samantha'))
            ),
            // Google English voices (often sound more natural)
            voices.find(voice => 
                voice.name.toLowerCase().includes('google') && 
                voice.lang.includes('en')
            ),
            // Fallback to any English voice that's not explicitly male
            voices.find(voice => 
                voice.lang.includes('en') && 
                !voice.name.toLowerCase().includes('male')
            )
        ];

        // Select the first available voice from preferences
        const selectedVoice = voicePreferences.find(voice => voice) || voices[0];
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log('Selected voice:', selectedVoice.name, selectedVoice.lang);
        }

        // Optimize settings for Indian English pronunciation
        utterance.rate = 0.6;        // Very slow for clarity
        utterance.pitch = 1.4;       // Higher pitch for female voice
        utterance.volume = 1.0;      // Full volume
        
        // Use Indian English if available, otherwise English
        if (isOdia) {
            utterance.lang = voices.some(v => v.lang.includes('en-IN')) ? 'en-IN' : 'en-US';
        } else {
            utterance.lang = 'en-IN';
        }

        // Visual feedback
        const speakBtn = document.getElementById('speak-btn');
        if (speakBtn) {
            speakBtn.innerHTML = '🔊 Speaking...';
            speakBtn.disabled = true;
            
            utterance.onstart = function() {
                console.log('Speech started with voice:', selectedVoice?.name);
            };
            
            utterance.onend = function() {
                speakBtn.innerHTML = '🔊 Listen';
                speakBtn.disabled = false;
                console.log('Speech ended');
            };
            
            utterance.onerror = function(event) {
                speakBtn.innerHTML = '🔊 Listen';
                speakBtn.disabled = false;
                console.error('Speech error:', event.error);
            };
        }

        speechSynthesis.speak(utterance);
    }

    // Ensure voices are loaded before speaking
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', speakWithVoice, { once: true });
    } else {
        speakWithVoice();
    }
}

// Improved pronunciation for Odia words using phonetic approximations
const odiaPhonetics = {
    'Namaskar': 'Nah-mas-kaar',
    'Dhanyabad': 'Dhan-ya-baad', 
    'Kemiti achanti': 'Kay-mi-ti ah-chan-ti',
    'Aamba': 'Aam-baa',
    'Pani': 'Paa-nee',
    'Ghara': 'Gha-raa',
    'Bhai': 'Bhaa-ee',
    'Bhagini': 'Bha-gi-nee'
};

// Enhanced function to speak with better pronunciation
function speakOdiaWord(word) {
    // Clean the word to get just the Odia part
    const cleanWord = word.split('(')[0].trim();
    
    // Use phonetic version if available
    const phoneticWord = odiaPhonetics[cleanWord] || word;
    
    console.log('Speaking:', cleanWord, '→', phoneticWord);
    speakWord(phoneticWord, true);
}

// Function to speak current lesson with improved pronunciation
function speakCurrentLesson() {
    const phrases = [
        'Nah-mas-kaar',           // Namaskar - Hello/Goodbye
        'Dhan-ya-baad',           // Dhanyabad - Thank you  
        'Kay-mi-ti ah-chan-ti'    // Kemiti achanti - How are you?
    ];
    
    let index = 0;
    
    function speakNext() {
        if (index < phrases.length) {
            speakWord(phrases[index], true);
            
            setTimeout(() => {
                index++;
                if (index < phrases.length) {
                    speakNext();
                }
            }, 3000); // 3 second delay for slower pace
        }
    }
    
    speakNext();
}

// Enhanced flashcard speech with phonetic pronunciation
function speakFlashcard() {
    const flashcardText = document.getElementById('flashcard-text');
    if (flashcardText) {
        const text = flashcardText.textContent;
        
        // Check if it's Odia (contains Odia script) or English
        if (text.includes('à¬') || text.includes('(à¬')) {
            // It's Odia - use phonetic pronunciation
            speakOdiaWord(text);
        } else {
            // It's English - speak normally with Indian English
            speakWord(text, false);
        }
    }
}

// Voice testing function to help user find the best voice
function testVoices() {
    const voices = speechSynthesis.getVoices();
    console.log('\n=== Testing Available Voices ===');
    
    // Test Indian English voices specifically
    const indianVoices = voices.filter(v => v.lang.includes('en-IN'));
    const femaleVoices = voices.filter(v => 
        (v.lang.includes('en')) && 
        (v.name.toLowerCase().includes('female') || 
         v.name.toLowerCase().includes('woman') ||
         !v.name.toLowerCase().includes('male'))
    );
    
    console.log('Indian English voices:', indianVoices.map(v => v.name));
    console.log('Female-like voices:', femaleVoices.map(v => v.name));
    
    // Test the selected voice
    speakWord('Hello, Welcome to Virtual Odisha ', false);
}

// Initialize voice system with better loading
function initializeVoiceSystem() {
    console.log('Initializing voice system...');
    
    function onVoicesChanged() {
        const voices = speechSynthesis.getVoices();
        console.log(`Loaded ${voices.length} voices`);
        
        // Log available Indian/female voices for debugging
        const indianVoices = voices.filter(v => v.lang.includes('en-IN'));
        const femaleVoices = voices.filter(v => 
            v.name.toLowerCase().includes('female') || 
            v.name.toLowerCase().includes('woman') ||
            (!v.name.toLowerCase().includes('male') && v.lang.includes('en'))
        );
        
        if (indianVoices.length > 0) {
            console.log('Indian English voices found:', indianVoices.map(v => v.name));
        }
        if (femaleVoices.length > 0) {
            console.log('Female-like voices found:', femaleVoices.map(v => v.name));
        }
        
        // Test voice availability
        if (voices.length === 0) {
            console.warn('No voices available');
        }
    }

    // Handle voice loading
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    } else {
        onVoicesChanged();
    }
    
    // Add a test button for voice debugging (optional)
    const learnSection = document.getElementById('learn');
    if (learnSection && !document.getElementById('voice-test-btn')) {
        const testButton = document.createElement('button');
        testButton.id = 'voice-test-btn';
        testButton.className = 'btn';
        testButton.innerHTML = '🎤 Test Voice';
        testButton.style.cssText = 'margin-left: 10px; font-size: 0.9rem; padding: 8px 16px;';
        testButton.onclick = testVoices;
        
        const speakBtn = document.getElementById('speak-btn');
        if (speakBtn && speakBtn.parentNode) {
            speakBtn.parentNode.insertBefore(testButton, speakBtn.nextSibling);
        }
    }
}


function flipCard() {
    const cardText = document.getElementById('flashcard-text');
    const currentCard = vocabulary[currentCardIndex];
    isCardFlipped = !isCardFlipped;
    cardText.textContent = isCardFlipped ? currentCard.english : currentCard.odia;
    
    // Add this line for audio:
    setTimeout(() => speakFlashcard(), 300);
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
    const cardText = document.getElementById('flashcard-text');
    cardText.textContent = vocabulary[currentCardIndex].odia;
    isCardFlipped = false;
    
    // Add this line for audio:
    setTimeout(() => speakFlashcard(), 300);
}

//-------------------------------------------------------------------------------end-----------------------------------------------------------

// --- Quick Quiz Functions ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleArray(odishaQuizData);
    quizQuestions = odishaQuizData.slice(0, 5);
    currentQuestionIndex = 0;
    quizScore = 0;
    displayQuizQuestion();
}

function displayQuizQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    const quizArea = document.getElementById('quiz-area');
    
    let optionsHtml = '<div class="quiz-options">';
    questionData.options.forEach((option, index) => {
        optionsHtml += `<div class="quiz-option" data-index="${index}">${option}</div>`;
    });
    optionsHtml += '</div>';

    quizArea.innerHTML = `
        <p><strong>${currentQuestionIndex + 1}. ${questionData.question}</strong></p>
        ${optionsHtml}
    `;
    document.getElementById('quiz-navigation').style.display = 'none';
}

function checkQuizAnswer(selectedOption, selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.quiz-option');

    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === correctIndex) {
            option.classList.add('correct');
        }
    });

    if (selectedIndex !== correctIndex) {
        selectedOption.classList.add('incorrect');
    } else {
        quizScore++;
    }

    const navButton = document.querySelector('#quiz-navigation .btn');
    navButton.textContent = (currentQuestionIndex === quizQuestions.length - 1) ? 'Show Results' : 'Next Question';
    document.getElementById('quiz-navigation').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuizQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizArea = document.getElementById('quiz-area');
    let emoji = '🤔';
    if (quizScore >= 4) emoji = '🎉';
    else if (quizScore >= 2) emoji = '😊';

    quizArea.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p style="font-size: 1.5rem; margin: 1rem 0;">You scored ${quizScore} out of ${quizQuestions.length} ${emoji}</p>
    `;
    const navButton = document.querySelector('#quiz-navigation .btn');
    navButton.textContent = 'Play Again';
}

// --- Weather Function ---
async function updateWeather() {
    const apiKey = APIKEY; // <-- IMPORTANT: Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const weatherDisplay = document.getElementById('weather-display');

    if (!city) {
        weatherDisplay.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    weatherDisplay.innerHTML = '<p>Refreshing weather data...</p>';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            let errorMessage = `Error: ${response.status}`;
            if (response.status === 401) errorMessage = 'Invalid API Key.';
            else if (response.status === 404) errorMessage = 'City not found.';
            throw new Error(errorMessage);
        }

        const data = await response.json();
        const { main, weather, wind, name } = data;
        const temp = Math.round(main.temp);
        const condition = weather[0].main;
        const description = weather[0].description;
        const windSpeed = Math.round(wind.speed * 3.6);
        const humidity = main.humidity;

        const weatherIcons = {
            Clouds: '☁️', Clear: '☀️', Rain: '🌧️', Drizzle: '🌦️',
            Mist: '🌫️', Smoke: '🌫️', Haze: '🌫️', Dust: '🌫️', Fog: '🌫️', Sand: '🌫️', Ash: '🌫️', Squall: '🌫️', Tornado: '🌪️',
            Snow: '❄️', Thunderstorm: '⛈️'
        };
        const weatherIcon = weatherIcons[condition] || '🌤️';
        const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);

        weatherDisplay.innerHTML = `
            <div class="weather-card-display">
                <div class="weather-main">
                    <div class="weather-icon">${weatherIcon}</div>
                    <div class="weather-temp">${temp}°C</div>
                    <div class="weather-city">${name}</div>
                    <div class="weather-desc">${capitalizedDescription}</div>
                </div>
                <div class="weather-details">
                    <div class="weather-detail-item">
                        <span class="detail-icon">💧</span>
                        <div>
                            <div class="detail-value">${humidity}%</div>
                            <div class="detail-label">Humidity</div>
                        </div>
                    </div>
                    <div class="weather-detail-item">
                        <span class="detail-icon">💨</span>
                        <div>
                            <div class="detail-value">${windSpeed} km/h</div>
                            <div class="detail-label">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>`;

    } catch (error) {
        console.error("Error fetching weather:", error);
        weatherDisplay.innerHTML = `<p>Unable to fetch weather data. ${error.message}</p>`;
    }
}

// --- Safety Hub Functions ---
function showDistrictInfo(districtName) {
    const districtInfoData = {
        khordha: '<strong>Emergency Center:</strong> Bhubaneswar<br><strong>Contact:</strong> 0674-2345678<br><strong>Evacuation Centers:</strong> 15 locations<br><strong>Nearest Hospital:</strong> AIIMS Bhubaneswar',
        cuttack: '<strong>Emergency Center:</strong> Cuttack<br><strong>Contact:</strong> 0671-2234567<br><strong>Evacuation Centers:</strong> 12 locations<br><strong>Nearest Hospital:</strong> SCB Medical College',
        puri: '<strong>Emergency Center:</strong> Puri<br><strong>Contact:</strong> 06752-223456<br><strong>Evacuation Centers:</strong> 8 locations<br><strong>Nearest Hospital:</strong> District Headquarters Hospital',
        ganjam: '<strong>Emergency Center:</strong> Berhampur<br><strong>Contact:</strong> 0680-2234567<br><strong>Evacuation Centers:</strong> 20 locations<br><strong>Nearest Hospital:</strong> MKCG Medical College'
    };

    const infoDiv = document.getElementById('district-info');
    if (districtName && districtInfoData[districtName]) {
        infoDiv.innerHTML = districtInfoData[districtName];
        infoDiv.style.display = 'block';
    } else {
        infoDiv.innerHTML = '';
        infoDiv.style.display = 'none';
    }
}

function saveChecklist() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    alert(`Progress saved! You have completed ${checkedCount} out of ${checkboxes.length} safety preparations.`);
}

function updateProgress(percentage) {
    document.getElementById('progress').style.width = percentage + '%';
}

function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}

// --- Animation Functions ---
function createFirefly(container, config) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    const size = config.minSize + Math.random() * (config.maxSize - config.minSize);
    firefly.dataset.size = size;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firefly.style.transform = `translate(${x}px, ${y}px)`;

    const hue = 30 + Math.random() * 20;
    const saturation = 80 + Math.random() * 20;
    const lightness = 70 + Math.random() * 20;
    const alpha = config.minOpacity + Math.random() * (config.maxOpacity - config.minOpacity);

    firefly.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    firefly.style.boxShadow = `
        0 0 10px 2px hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 2}),
        0 0 20px 5px hsla(${hue - 10}, ${saturation - 10}%, ${lightness - 10}%, ${alpha / 3})
    `;

    container.appendChild(firefly);
    return firefly;
}

function initFireflies() {
    const config = {
        firefliesCount: 40,
        minOpacity: 0.2, maxOpacity: 0.9,
        minSize: 2, maxSize: 6,
        containerSelector: '.fireflies-container',
        mouseInfluenceRadius: 200,
        mouseAttractionStrength: 0.1
    };

    const container = document.querySelector(config.containerSelector);
    if (!container) return;
    container.innerHTML = '';

    const fireflies = [];
    for (let i = 0; i < config.firefliesCount; i++) {
        const firefly = createFirefly(container, config);
        firefly.dataset.baseX = Math.random() * window.innerWidth;
        firefly.dataset.baseY = Math.random() * window.innerHeight;
        firefly.dataset.x = firefly.dataset.baseX;
        firefly.dataset.y = firefly.dataset.baseY;
        firefly.dataset.vx = Math.random() * 2 - 1;
        firefly.dataset.vy = Math.random() * 2 - 1;
        fireflies.push(firefly);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseActive = false;
    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseActive = true;
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => { isMouseActive = false; }, 3000);
    });

    function animateFireflies() {
        fireflies.forEach((firefly, index) => {
            let x = parseFloat(firefly.dataset.x);
            let y = parseFloat(firefly.dataset.y);
            let vx = parseFloat(firefly.dataset.vx);
            let vy = parseFloat(firefly.dataset.vy);
            const baseX = parseFloat(firefly.dataset.baseX);
            const baseY = parseFloat(firefly.dataset.baseY);

            vx += (Math.random() - 0.5) * 0.3;
            vy += (Math.random() - 0.5) * 0.3;
            vx *= 0.95;
            vy *= 0.95;

            if (isMouseActive) {
                const dx = mouseX - x;
                const dy = mouseY - y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseInfluenceRadius) {
                    const attractionFactor = config.mouseAttractionStrength * (1 - distance / config.mouseInfluenceRadius);
                    vx += dx * attractionFactor;
                    vy += dy * attractionFactor;
                    const glowIntensity = 1 - (distance / config.mouseInfluenceRadius);
                    firefly.style.opacity = 0.4 + glowIntensity * 0.6;
                    firefly.style.boxShadow = `
                        0 0 ${5 + glowIntensity * 15}px ${1 + glowIntensity * 4}px rgba(255, 217, 179, ${0.3 + glowIntensity * 0.7}),
                        0 0 ${10 + glowIntensity * 20}px ${2 + glowIntensity * 6}px rgba(255, 179, 102, ${0.2 + glowIntensity * 0.4})`;
                    firefly.style.transform = `translate(${x}px, ${y}px) scale(${1 + glowIntensity * 0.5})`;
                } else {
                    firefly.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                }
            } else {
                vx += (baseX - x) * 0.005;
                vy += (baseY - y) * 0.005;
                const pulseFactor = Math.sin(Date.now() / 1000 + index) * 0.3 + 0.7;
                firefly.style.opacity = 0.2 + pulseFactor * 0.3;
                firefly.style.boxShadow = `
                    0 0 5px 1px rgba(255, 217, 179, ${pulseFactor * 0.3}),
                    0 0 10px 2px rgba(255, 179, 102, ${pulseFactor * 0.2})`;
                firefly.style.transform = `translate(${x}px, ${y}px) scale(${0.8 + pulseFactor * 0.2})`;
            }

            x += vx;
            y += vy;

            if (x < 0 || x > window.innerWidth) vx *= -0.5;
            if (y < 0 || y > window.innerHeight) vy *= -0.5;

            firefly.dataset.x = Math.max(0, Math.min(window.innerWidth, x));
            firefly.dataset.y = Math.max(0, Math.min(window.innerHeight, y));
            firefly.dataset.vx = vx;
            firefly.dataset.vy = vy;

            firefly.style.transform = `translate(${firefly.dataset.x}px, ${firefly.dataset.y}px)`;
        });
        requestAnimationFrame(animateFireflies);
    }

    animateFireflies();

    window.addEventListener('resize', () => {
        fireflies.forEach(firefly => {
            firefly.dataset.baseX = Math.random() * window.innerWidth;
            firefly.dataset.baseY = Math.random() * window.innerHeight;
        });
    });
}

function createPageReveal() {
    const pageReveal = document.createElement('div');
    pageReveal.className = 'page-reveal';

    for (let i = 0; i < 5; i++) {
        const panel = document.createElement('div');
        panel.className = 'reveal-panel';
        pageReveal.appendChild(panel);
    }

    const revealLogo = document.createElement('div');
    revealLogo.className = 'reveal-logo';
    revealLogo.innerHTML = `<div class="logo-text"><div class="red-part">Odisha</div><div class="iva-part">Explorer</div></div>`;
    pageReveal.appendChild(revealLogo);
    document.body.prepend(pageReveal);

    ['header', '.home'].forEach((selector, index) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('content-reveal');
            el.dataset.revealIndex = index;
        });
    });
}

function revealPage() {
    const pageReveal = document.querySelector('.page-reveal');
    if (pageReveal) {
        pageReveal.classList.add('active');
        setTimeout(() => {
            pageReveal.style.pointerEvents = 'none';
            setTimeout(() => pageReveal.remove(), 1000);
        }, 1500);
    }
}

// =================================================================
// 3. EVENT LISTENERS
// =================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations that can run once the DOM is ready
    initFireflies();
    createPageReveal();
    initTourGuide();
    initCultureSection();

    // --- Event Listeners Setup ---

    // Navigation
    document.querySelector('a.logo').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionName = e.target.dataset.section;
            if (sectionName) {
                showSection(sectionName);
            }
        });
    });

    // Home CTA
    document.querySelector('.cta-button').addEventListener('click', () => showSection('tour'));

    // Tour Guide Modal
    document.getElementById('places-grid').addEventListener('click', function(e) {
        if (e.target && e.target.matches('button.btn')) {
            const locationId = e.target.dataset.id;
            if (locationId) {
                openTourModal(locationId);
            }
        }
    });
    // Add a delegated event listener for map popups
    document.getElementById('map').addEventListener('click', function(e) {
        if (e.target && e.target.matches('button.popup-learn-more-btn')) {
            const locationId = e.target.dataset.id;
            if (locationId) {
                openTourModal(locationId);
            }
        }
    });
    const modalOverlay = document.getElementById('tour-modal-overlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeTourModal();
        }
    });
    document.getElementById('tour-modal-close').addEventListener('click', closeTourModal);

    // Learn Odia Section
    document.getElementById('speak-btn').addEventListener('click', speakCurrentLesson);
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    document.getElementById('next-card-btn').addEventListener('click', nextCard);

    // Quiz
    document.getElementById('quiz-area').addEventListener('click', function(e) {
        if (e.target && e.target.matches('.quiz-option')) {
            const selectedIndex = parseInt(e.target.dataset.index, 10);
            checkQuizAnswer(e.target, selectedIndex);
        }
    });
    document.querySelector('#quiz-navigation .btn').addEventListener('click', () => {
        const btn = document.querySelector('#quiz-navigation .btn');
        if (btn.textContent === 'Play Again') {
            startQuiz();
        } else {
            nextQuizQuestion();
        }
    });

    // Safety Hub
    document.getElementById('weather-btn').addEventListener('click', updateWeather);
    document.getElementById('save-checklist-btn').addEventListener('click', saveChecklist);
    document.getElementById('district-selector').addEventListener('change', (e) => showDistrictInfo(e.target.value));
});

window.addEventListener('load', function () {
    // Initialize app logic that should run after all resources (images, etc.) are loaded
    updateProgress(45);
    startQuiz();
    updateWeather();
    console.log('Welcome to Odisha Explorer! Discover the serene beauty of Odisha.');

    // Trigger the page reveal animation after a short delay
    setTimeout(() => {
        revealPage();
        setTimeout(() => {
            document.body.classList.add('page-loaded');
        }, 1500);
    }, 800);
});
//----------------------------------------------------------------------------------------------------
function initializeVoices() {
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', function() {
            console.log('Voices loaded:', speechSynthesis.getVoices().length);
        });
    }
}

// Call initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVoiceSystem);
} else {
    initializeVoiceSystem();
}

// Export functions for use in your existing code
window.speakCurrentLesson = speakCurrentLesson;
window.speakFlashcard = speakFlashcard;
window.speakOdiaWord = speakOdiaWord;