const lessons = [

    {
        title: "Algebra",
        subject: "Mathematics",
        description: "Learn equations and algebraic expressions.",
        link: "lesson.html?topic=algebra"
    },

    {
        title: "Geometry",
        subject: "Mathematics",
        description: "Learn shapes, angles, areas and volumes.",
        link: "lesson.html?topic=geometry"
    },

    {
        title: "Statistics",
        subject: "Mathematics",
        description: "Learn averages, data and probability.",
        link: "lesson.html?topic=statistics"
    },

    {
        title: "Trigonometry",
        subject: "Mathematics",
        description: "Learn triangles and trigonometric ratios.",
        link: "lesson.html?topic=trigonometry"
    },

    {
        title: "Mechanics",
        subject: "Physics",
        description: "Learn motion, forces, speed and energy.",
        link: "lesson.html?topic=mechanics"
    },

    {
        title: "Waves",
        subject: "Physics",
        description: "Learn frequency, wavelength and wave motion.",
        link: "lesson.html?topic=waves"
    },

    {
        title: "Electricity",
        subject: "Physics",
        description: "Learn current, voltage and resistance.",
        link: "lesson.html?topic=electricity"
    },

    {
        title: "Atomic Structure",
        subject: "Chemistry",
        description: "Learn about atoms, protons, neutrons and electrons.",
        link: "lesson.html?topic=atomic-structure"
    },

    {
        title: "Organic Chemistry",
        subject: "Chemistry",
        description: "Learn carbon compounds and hydrocarbons.",
        link: "lesson.html?topic=organic-chemistry"
    },

    {
        title: "Electrochemistry",
        subject: "Chemistry",
        description: "Learn electrolysis and electrochemical cells.",
        link: "lesson.html?topic=electrochemistry"
    },

    {
        title: "Cell Biology",
        subject: "Biology",
        description: "Learn about cells and their organelles.",
        link: "lesson.html?topic=cell-biology"
    },

    {
        title: "Genetics",
        subject: "Biology",
        description: "Learn DNA, genes and inheritance.",
        link: "lesson.html?topic=genetics"
    },

    {
        title: "Ecology",
        subject: "Biology",
        description: "Learn ecosystems, food chains and environments.",
        link: "lesson.html?topic=ecology"
    },

    {
        title: "Human Biology",
        subject: "Biology",
        description: "Learn about organs and body systems.",
        link: "lesson.html?topic=human-biology"
    }

];


function searchLessons() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    const query =
        input.value
            .trim()
            .toLowerCase();


    results.innerHTML = "";


    if (query === "") {

        results.innerHTML = `
            <p>
                Type something to search 🔎
            </p>
        `;

        return;
    }


    const matches =
        lessons.filter(lesson =>

            lesson.title
                .toLowerCase()
                .includes(query)

            ||

            lesson.subject
                .toLowerCase()
                .includes(query)

            ||

            lesson.description
                .toLowerCase()
                .includes(query)

        );


    if (matches.length === 0) {

        results.innerHTML = `
            <div class="search-result">

                <h3>
                    No lessons found 😕
                </h3>

                <p>
                    Try searching for another topic.
                </p>

            </div>
        `;

        return;
    }


    matches.forEach(lesson => {

        const result =
            document.createElement("div");


        result.className =
            "search-result";


        result.innerHTML = `

            <h3>
                ${lesson.title}
            </h3>

            <p>
                ${lesson.description}
            </p>

            <small>
                ${lesson.subject}
            </small>

            <br><br>

            <a href="${lesson.link}">

                <button>
                    Start Lesson →
                </button>

            </a>

        `;


        results.appendChild(result);

    });

}



/* Search when pressing Enter */

document
    .getElementById("searchInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchLessons();

            }

        }
    );