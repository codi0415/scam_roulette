let roulette = document.getElementById("roulette");
let spinButton = document.getElementById("spin-button");
let developer = document.getElementById("developer");
let developer_2 = document.getElementById("developer-2");
let developer_3 = document.getElementById("developer-3");
let resetButton = document.getElementById("reset-button");
let spinangle = 0;
let rotate_number = 0;
let specific_rotate = 0;
let target_number = 0;
let target_number_rand = 0;
let rotate_count = 0;
let is_spinning = false;
const min_rotate = 15;
const max_rotate = 30;
const rotate_to_ten = 10;
const modal = document.getElementById("result-modal");
const resultNumber = document.getElementById("result-number");
const closeModal = document.getElementById("close-modal");

function showResult(result) {
    rotate_count += 1;
    resultNumber.innerText = result+"회 당첨!"; 
    modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
    roulette.style.transform = `rotate(0deg)`;
    resultNumber.innerText = "돌림판 리셋중...";
    setTimeout(() => {
        closeModal.display = "none";
        spinButton.innerText = "돌리기";
        spinButton.disabled = false;
        modal.classList.add("hidden");
    }, 5000);
});

function spin_11() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*30 + 150;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(1), 5500);
    is_spinning = false;
}
function spin_12() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*90 + 270;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(1), 5500);
    is_spinning = false;
}
function spin_21() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*44 + 31;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(2), 5500);
    is_spinning = false;
}
function spin_22() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*90 + 180;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(2), 5500);
    is_spinning = false;
}
function spin_31() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*44 + 75;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(3), 5500);
    is_spinning = false;
}
function spin_32() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*14 + 1;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(3), 5500);
    is_spinning = false;
}
function spin_real_10() {
    rotate_number = Math.floor(Math.random() * max_rotate) + min_rotate;
    specific_rotate = Math.random()*14 + 135;
    spinangle = rotate_number * 360 + specific_rotate;
    roulette.style.transform = `rotate(-${spinangle}deg)`;
    setTimeout(() => showResult(10), 5500);
    is_spinning = false;
}
function choose_target_spin() {
    target_number_rand = Math.random();
    if (target_number_rand <= 0.325) {
        target_number = 11;
        spin_11();
    }
    else if (target_number_rand > 0.325 && target_number_rand <= 0.75) {
        target_number = 12;
        spin_12();
    }
    else if (target_number_rand > 0.75 && target_number_rand <= 0.83) {
        target_number = 21;
        spin_21();
    }
    else if (target_number_rand > 0.83 && target_number_rand <= 0.93) {
        target_number = 22;
        spin_22();
    }
    else if (target_number_rand > 0.93 && target_number_rand <= 0.965) {
        target_number = 31;
        spin_31();
    }
    else if (target_number_rand > 0.965) {
        target_number = 32;
        spin_32();
    }
    else {
        target_number = 10;
        spin_real_10();
    }
}

spinButton.addEventListener("click", function () {
    if (rotate_count + 1 === rotate_to_ten) {
        spin_real_10();
    } else {
        choose_target_spin();
    }
    is_spinning = true;
    spinButton.innerText = "회전중";
    spinButton.disabled = true;
});
