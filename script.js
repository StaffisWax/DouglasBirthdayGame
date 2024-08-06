let currentStep = 0;

const steps = [
    {
        question: 'Föreställ dig att du har haft en riktigt bra dag. Vilka faktorer tror du bidrog mest till att du kände dig lycklig den dagen?',
        options: [
            { text: 'Jag spelade tv-spel hela dagen och åt bara snabbmat.', correct: false },
            { text: 'Jag umgicks med vänner och familj, gjorde något jag brinner för, och tog tid att reflektera över vad jag uppskattar i livet.', correct: true },
            { text: 'Jag köpte många saker som jag ville ha men interagerade inte med någon.', correct: false },
            { text: 'Jag såg på TV hela dagen utan att röra mig.', correct: false },
            { text: 'Jag tog en lång promenad och njöt av naturen.', correct: true }
        ],
        image: 'happy_day.jpg'
    },
    {
        question: 'Hur tror du att dina värderingar och prioriteringar påverkar dina beslut och handlingar i vardagen?',
        options: [
            { text: 'Mina värderingar spelar ingen roll, jag gör bara det som känns bra för stunden.', correct: false },
            { text: 'Mina värderingar hjälper mig att fatta beslut som är i linje med mina långsiktiga mål och vad som är viktigt för mig.', correct: true },
            { text: 'Jag låter alltid andra bestämma vad jag ska göra.', correct: false },
            { text: 'Mina värderingar är viktiga men jag följer dem bara ibland.', correct: false },
            { text: 'Jag använder mina värderingar för att guida alla mina beslut.', correct: true }
        ],
        image: 'values.jpg'
    },
    {
        question: 'Om du kunde ge ett råd till ditt framtida jag, vad skulle det vara och varför?',
        options: [
            { text: 'Oroa dig inte för något, allt löser sig alltid av sig själv utan ansträngning.', correct: false },
            { text: 'Följ dina värderingar, var snäll mot dig själv och andra, och arbeta hårt för att nå dina mål.', correct: true },
            { text: 'Fokusera endast på att bli rik och berömd, resten spelar ingen roll.', correct: false },
            { text: 'Ge upp när det blir svårt; livet är för kort för att kämpa.', correct: false },
            { text: 'Planera noggrant och var redo att anpassa dig till förändringar.', correct: true }
        ],
        image: 'advice.jpg'
    },
    {
        question: 'Hur kan en balanserad kost påverka din mentala och fysiska prestation över tid?',
        options: [
            { text: 'Det spelar ingen roll vad jag äter så länge jag tränar mycket.', correct: false },
            { text: 'En balanserad kost ger kroppen de näringsämnen den behöver för att fungera optimalt, förbättrar energinivåer och koncentration, och stärker immunförsvaret.', correct: true },
            { text: 'En balanserad kost är bara viktig när jag känner mig sjuk eller trött.', correct: false },
            { text: 'Jag behöver bara äta protein för att bygga muskler.', correct: false },
            { text: 'Att äta mycket socker ger mig energi för hela dagen.', correct: false }
        ],
        image: 'balanced_diet.jpg'
    },
    {
        question: 'Vilka är några långsiktiga fördelar med att hålla en regelbunden träningsrutin?',
        options: [
            { text: 'Ingen; träning är bara för dem som vill tävla professionellt.', correct: false },
            { text: 'Regelbunden träning förbättrar hjärthälsa, stärker muskler och leder, förbättrar mental hälsa och ökar livslängden.', correct: true },
            { text: 'Träning är bra men det är okej att skippa den om jag känner mig trött ofta.', correct: false },
            { text: 'Jag tränar bara när jag har tid, det är inte så viktigt.', correct: false },
            { text: 'Att träna regelbundet hjälper mig att hantera stress bättre.', correct: true }
        ],
        image: 'exercise.jpg'
    },
    {
        question: 'Hur påverkar sömn din förmåga att prestera både mentalt och fysiskt?',
        options: [
            { text: 'Sömn är överskattat; jag kan prestera bra med bara några få timmars sömn.', correct: false },
            { text: 'Tillräcklig sömn är avgörande för återhämtning, energinivåer, koncentration och allmän hälsa.', correct: true },
            { text: 'Sömn är viktigt men jag kan kompensera bristande sömn med mycket kaffe.', correct: false },
            { text: 'Jag behöver bara sova när jag är trött.', correct: false },
            { text: 'Att sova mer än 8 timmar per natt gör mig tröttare.', correct: false }
        ],
        image: 'sleep.jpg'
    },
    {
        question: 'Hur bör du hantera en oväntad stor summa pengar för att både njuta av nuet och säkra din framtid?',
        options: [
            { text: 'Köpa den dyraste bilen jag kan hitta.', correct: false },
            { text: 'Spara en del av pengarna och investera i utbildning eller framtida möjligheter.', correct: true },
            { text: 'Spendera allt på resor utan att tänka på framtiden.', correct: false },
            { text: 'Ge bort alla pengarna till vänner och familj.', correct: false },
            { text: 'Spara en del, investera en del, och använd en del för att njuta av nuet.', correct: true }
        ],
        image: 'money.jpg'
    },
    {
        question: 'Vad är fördelen med att skapa och följa en budget?',
        options: [
            { text: 'Budgetar är onödiga och begränsande.', correct: false },
            { text: 'En budget hjälper dig att hålla koll på dina utgifter, spara pengar och nå ekonomiska mål.', correct: true },
            { text: 'Budgetar är bara bra för företag, inte för personligt bruk.', correct: false },
            { text: 'Att följa en budget gör det möjligt att undvika onödiga skulder.', correct: true },
            { text: 'En budget gör att jag kan spendera pengar utan att tänka.', correct: false }
        ],
        image: 'budget.jpg'
    },
    {
        question: 'Hur kan sparande och investeringar bidra till din framtida ekonomiska säkerhet?',
        options: [
            { text: 'Det är bättre att spendera alla pengar nu och njuta av livet.', correct: false },
            { text: 'Sparande och investeringar skapar en buffert för oväntade utgifter och hjälper till att bygga förmögenhet över tid.', correct: true },
            { text: 'Sparande är viktigt, men investeringar är för riskfyllt och onödigt.', correct: false },
            { text: 'Att spara pengar är slöseri med tid och resurser.', correct: false },
            { text: 'Investeringar hjälper till att öka mina tillgångar på lång sikt.', correct: true }
        ],
        image: 'invest.jpg'
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextStep() {
    const contentDiv = document.getElementById('content');
    const nextButton = document.getElementById('nextButton');

    if (currentStep < steps.length) {
        const step = steps[currentStep];
        contentDiv.innerHTML = `
            <img src="${step.image}" alt="Image" class="stepImage">
            <p>${step.question}</p>`;
        const shuffledOptions = shuffleArray(step.options);
        shuffledOptions.forEach((option) => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.onclick = () => checkAnswer(option.correct);
            contentDiv.appendChild(button);
        });
        nextButton.style.display = 'none';
    } else {
        contentDiv.innerHTML = '<p>Grattis! Du har slutfört alla uppdrag. Din belöning är på väg!</p>';
        nextButton.style.display = 'none';
    }
}

function checkAnswer(correct) {
    if (correct) {
        currentStep++;
        nextStep();
    } else {
        alert('Fel svar! Läs noggrant och försök igen.');
        currentStep = 0;
        nextStep();
    }
}

window.onload = nextStep;
