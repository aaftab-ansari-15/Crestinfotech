var counter = 0;
var employeeData = [{
    id: ++counter,
    isAvailable: true,
    empName: 'Thomas Hardy',
    empEmail: 'thomashardy@mail.com',
    empGender: 'Male',
    empSalary: '$2000',
    empPhone: '+171 555-2222-21'
}, {
    id: ++counter,
    isAvailable: false,
    empName: 'aaftab Ansari',
    empEmail: 'aaftab@gmail.com',
    empGender: 'Male',
    empSalary: '$3500',
    empPhone: '+91 55555-22222'
}];
ShowData();

// Show Employee
function ShowData() {
    var innerHtml = '';
    for (x of employeeData) {
        innerHtml += `<tr id="data${x.id}">
						<td id="isAvailable${x.id}">
    						<input type="checkbox" id="checkbox${x.id}" name="checkbox${x.id}" ${x.isAvailable ? 'checked' : ''} disabled>	
						</td>
						<td id="name${x.id}">${x.empName}</td>
						<td id="emailShow${x.id}">${x.empEmail}</td>
						<td id="genderShow${x.id}">${x.empGender}</td>
						<td id="salaryShow${x.id}">${x.empSalary}</td>
						<td id="phoneShow${x.id}">${x.empPhone}</td>
						<td>
							<a href="#editEmployeeModal" onclick="editEmployeeForm(${x.id})" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" onclick="deleteEmployeeForm(${x.id})" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
		</tr>`;
    }
    document.getElementById('showData').innerHTML = innerHtml;
}

///add Employee
function addToEmployeeData(data) {
    const newData = {
        id: ++counter,
        isAvailable: data.checkbox,
        empName: data.name,
        empEmail: data.email,
        empGender: data.gender,
        empSalary: '$' + data.salary,
        empPhone: '+' + data.phone
    };
    employeeData.push(newData);
    ShowData();
}

function addEmployee() {
    const data = getFormValues('addEmployeeModalForm');
    if (data.name && data.email && data.gender && data.phone && data.salary) {
        const emailError = document.getElementById('emailError');
        const emailValue = data.email.trim();
        if (validateEmail(emailValue)) {
            emailError.textContent = '';
            addToEmployeeData(data);
            var dismissButton = document.getElementById('dismissButton');
            dismissButton.setAttribute('data-dismiss', 'modal');
            const form = document.getElementById('addEmployeeModalForm');
            form.reset();
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }


    }
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function getFormValues(id) {
    console.log(id);
    const form = document.getElementById(id);
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            values[checkbox.name] = checkbox.value === 'true'; // Convert to boolean
        } else {
            values[checkbox.name] = false; // Explicitly set unchecked to false
        }
    });
    return values;
}

///edit Employee
function editEmployeeForm(id) {
    const d = employeeData.find(x => (x.id == id));
    const innerHTMLDataEdit = `<div class="modal-dialog">
    <div class="modal-content">
        <form id="editEmployeeModalForm">
            <div class="modal-header">						
                <h4 class="modal-title">Edit Employee</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">					
                <div class="form-group">	
                    <label>Is Availabel</label>					
                    <input type="checkbox" id="editCheckbox" name="checkbox" ${d.isAvailable ? 'checked' : ''} value="1">
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="editName" name="name" class="form-control" value="${d.empName}" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="editEmail" name="email" class="form-control" value="${d.empEmail}" required>
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <label>Gender</label>
                    <div class="gender d-flex">
                        <label for="genderMale">Male</label>
                        <input type="radio" id="editMale" class="form-control" ${(d.empGender)=='Male' ? 'checked' : ''} name="gender" value="Male">
                        <label for="genderFemale">Female</label>
                        <input type="radio" id="editFemale" class="form-control" ${(d.empGender)=='Female' ? 'checked' : ''} name="gender" value="Female">
                    </div>
                </div>
                <div class="form-group">
                    <label for="salary">Salary</label>
                    <input type="text" name="salary" id="editSalary" class="form-control" value="${d.empSalary}" required>
                </div>					
                <div class="form-group">
                    <label name="phone">Phone</label>
                    <input type="text" name="phone" id="editPhone" class="form-control" value="${d.empPhone}" required>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" onClick="editEmployee(${id})" class="btn btn-info" data-dismiss="modal">Save</button>
            </div>
        </form>
    </div>
    </div>`
    document.getElementById('editEmployeeModal').innerHTML = innerHTMLDataEdit;
}

function editEmployee(id) {
    const data = getFormValues(`editEmployeeModalForm`);
    employeeData.forEach(x => {
        if (x.id == id) {
            x.isAvailable = data.checkbox;
            x.id = id;
            x.empName = data.name;
            x.empEmail = data.email;
            x.empGender = data.gender;
            x.empSalary = '$' + data.salary;
            x.empPhone = '+' + data.phone;
        }
    });
    ShowData();
}
///delete Employee
function deleteEmployeeForm(id) {
    const innerHTMLDelete = `<div class="modal-dialog">
		<div class="modal-content">
			<form id="deleteEmployeeModalForm"> 
				<div class="modal-header">						
					<h4 class="modal-title">Delete Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Record?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
					<button type="button" onclick="deleteEmployee(${id})" class="btn btn-danger" data-dismiss="modal">Delete</button>
				</div>
			</form>
		</div>
	</div>`;
    document.getElementById('deleteEmployeeModal').innerHTML = innerHTMLDelete;
}

function deleteEmployee(id) {
    console.log(id);
    employeeData = employeeData.filter(x => (x.id != id));
    console.log(employeeData);
    ShowData();
}

// Delete All

function deleteAllEmployeeData() {
    employeeData = [];
    ShowData();
}