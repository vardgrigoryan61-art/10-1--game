const regions = [
    { 
        id: 1, name: "Շիրակ", 
        desc: "Շիրակը Հայաստանի հյուսիսարևմտյան դարպասն է, որը հայտնի է իր խստաշունչ ձմեռներով, սև տուֆակերտ ճարտարապետությամբ և հսկայական ոսկեգույն հացահատիկային արտերով: Մարզկենտրոնը Գյումրին է:",
        questions: [
            { q: "Ինչպիսի՞ հացահատիկային արտերով և ձմեռներով է հայտնի Շիրակի մարզը։", options: ["Ոսկեգույն հացահատիկային և խստաշունչ ձմեռներով", "Արևադարձային և մեղմ", "Անապատային"], correct: 0 },
            { q: "Ո՞րն է Շիրակի մարզկենտրոն քաղաքը տեքստի համաձայն։", options: ["Գյումրի", "Վանաձոր", "Արթիկ"], correct: 0 },
            { q: "Ի՞նչ գույնի տուֆակերտ ճարտարապետությամբ է առանձնանում այս մարզը։", options: ["Սև տուֆով", "Սպիտակ մարմարով", "Կարմիր կավով"], correct: 0 }
        ],
        completed: false, unlocked: true 
    },
    { 
        id: 2, name: "Լոռի", 
        desc: "Լոռին Հայաստանի ամենականաչ և անտառաշատ մարզերից է՝ կտրված խորը կիրճերով, որոնցով հոսում են արագահոս գետերը (օրինակ՝ Դեբեդը): Այն հարուստ է նաև լոբազգի մշակաբույսերով:",
        questions: [
            { q: "Ինչպիսի՞ն է Լոռվա բնությունը տեքստի նկարագրության համաձայն։", options: ["Ամենականաչ և անտառաշատ", "Անապատային ու չորային", "Տափաստանային"], correct: 0 },
            { q: "Ո՞ր գետն է հիշատակված որպես մարզով հոսող արագահոս գետ։", options: ["Դեբեդ", "Արաքս", "Հրազդան"], correct: 0 },
            { q: "Ինչպիսի՞ մշակաբույսերով է հարուստ Լոռին ըստ տեքստի։", options: ["Լոբազգի մշակաբույսերով", "Բրնձով", "Ձիթապտղով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 3, name: "Տավուշ", 
        desc: "Տավուշը հաճախ անվանում են հայկական շվեյցարիա։ Մարզը պատված է խիտ անտառներով, բլուրներով և հարուստ է վայրի մեղրատու բույսերով ու բնական աղբյուրներով:",
        questions: [
            { q: "Ի՞նչ անունով են հաճախ անվանում Տավուշի մարզը։", options: ["Հայկական շվեյցարիա", "Արարատյան դաշտ", "Սևանի ավազան"], correct: 0 },
            { q: "Ինչպիսի՞ բույսերով և աղբյուրներով է հարուստ մարզը ըստ նկարագրության։", options: ["Վայրի մեղրատու բույսերով և բնական աղբյուրներով", "Արևադարձային ծաղիկներով", "Անտառային սնկերով միայն"], correct: 0 },
            { q: "Ինչպիսի՞ն է մարզի մակերևույթը տեքստի համաձայն։", options: ["Պատված է խիտ անտառներով և բլուրներով", "Բացառապես հարթավայրային", "Քարքարոտ անապատ"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 4, name: "Արագածոտն", 
        desc: "Արագածոտնը տարածվում է Հայաստանի ամենաբարձր լեռան՝ Արագածի լանջերին։ Մարզի բարձրադիր գոտիներն ունեն յուրահատուկ կլիմա և հարմար են կարտոֆիլի ու լեռնային կուլտուրաների համար:",
        questions: [
            { q: "Ո՞ր լեռան լանջերին է տարածվում Արագածոտնի մարզը։", options: ["Արագած", "Արարատ", "Խուստուփ"], correct: 0 },
            { q: "Ո՞րն է բարձրադիր գոտիների համար նշված գլխավոր մշակաբույսը տեքստում։", options: ["Կարտոֆիլ", "Բրինձ", "Լոլիկ"], correct: 0 },
            { q: "Ինչպիսի՞ կլիմա ունեն մարզի բարձրադիր գոտիները ըստ նկարագրության։", options: ["Յուրահատուկ կլիմա", "Խիստ արևադարձային", "Տաք և խոնավ"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 5, name: "Կոտայք", 
        desc: "Կոտայքի մարզը գտնվում է երկրի սրտում։ Այն հայտնի է ինչպես բազմաթիվ առողջարաններով, այնպես էլ լեռնային մեղրի արտադրությամբ և հնագույն հուշարձաններով:",
        questions: [
            { q: "Որտեղի՞ն է գտնվում Կոտայքի մարզը ըստ նկարագրության։", options: ["Երկրի սրտում", "Ծայր հյուսիսում", "Հարավային սահմանին"], correct: 0 },
            { q: "Ի՞նչ արտադրությամբ է հայտնի Կոտայքը տեքստի համաձայն։", options: ["Լեռնային մեղրի արտադրությամբ", "Ձկնաբուծությամբ", "Բրնձի մշակությամբ"], correct: 0 },
            { q: "Բացի առողջարաններից, ինչո՞վ է դեռ հայտնի մարզը։", options: ["Հնագույն հուշարձաններով", "Ժամանակակից երկնաքերերով", "Մեծ նավահանգիստներով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 6, name: "Գեղարքունիք", 
        desc: "Գեղարքունիքը շրջապատում է հայոց կապույտ մարգարիտը՝ Սևանա լիճը։ Մարզի հողերը հարուստ են կարտոֆիլով, իսկ լիճը՝ յուրահատուկ ձկնատեսակներով:",
        questions: [
            { q: "Ինչպե՞ս է անվանում մարզը շրջապատող հայոց կապույտ մարգարիտը տեքստում։", options: ["Սևանա լիճ", "Արփա լիճ", "Վանա լիճ"], correct: 0 },
            { q: "Ի՞նչ բանջարեղենով են հարուստ մարզի հողերը ըստ նկարագրության։", options: ["Կարտոֆիլով", "Լոլիկով", "Վարունգով"], correct: 0 },
            { q: "Ինչո՞վ է հարուստ լիճը տեքստի համաձայն։", options: ["Յուրահատուկ ձկնատեսակներով", "Հանքային ջրերով", "Աղի բյուրեղներով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 7, name: "Արմավիր", 
        desc: "Արմավիրը տեղակայված է Արարատյան դաշտի սրտում։ Ունի շատ արևոտ օրեր, ջրառատ գետեր և հարուստ է խաղողի այգիներով ու բրնձի դաշտերով:",
        questions: [
            { q: "Որտե՞ղ է տեղակայված Արմավիրի մարզը ըստ նկարագրության։", options: ["Արարատյան դաշտի սրտում", "Լեռնային Ղարաբաղում", "Շիրակի դաշտավարությունում"], correct: 0 },
            { q: "Ինչպիսի՞ այգիներով է հարուստ մարզը տեքստի համաձայն։", options: ["Խաղողի այգիներով", "Խնձորի այգիներով", "Նռան այգիներով"], correct: 0 },
            { q: "Բացի խաղողից, ի՞նչ դաշտերով է հայտնի Արմավիրը։", options: ["Բրնձի դաշտերով", "Ցորենի արտերով", "Վուշի դաշտերով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 8, name: "Արարատ", 
        desc: "Արարատի մարզը ձգվում է Արարատյան դաշտի հարավային մասով։ Այն երկրի գյուղատնտեսական գլխավոր կենտրոններից է՝ հայտնի բանջարեղենով և հատկապես հյութեղ լոլիկով:",
        questions: [
            { q: "Արարատյան դաշտի ո՞ր մասով է ձգվում Արարատի մարզը։", options: ["Հարավային մասով", "Հյուսիսային մասով", "Արևելյան մասով"], correct: 0 },
            { q: "Ինչպիսի՞ գյուղատնտեսական կենտրոն է հանդիսանում մարզը ըստ նկարագրության։", options: ["Գլխավոր կենտրոններից մեկը", "Երկրորդական նշանակության", "Միայն անասնապահական"], correct: 0 },
            { q: "Հատկապես ի՞նչ հյութեղ բանջարեղենով է հայտնի մարզը տեքստում։", options: ["Լոլիկով", "Վարունգով", "Բիբարով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 9, name: "Վայոց Ձոր", 
        desc: "Վայոց Ձորը լեռնային, կիրճերով հարուստ մարզ է, որը համարվում է հայկական հնագույն գինեգործության բնօրրանը։ Այստեղ է գտնվում հայտնի Արենի քարանձավը:",
        questions: [
            { q: "Ինչպիսի՞ն է Վայոց Ձորի մակերևույթը ըստ նկարագրության։", options: ["Լեռնային, կիրճերով հարուստ", "Բացառապես հարթավայրային", "Անտառապատ դաշտավարություն"], correct: 0 },
            { q: "Ինչի՞ բնօրրան է համարվում այս մարզը տեքստի համաձայն։", options: ["Հայկական հնագույն գինեգործության", "Բրնձի արտադրության", "Թռչնաբուծության"], correct: 0 },
            { q: "Ո՞ր հայտնի քարանձավն է գտնվում Վայոց Ձորում ըստ նկարագրության։", options: ["Արենի քարանձավը", "Մագելի քարանձավը", "Ձիթհանքի քարանձավը"], correct: 0 }
        ],
        completed: false, unlocked: false 
    },
    { 
        id: 10, name: "Սյունիք", 
        desc: "Սյունիքը Հայաստանի հարավային անառիկ դարպասն է՝ խորը կիրճերով, հզոր լեռներով, անտառներով և հարուստ ընկուզենու այգիներով:",
        questions: [
            { q: "Հայաստանի ո՞ր դարպասն է համարվում Սյունիքը ըստ նկարագրության։", options: ["Հարավային անառիկ դարպասը", "Հյուսիսային արևոտ դարպասը", "Արևելյան մուտքը"], correct: 0 },
            { q: "Ինչպիսի՞ այգիներով է հարուստ Սյունիքը տեքստի համաձայն։", options: ["Ընկուզենու այգիներով", "Ծիրանի այգիներով", "Խնձորի այգիներով"], correct: 0 },
            { q: "Ի՞նչ բնական տարրերով է բնութագրվում Սյունիքի մարզը տեքստում։", options: ["Խորը կիրճերով, հզոր լեռներով և անտառներով", "Անապատներով և ավազուտներով", "Լճերով և ճահիճներով"], correct: 0 }
        ],
        completed: false, unlocked: false 
    }
];

let currentRegion = null;
let currentStep = "desc";
let score = 0;
let globalStampsCount = 8930;
let timerInterval = null;
let timeLeft = 30; // Սահմանված է 30 վայրկյան

const container = document.getElementById("regions-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.getElementById("close-modal");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const progressCount = document.getElementById("progress-count");
const progressFill = document.getElementById("progress-fill");
const scoreCountEl = document.getElementById("score-count");
const globalStampsEl = document.getElementById("global-stamps");
const timerBox = document.getElementById("timer-box");
const timeLeftEl = document.getElementById("time-left");

function renderRegions() {
    container.innerHTML = "";
    let completedCount = 0;

    regions.forEach((region, index) => {
        if (region.completed) completedCount++;

        const card = document.createElement("div");
        let cardClass = "";
        if (region.completed) cardClass = "completed";
        else if (!region.unlocked) cardClass = "locked";

        card.className = `region-card ${cardClass}`;
        
        let statusText = "📖 Բացել մարզը";
        if (region.completed) statusText = "✅ Անցած է";
        else if (!region.unlocked) statusText = "🔒 Արգելափակված է";

        card.innerHTML = `
            <h4>${region.name}</h4>
            <span>${statusText}</span>
        `;
        
        card.addEventListener("click", () => {
            if (region.unlocked || region.completed) {
                openModal(region);
            } else {
                alert("🔒 Այս մարզը դեռ արգելափակված է։ Նախ անցեք նախորդ մարզի քվեստը։");
            }
        });
        container.appendChild(card);
    });

    progressCount.textContent = completedCount;
    progressFill.style.width = `${(completedCount / 10) * 100}%`;
    scoreCountEl.textContent = score;
    globalStampsEl.textContent = globalStampsCount;
}

function openModal(region) {
    currentRegion = region;
    currentStep = "desc";
    modalTitle.textContent = region.name + " Մարզ";
    timerBox.style.display = "none";
    updateModalContent();
    modal.style.display = "flex";
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timeLeftEl.textContent = timeLeft;
    timerBox.style.display = "block";

    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Ժամանակն ավարտվեց! Փորձեք կրկին։");
            modal.style.display = "none";
        }
    }, 1000);
}

function updateModalContent() {
    quizOptions.innerHTML = "";

    if (currentRegion.completed) {
        timerBox.style.display = "none";
        modalDesc.style.display = "block";
        modalDesc.textContent = currentRegion.desc;
        quizQuestion.textContent = "🎉 Այս մարզի բոլոր հարցերը հաջողությամբ պատասխանված են, և կնիքը ստացված է։";
        return;
    }

    if (currentStep === "desc") {
        timerBox.style.display = "none";
        modalDesc.style.display = "block";
        modalDesc.textContent = currentRegion.desc;
        quizQuestion.textContent = "Ծանոթացա՞ք մարզի նկարագրությանը:";
        
        const startBtn = document.createElement("button");
        startBtn.className = "quiz-option";
        startBtn.style.textAlign = "center";
        startBtn.style.fontWeight = "bold";
        startBtn.style.background = "var(--terracotta)";
        startBtn.textContent = "🎯 Սկսել Քվեստը (30վրկ)";
        startBtn.addEventListener("click", () => {
            currentStep = 0;
            startTimer();
            updateModalContent();
        });
        quizOptions.appendChild(startBtn);

    } else {
        modalDesc.style.display = "none";
        
        const qData = currentRegion.questions[currentStep];
        quizQuestion.textContent = `Հարց ${currentStep + 1} / 3: ${qData.q}`;

        qData.options.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => checkAnswer(index));
            quizOptions.appendChild(btn);
        });
    }
}

function checkAnswer(selectedIndex) {
    const qData = currentRegion.questions[currentStep];

    if (selectedIndex === qData.correct) {
        score += 10;
        currentStep++;
        if (currentStep < currentRegion.questions.length) {
            updateModalContent();
        } else {
            clearInterval(timerInterval);
            currentRegion.completed = true;
            globalStampsCount += 3;

            const currentIndex = regions.findIndex(r => r.id === currentRegion.id);
            if (currentIndex < regions.length - 1) {
                regions[currentIndex + 1].unlocked = true;
            }

            renderRegions();
            modal.style.display = "none";
            alert(`🎉 Հիանալի է! Դուք հավաքեցիք +30 միավոր և ստացաք ${currentRegion.name} մարզի կնիքը։ Հաջորդ մարզը բացված է։`);
        }
    } else {
        score = Math.max(0, score - 5);
        scoreCountEl.textContent = score;
        alert("❌ Սխալ պատասխան է (-5 միավոր)։ Փորձեք կրկին։");
    }
}

closeModal.addEventListener("click", () => {
    clearInterval(timerInterval);
    modal.style.display = "none";
});

renderRegions();
