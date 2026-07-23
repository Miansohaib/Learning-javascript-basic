const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if  (isNaN(height) || height < 50 || height > 300) {
    result.innerHTML = "Please enter a valid height in centimeters (50–300).";
    return;
    }
   else if (isNaN(weight) || weight < 10 || weight > 500) {
    result.innerHTML = "Please enter a valid weight in kilograms.";
    return;
}

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

     console.log("Height:", height);
     console.log("Weight:", weight);
     console.log("BMI:", bmi);

    let status = "";

    if (bmi < 18.6) {
        status = "Underweight";
    } else if (bmi <= 24.9) {
        status = "Normal Weight";
    } else {
        status = "Overweight";
    }

    result.innerHTML = `
        <h2>Your BMI: ${bmi}</h2>
        <h3>${status}</h3>
    `;
});