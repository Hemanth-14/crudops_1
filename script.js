$(document).ready(() => {
	// Create
	$('#btnCreate').click(() => {
		const ID = $('#ID').val();
		const first_name = $('#first_name').val();
		const last_name = $('#last_name').val();
                const designation = $('#designation').val();
		const employee = { ID, first_name, last_name, designation };
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/employees',
			data: JSON.stringify(employee),
			contentType: 'application/json',
			success: () => {
				alert('employee created successfully');
				$('#ID').val('');
				$('#first_name').val('');
				$('#last_name').val('');
                                $('#designation').val('');
			},
			error: (xhr, status, error) => {
				alert(`Error: ${error}`);
			}
		});
	});

	// Read
	$('#btnRead').click(() => {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/employees',
			success: (employees) => {
				const tbody = $('#table tbody');
				tbody.empty();
				employees.forEach((employee) => {
					const tr = $('<tr>');
					tr.append($('<td>').text(employee.ID));
					tr.append($('<td>').text(employee.first_name));
					tr.append($('<td>').text(employee.last_name));
                                        tr.append($('<td>').text(employee.designation));
					tbody.append(tr);
				});
			},
			error: (xhr, status, error) => {
				alert(`Error: ${error}`);
			}
		});
	});

	// Update
	$('#btnUpdate').click(() => {
		const ID = $('#ID').val();
		const first_name = $('#first_name').val();
		const last_name = $('#last_name').val();
                const designation = $('#designation').val();
		const employee = { ID, first_name, last_name, designation };
		$.ajax({
			type: 'PUT',
			url: `http://localhost:3000/api/employees/${ID}`,
			data: JSON.stringify(employee),
			contentType: 'application/json',
			success: () => {
				alert('Todo updated successfully');
				$('#ID').val('');
				$('#first_name').val('');
				$('#last_name').val('');
                                $('#designation').val('');
                        },
                         error: (xhr, status, error) => {
                                 alert(`Error: ${error}`);
                        }
                });
       });
       // Delete
       $('#btnDelete').click(() => {
                const ID = $('#ID').val();
                $.ajax({
                        type: 'DELETE',
                        url:`http://localhost:3000/api/employees/${ID}`,
                        success:() => {
                                 alert('employee deleted successfully');
                                 $('#ID').val('');
                                 $('#first_name').val('');
                                 $('#last_name').val('');
                                 $('#designation').val('');
                       },
                        error: (xhr, status, error) => {
                                 alert(`Error: ${error}`);
                       }
              });
      });
});
