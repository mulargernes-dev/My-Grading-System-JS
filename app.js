// 1. Target Element DOM References
const midtermInput = document.getElementById("midterm-input");
const finalInput = document.getElementById("final-input");
const extraCreditChk = document.getElementById("extra-credit-chk");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");


// 2. Core Operational Computation Function
function calculateGradePayload() {
    // Trim whitespace from the raw input string
    const trimmedInputMidterm = midtermInput.value.trim();
    const trimmedInputFinal = finalInput.value.trim();

    // Convert the trimmed input value into a number
    let midtermScore = Number(trimmedInputMidterm);
    let finalScore = Number(trimmedInputFinal);

    let computedScore = (midtermScore * 0.45) + (finalScore * 0.55)
    console.log(computedScore)

    if (trimmedInputMidterm === "" && trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'> Error: Please input/enter your 'Midterm' and 'Final' Grade</strong>";
        return;
    }

    else if (trimmedInputMidterm === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number of Input Midterm Grade</strong>";
        return;
    }

    else if (trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number of Input Final Grade</strong>";
        return;
    }

    else if (isNaN(trimmedInputMidterm) && isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number Input Grade"
        return;
    }

    else if (isNaN(trimmedInputMidterm)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please Input Midterm Grade"
        return;
    }

    else if (isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please Input Final Grade"
        return;
    }

    // 3. Validation Logic using standard if/else
    else if (computedScore === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number.</strong>";
        return;
    } else if (isNaN(computedScore)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid number.</strong>";
        return;
    } else if (computedScore < 0) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Range Violation: Score must be between 0 and 100.</strong>";
        return;
    } else if (computedScore > 100) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Range Violation: Score must be between 0 and 100.</strong>";
        return;
    }

    // 4. Extra Credit Logic using standard if/else



    // Cap the maximum score at 100


    // 5. Pass/Fail Decision Logic using standard if/else
    let statusText = "";
    let statusColorClass = "text-success"; // Default to success for passing grades

    if (computedScore >= 100) {
        statusText = "A+";
    } else if (computedScore >= 96) {
        statusText = "A";

    } else if (computedScore >= 91) {
        statusText = "B";

    } else if (computedScore >= 86) {
        statusText = "C";

    } else if (computedScore >= 81) {
        statusText = "D";

    } else if (computedScore >= 75) {
        statusText = "E";
        statusColorClass = "text-warning";

    } else {
        statusText = "Failed";
        statusColorClass = "text-danger";
    }

    // 6. Output the final HTML result

    outputMatrix.innerHTML =
        "<h4>Final Score: " + computedScore + "%" + "</h4>" +
        "<h1 class='display-4 " + statusColorClass + " fw-bold'>" + statusText + "</h1>";

}


// 7. Attaching the Listener Connection
computeBtn.addEventListener("click", calculateGradePayload);
