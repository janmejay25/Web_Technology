<?php
// Database connection
$conn = new mysqli("localhost", "root", "Janmejay@2005", "ai_nutrition_planner");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

// Create & Update Employee
if (isset($_POST['save'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $position = $_POST['position'];
    $salary = $_POST['salary'];
    
    if ($id) $conn->query("UPDATE employees SET name='$name', email='$email', position='$position', salary='$salary' WHERE id=$id");
    else $conn->query("INSERT INTO employees (name, email, position, salary) VALUES ('$name', '$email', '$position', '$salary')");
    
    header("Location: {$_SERVER['PHP_SELF']}");
}

// Delete Employee
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $conn->query("DELETE FROM employees WHERE id=$id");
    header("Location: {$_SERVER['PHP_SELF']}");
}

// Fetch employee records for displaying in the table
$employees = $conn->query("SELECT * FROM employees");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Registration - AI Nutrition Planner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h2>Employee Registration</h2>
    <form id="employeeForm" method="POST" class="row g-3">
        <input type="hidden" name="id" id="id">
        <div class="col-md-3"><input type="text" name="name" id="name" class="form-control" placeholder="Name" required></div>
        <div class="col-md-3"><input type="email" name="email" id="email" class="form-control" placeholder="Email" required></div>
        <div class="col-md-3"><input type="text" name="position" id="position" class="form-control" placeholder="Position" required></div>
        <div class="col-md-2"><input type="number" name="salary" id="salary" class="form-control" placeholder="Salary" required></div>
        <div class="col-md-1"><button type="submit" name="save" class="btn btn-success">Save</button></div>
    </form>

    <h3 class="mt-4">Employee Records</h3>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Position</th><th>Salary</th><th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <?php while ($row = $employees->fetch_assoc()) { ?>
            <tr>
                <td><?= $row['id'] ?></td><td><?= $row['name'] ?></td><td><?= $row['email'] ?></td>
                <td><?= $row['position'] ?></td><td><?= $row['salary'] ?></td>
                <td>
                    <button class="btn btn-primary btn-sm edit-btn" 
                            data-id="<?= $row['id'] ?>" 
                            data-name="<?= $row['name'] ?>" 
                            data-email="<?= $row['email'] ?>" 
                            data-position="<?= $row['position'] ?>" 
                            data-salary="<?= $row['salary'] ?>">Edit</button>
                    <a href="?delete=<?= $row['id'] ?>" class="btn btn-danger btn-sm" onclick="return confirm('Delete this employee?');">Delete</a>
                </td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    // Populate form fields for editing
    $(".edit-btn").click(function () {
        $("#id").val($(this).data("id"));
        $("#name").val($(this).data("name"));
        $("#email").val($(this).data("email"));
        $("#position").val($(this).data("position"));
        $("#salary").val($(this).data("salary"));
    });

    // JavaScript validation (Basic)
    document.getElementById("employeeForm").addEventListener("submit", function (e) {
        if ($("#salary").val() <= 0) {
            alert("Salary must be greater than 0.");
            e.preventDefault();
        }
    });
</script>
</body>
</html>
 