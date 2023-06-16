class Person {
  constructor(name, gender, weight, occupation, age, hobby) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.occupation = occupation;
    this.age = age;
    this.hobby = hobby;
  }
}

let people = [
  new Person("Ronaldo", "Nam", 70, "Cầu thủ", 38, "Siuuuuu"),
  new Person("Angelina", "Nữ", 45, "Diễn viên", 50, "Make up"),
  new Person("G-Dragon", "Nam", 50, "Nghệ sĩ", 35, "Sống ảo"),
  new Person("Công chúa thủy tề", "Nữ", 50, "Idol", 28, "Tra tấn lỗ tai"),
  new Person("Hiếu", "Nam", 55, "Kỹ sư", 24, "Hihi"),
];

function displayPeopleList(peopleList) {
  let listElement = document.getElementById("results");
  listElement.innerHTML = "";

  peopleList.forEach(function (person, index) {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.gender}</td>
    <td>${person.weight}</td>
    <td>${person.occupation}</td>
    <td>${person.age}</td>
    <td>${person.hobby}</td>
    <button class="delete-button" data-index="${index}">Xóa</button>
  `;
    listElement.appendChild(row);
  });

  // Gán sự kiện cho nút Xóa
  let deleteButtons = document.getElementsByClassName("delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deletePerson);
  }
}

// Lọc danh sách người yêu theo giới tính
function filterPeople(event) {
  event.preventDefault();

  let genderFilter = document.getElementById("gender-select").value;

  let filteredPeople = people.filter((person) => {
    if (genderFilter && person.gender !== genderFilter) {
      return false;
    }
    return true;
  });

  displayPeopleList(filteredPeople);
}

// Thêm người yêu mới
function addPerson(event) {
  event.preventDefault();

  let nameInput = document.getElementById("add-name-input");
  let genderInput = document.getElementById("add-gender-input");
  let weightInput = document.getElementById("add-weight-input");
  let occupationInput = document.getElementById("add-occupation-input");
  let ageInput = document.getElementById("add-age-input");
  let hobbyInput = document.getElementById("add-hobby-input");

  let newPerson = new Person(
    nameInput.value,
    genderInput.value,
    parseInt(weightInput.value),
    occupationInput.value,
    parseInt(ageInput.value),
    hobbyInput.value
  );

  people.push(newPerson);
  displayPeopleList(people);
  nameInput.value = "";
  genderInput.value = "";
  weightInput.value = "";
  occupationInput.value = "";
  ageInput.value = "";
  hobbyInput.value = "";
}

// Xóa người yêu
function deletePerson(event) {
  let index = event.target.getAttribute("data-index");
  people.splice(index, 1);
  displayPeopleList(people);
}

// Xóa danh sách người yêu
function clearPeopleList() {
  people = [];
  displayPeopleList(people);
}

// Gán sự kiện cho nút Lọc, nút Thêm và nút Xóa danh sách
document.getElementById("filter-form").addEventListener("submit", filterPeople);
document.getElementById("add-form").addEventListener("submit", addPerson);
document
  .getElementById("clear-button")
  .addEventListener("click", clearPeopleList);

// Hiển thị danh sách người yêu ban đầu
displayPeopleList(people);
