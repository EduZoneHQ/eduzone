const lessons = {

    algebra: {
        title: "Algebra 🔢",
        description: "Learn equations, expressions and algebraic manipulation.",
        content: `
            <h2>What is Algebra?</h2>

            <p>
                Algebra is a branch of mathematics that uses letters
                and symbols to represent unknown values.
            </p>

            <h2>Solving Equations</h2>

            <p>
                To solve an equation, perform the same operation
                on both sides.
            </p>

            <div class="example">
                x + 5 = 12<br><br>
                x = 12 - 5<br><br>
                x = 7
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What is x if x + 8 = 15?
            </p>

            <button onclick="checkAnswer('7', this)">
                7
            </button>

            <button onclick="checkAnswer('10', this)">
                10
            </button>

            <button onclick="checkAnswer('5', this)">
                5
            </button>

            <p id="lessonResult"></p>
        `
    },


    geometry: {
        title: "Geometry 📐",
        description: "Learn shapes, angles, areas and volumes.",
        content: `
            <h2>What is Geometry?</h2>

            <p>
                Geometry is the study of shapes, sizes,
                angles and spatial relationships.
            </p>

            <h2>Area of a Rectangle</h2>

            <div class="example">
                Area = Length × Width
            </div>

            <p>
                Example: A rectangle has a length of 6 cm
                and a width of 5 cm.
            </p>

            <div class="example">
                Area = 6 × 5<br>
                Area = 30 cm²
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What is the area of a rectangle
                measuring 6 cm × 5 cm?
            </p>

            <button onclick="checkAnswer('30', this)">
                30 cm²
            </button>

            <button onclick="checkAnswer('25', this)">
                25 cm²
            </button>

            <button onclick="checkAnswer('35', this)">
                35 cm²
            </button>

            <p id="lessonResult"></p>
        `
    },


    statistics: {
        title: "Statistics 📊",
        description: "Learn averages, data and statistical analysis.",
        content: `
            <h2>What is Statistics?</h2>

            <p>
                Statistics involves collecting, organizing,
                analyzing and interpreting data.
            </p>

            <h2>Mean</h2>

            <div class="example">
                Mean = Sum of values ÷ Number of values
            </div>

            <p>
                Example: Find the mean of 5, 10 and 15.
            </p>

            <div class="example">
                (5 + 10 + 15) ÷ 3 = 10
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What is the mean of 5, 10 and 15?
            </p>

            <button onclick="checkAnswer('10', this)">
                10
            </button>

            <button onclick="checkAnswer('15', this)">
                15
            </button>

            <button onclick="checkAnswer('5', this)">
                5
            </button>

            <p id="lessonResult"></p>
        `
    },


    trigonometry: {
        title: "Trigonometry 📏",
        description: "Learn triangle relationships and trigonometric ratios.",
        content: `
            <h2>What is Trigonometry?</h2>

            <p>
                Trigonometry studies relationships between
                angles and sides of triangles.
            </p>

            <h2>SOH-CAH-TOA</h2>

            <div class="example">
                sin θ = Opposite ÷ Hypotenuse<br><br>
                cos θ = Adjacent ÷ Hypotenuse<br><br>
                tan θ = Opposite ÷ Adjacent
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which ratio is Opposite ÷ Hypotenuse?
            </p>

            <button onclick="checkAnswer('sin', this)">
                sin θ
            </button>

            <button onclick="checkAnswer('cos', this)">
                cos θ
            </button>

            <button onclick="checkAnswer('tan', this)">
                tan θ
            </button>

            <p id="lessonResult"></p>
        `
    },


    mechanics: {
        title: "Mechanics 🏃",
        description: "Learn motion, forces, speed and energy.",
        content: `
            <h2>What is Mechanics?</h2>

            <p>
                Mechanics is the branch of physics concerned
                with motion and forces.
            </p>

            <h2>Speed</h2>

            <div class="example">
                Speed = Distance ÷ Time
            </div>

            <p>
                If an object travels 60 metres in 10 seconds:
            </p>

            <div class="example">
                Speed = 60 ÷ 10<br>
                Speed = 6 m/s
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What is the speed of an object that travels
                60 m in 10 seconds?
            </p>

            <button onclick="checkAnswer('6', this)">
                6 m/s
            </button>

            <button onclick="checkAnswer('10', this)">
                10 m/s
            </button>

            <button onclick="checkAnswer('20', this)">
                20 m/s
            </button>

            <p id="lessonResult"></p>
        `
    },


    waves: {
        title: "Waves 🌊",
        description: "Learn frequency, wavelength and wave motion.",
        content: `
            <h2>What is a Wave?</h2>

            <p>
                A wave is a disturbance that transfers energy
                from one place to another.
            </p>

            <h2>Frequency</h2>

            <p>
                Frequency is the number of complete waves
                passing a point per second.
            </p>

            <div class="example">
                Frequency = Number of waves ÷ Time
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What is the SI unit of frequency?
            </p>

            <button onclick="checkAnswer('Hz', this)">
                Hertz (Hz)
            </button>

            <button onclick="checkAnswer('m', this)">
                Metre (m)
            </button>

            <button onclick="checkAnswer('N', this)">
                Newton (N)
            </button>

            <p id="lessonResult"></p>
        `
    },


    electricity: {
        title: "Electricity ⚡",
        description: "Learn current, voltage and resistance.",
        content: `
            <h2>Electric Current</h2>

            <p>
                Electric current is the rate at which
                electric charge flows through a circuit.
            </p>

            <h2>Ohm's Law</h2>

            <div class="example">
                V = I × R
            </div>

            <p>
                V represents voltage, I represents current
                and R represents resistance.
            </p>

            <h2>Example</h2>

            <div class="example">
                V = 3 × 4<br>
                V = 12 V
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                If I = 3 A and R = 4 Ω,
                what is V?
            </p>

            <button onclick="checkAnswer('12', this)">
                12 V
            </button>

            <button onclick="checkAnswer('7', this)">
                7 V
            </button>

            <button onclick="checkAnswer('1', this)">
                1 V
            </button>

            <p id="lessonResult"></p>
        `
    },


    "atomic-structure": {
        title: "Atomic Structure ⚛️",
        description: "Learn about atoms and subatomic particles.",
        content: `
            <h2>What is an Atom?</h2>

            <p>
                An atom is the smallest unit of an element
                that retains the chemical properties of that element.
            </p>

            <h2>Subatomic Particles</h2>

            <div class="example">
                Proton → Positive charge<br><br>
                Neutron → No charge<br><br>
                Electron → Negative charge
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which particle has a negative charge?
            </p>

            <button onclick="checkAnswer('electron', this)">
                Electron
            </button>

            <button onclick="checkAnswer('proton', this)">
                Proton
            </button>

            <button onclick="checkAnswer('neutron', this)">
                Neutron
            </button>

            <p id="lessonResult"></p>
        `
    },


    "organic-chemistry": {
        title: "Organic Chemistry 🧪",
        description: "Learn about carbon compounds and hydrocarbons.",
        content: `
            <h2>What is Organic Chemistry?</h2>

            <p>
                Organic chemistry is the study of
                carbon-containing compounds.
            </p>

            <h2>Hydrocarbons</h2>

            <p>
                Hydrocarbons are compounds containing
                only carbon and hydrogen.
            </p>

            <div class="example">
                Methane → CH₄<br><br>
                Ethane → C₂H₆<br><br>
                Propane → C₃H₈
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which element is central to organic chemistry?
            </p>

            <button onclick="checkAnswer('carbon', this)">
                Carbon
            </button>

            <button onclick="checkAnswer('oxygen', this)">
                Oxygen
            </button>

            <button onclick="checkAnswer('sodium', this)">
                Sodium
            </button>

            <p id="lessonResult"></p>
        `
    },


    electrochemistry: {
        title: "Electrochemistry 🔋",
        description: "Learn electrolysis and electrochemical cells.",
        content: `
            <h2>What is Electrochemistry?</h2>

            <p>
                Electrochemistry deals with the relationship
                between chemical reactions and electrical energy.
            </p>

            <h2>Electrolysis</h2>

            <p>
                Electrolysis uses electrical energy to drive
                a chemical reaction.
            </p>

            <div class="example">
                Electrical energy → Chemical change
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                What type of energy is supplied during electrolysis?
            </p>

            <button onclick="checkAnswer('electrical', this)">
                Electrical energy
            </button>

            <button onclick="checkAnswer('sound', this)">
                Sound energy
            </button>

            <button onclick="checkAnswer('light', this)">
                Light energy
            </button>

            <p id="lessonResult"></p>
        `
    },


    "cell-biology": {
        title: "Cell Biology 🔬",
        description: "Learn about cells and their structures.",
        content: `
            <h2>What is a Cell?</h2>

            <p>
                A cell is the basic structural and functional
                unit of living organisms.
            </p>

            <h2>The Nucleus</h2>

            <p>
                The nucleus contains most of the cell's genetic
                material and helps control cell activities.
            </p>

            <div class="example">
                Cell → Basic unit of life
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which structure contains most of a cell's
                genetic material?
            </p>

            <button onclick="checkAnswer('nucleus', this)">
                Nucleus
            </button>

            <button onclick="checkAnswer('ribosome', this)">
                Ribosome
            </button>

            <button onclick="checkAnswer('vacuole', this)">
                Vacuole
            </button>

            <p id="lessonResult"></p>
        `
    },


    genetics: {
        title: "Genetics 🧬",
        description: "Learn about DNA, genes and inheritance.",
        content: `
            <h2>What is Genetics?</h2>

            <p>
                Genetics is the study of heredity and
                variation in organisms.
            </p>

            <h2>DNA</h2>

            <p>
                DNA stores genetic information used by
                living organisms.
            </p>

            <div class="example">
                DNA → Genetic information
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which molecule carries genetic information?
            </p>

            <button onclick="checkAnswer('DNA', this)">
                DNA
            </button>

            <button onclick="checkAnswer('water', this)">
                Water
            </button>

            <button onclick="checkAnswer('glucose', this)">
                Glucose
            </button>

            <p id="lessonResult"></p>
        `
    },


    ecology: {
        title: "Ecology 🌱",
        description: "Learn ecosystems, organisms and food chains.",
        content: `
            <h2>What is Ecology?</h2>

            <p>
                Ecology is the study of interactions between
                organisms and their environment.
            </p>

            <h2>Food Chains</h2>

            <div class="example">
                Grass → Grasshopper → Frog → Snake
            </div>

            <p>
                Plants are commonly producers because
                they can make their own food through
                photosynthesis.
            </p>

            <h2>🎯 Quick Check</h2>

            <p>
                Which organism is usually a producer?
            </p>

            <button onclick="checkAnswer('plant', this)">
                Plant
            </button>

            <button onclick="checkAnswer('lion', this)">
                Lion
            </button>

            <button onclick="checkAnswer('frog', this)">
                Frog
            </button>

            <p id="lessonResult"></p>
        `
    },


    "human-biology": {
        title: "Human Biology 🫀",
        description: "Learn about major systems and organs of the human body.",
        content: `
            <h2>The Human Body</h2>

            <p>
                The human body contains many organs and
                systems that work together to keep the body alive.
            </p>

            <h2>The Heart</h2>

            <p>
                The heart is a muscular organ that pumps
                blood around the body.
            </p>

            <div class="example">
                Heart → Pumps blood
            </div>

            <h2>🎯 Quick Check</h2>

            <p>
                Which organ pumps blood around the body?
            </p>

            <button onclick="checkAnswer('heart', this)">
                Heart
            </button>

            <button onclick="checkAnswer('lung', this)">
                Lung
            </button>

            <button onclick="checkAnswer('kidney', this)">
                Kidney
            </button>

            <p id="lessonResult"></p>
        `
    }

};



/* =========================
   LOAD LESSON
========================= */

function loadLesson() {

    const params =
        new URLSearchParams(window.location.search);

    const topic =
        params.get("topic");


    const lesson =
        lessons[topic];


    if (!lesson) {

        document.getElementById("lessonTitle").textContent =
            "Lesson Not Found 😕";

        document.getElementById("lessonDescription").textContent =
            "Please choose a lesson from one of our subjects.";

        document.getElementById("lessonContent").innerHTML = `

            <div class="example">

                We couldn't find that lesson.

            </div>

            <a href="index.html">

                <button>
                    ← Back Home
                </button>

            </a>

        `;

        return;
    }


    document.title =
        `${lesson.title} | EduZone`;


    document.getElementById("lessonTitle").textContent =
        lesson.title;


    document.getElementById("lessonDescription").textContent =
        lesson.description;


    document.getElementById("lessonContent").innerHTML =
        lesson.content;

}



/* =========================
   CHECK LESSON ANSWER
========================= */

function checkAnswer(answer, button) {

    const params =
        new URLSearchParams(window.location.search);

    const topic =
        params.get("topic");


    const correctAnswers = {

        algebra: "7",

        geometry: "30",

        statistics: "10",

        trigonometry: "sin",

        mechanics: "6",

        waves: "Hz",

        electricity: "12",

        "atomic-structure": "electron",

        "organic-chemistry": "carbon",

        electrochemistry: "electrical",

        "cell-biology": "nucleus",

        genetics: "DNA",

        ecology: "plant",

        "human-biology": "heart"

    };


    const result =
        document.getElementById("lessonResult");


    if (!result) {
        return;
    }


    if (answer === correctAnswers[topic]) {

        result.textContent =
            "✅ Correct! Great work.";

        button.classList.add("correct");


        /*
            Save lesson completion.
        */

        let completed =
            Number(
                localStorage.getItem("lessonsCompleted") || 0
            );


        const lessonKey =
            "lessonCompleted_" + topic;


        if (!localStorage.getItem(lessonKey)) {

            completed++;

            localStorage.setItem(
                "lessonsCompleted",
                completed
            );

            localStorage.setItem(
                lessonKey,
                "true"
            );

        }


    } else {

        result.textContent =
            "❌ Not quite. Try again.";

        button.classList.add("wrong");

    }

}



/* =========================
   START
========================= */

loadLesson();