// const rightClick = document.getElementById("right-click");
// const leftClick = document.getElementById("left-click");
// const question = document.querySelector(".question");
// const answers = document.querySelector(".answer-li");


// let questions = [
//   {
//     ques: "Who will be involved?",
//     ans: ["Student", "Schoolboy"]
//   },
//   {
//     ques: "What grade is the student in?",
//     ans: ["First class", "Student"]
//   },
//   {
//     ques: "What is the student's name?",
//     ans: "for example Michael"
//   },
// ];

// rightClick.addEventListener("click", (e) => {
//   e.preventDefault();

//   let random = Math.floor(Math.random() * questions.length);

//   question.innerText = questions[random].ques;
//   answers.textContent = questions[random].ans;
// });

// leftClick.addEventListener("click", (e) => {
//   e.preventDefault();

//   let random = Math.floor(Math.random() * questions.length);

//   question.innerText = questions[random].ques;
//   answers.textContent = questions[random].ans;
// });

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active");
    })
} if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}
