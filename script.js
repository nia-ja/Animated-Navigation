const navigation = document.getElementById("nav");
const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", () => {
    navigation.classList.toggle("active");
});