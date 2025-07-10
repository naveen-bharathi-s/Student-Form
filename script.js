// Get references to form elements
const nameInput = document.getElementById("Name");
const ageInput = document.getElementById("Age");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const courseSelect = document.getElementById("Course");
const emailInput = document.getElementById("Email");
const saveButton = document.getElementById("btn");

// Get reference to the table body where new rows will be added
const studentTableBody = document.getElementById("studentTableBody");
const tableContainer = document.getElementById("tableContainer"); // To potentially show/hide the table

// Add event listener to the Save button
saveButton.addEventListener("click", function(event) {
    // Prevent default form submission if the button type was "submit"
    // event.preventDefault(); // Not strictly needed since type="button"

    // Get values from form inputs
    const name = nameInput.value.trim(); // .trim() removes leading/trailing whitespace
    const age = ageInput.value.trim();
    let gender = "";
    if (maleRadio.checked) {
        gender = maleRadio.value;
    } else if (femaleRadio.checked) {
        gender = femaleRadio.value;
    }
    const course = courseSelect.value;
    const email = emailInput.value.trim();

    // Basic validation
    if (!name || !age || !gender || !course || !email) {
        alert("Please fill in all fields (Name, Age, Gender, Course, Email).");
        return; // Stop the function if validation fails
    }

    // Create a new table row element
    const newRow = document.createElement("tr");

    // Create and append table data cells for each piece of information
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = age;
    newRow.appendChild(ageCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = gender;
    newRow.appendChild(genderCell);

    const courseCell = document.createElement("td");
    courseCell.textContent = course;
    newRow.appendChild(courseCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    // Create the Action cell with a delete button
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn"); // Add a class for CSS styling
    deleteButton.addEventListener("click", deleteItem); // Attach the delete function to the button
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    studentTableBody.appendChild(newRow);

    // Optional: If the table was hidden initially, make it visible
    // if (tableContainer.style.display === "none" || tableContainer.classList.contains("head1")) {
    // tableContainer.style.display = "block"; // Or remove 'head1' class and add 'head2' if that's your CSS strategy
    // tableContainer.classList.remove("head1"); // Assuming head1 hides it
    // tableContainer.classList.add("head2"); // Assuming head2 shows it
    // }


    // Clear the form fields after successful submission
    nameInput.value = "";
    ageInput.value = "";
    maleRadio.checked = false; // Uncheck male radio
    femaleRadio.checked = false; // Uncheck female radio
    courseSelect.value = ""; // Reset dropdown to default "--None--" or empty string
    emailInput.value = "";
});

/**
 * Deletes the table row containing the clicked button.
 * @param {Event} event - The click event object.
 */
function deleteItem(event) {
    // event.target is the element that triggered the event (the delete button).
    // event.target.parentElement is the <td> element that contains the delete button.
    // event.target.parentElement.parentElement is the <tr> element (the row) that contains that <td>.
    // .remove() is a method that removes the element from the DOM.
    event.target.parentElement.parentElement.remove();
}








