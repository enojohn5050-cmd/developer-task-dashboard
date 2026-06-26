
const checkboxes = document.querySelectorAll(".task-check");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const progressPercent = document.getElementById("progressPercent");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");

const totalTasks = checkboxes.length;

function updateDashboard() {

    const completed = [...checkboxes].filter(task => task.checked).length;

    const percentage = Math.round((completed / totalTasks) * 100);

    progressFill.style.width = `${percentage}%`;

    progressText.textContent = `${completed} of ${totalTasks} tasks completed`;

    progressPercent.textContent = `${percentage}%`;
    completedTasks.textContent = completed;
    remainingTasks.textContent = totalTasks - completed;

    checkboxes.forEach((checkbox) => {

        const card = checkbox.closest(".task-card");

        if (checkbox.checked) {
            card.classList.add("completed");
        } else {
            card.classList.remove("completed");
        }

    });

}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateDashboard);
});

updateDashboard();