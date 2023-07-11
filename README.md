<!DOCTYPE html>
<html>
<head>
  <title>Admin Dashboard</title>
  <link rel="icon" type="image/x-icon" href="logo.png">
<style>
	.content {
		margin-top: 65px;
		margin-right: 10px;
		margin-left: 10px;
	}

	.style1 {
		background: #EB3349;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #h45C43, #EB3349);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #h45C43, #EB3349);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.style2 {
		background: #6441a5;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #6441a5, #2a0845);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #6441a5, #2a0845);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.style3 {
		background: #6a3093;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #a044ff, #6a3093);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #a044ff, #6a3093);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 20px;
	}

	.card h4 {
		font-size: 20px;
		margin-top: -3px;
		margin-bottom: 5px;
		color: #fff;
	}

	.card button {
		font-size: 14px;
		color: #fff;
		margin-bottom: 3px;
		padding: 10px 20px;
		background-color: #9d9d9d33;
		filter: drop-shadow(0px 9px 11px rgba(0, 0, 0, 0.72));
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 100%;
	}

	@media (max-width: 600px) {
		.content {
			margin-top: 65px;
			margin-right: 10px;
			margin-left: 10px;
		}
	}
.sidenav {
  width: 250px;
  position: fixed;
  /* background-color: #f1f1f1; 
  height: 100%;
  overflow: auto; */
}
/* Styling for the cards in the side navigation */
.card {
  padding: 16px;
  margin: 16px;
  border-radius: 10px;
  text-align: center;
  color: white;
  width: 100%;
}
.main {
  margin-left: 250px;
  padding: 16px;
}

.margin {
  margin-top: 100px;
}

.hi{
	margin-left: 25px;
	margin-top: 100px;
}
.ud{
	margin-left: 25px;
}

/* Media query for responsive layout */
@media screen and (max-width: 600px) {
  .sidenav {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidenav .card {
    margin: 16px 0;
  }
  .main {
    margin-left: 0;
  }
  .margin {
    margin-top: -50px;
  }
  .card h4{
	 margin-top: -5px;
	 font-size: 15px;
	 margin-bottom: 12px;
  }
  .card button{
     font-size: 13px;
	 margin-bottom: -5px;
  }
  .hi{
	margin-left: 0px;
	margin-top: 75px;
  }
  .ud{
	margin-left: 0px;
	margin-top: -13px;
  }
}

</style>
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="table.css">
</head>
<body>

<?php
  // Check if the user is logged in
	include "auth.php";
	$query = "SELECT members.Family_Id, family_data.Family_Id AS FID, family_data.Branch 
          FROM members 
          INNER JOIN family_data ON members.Family_Id = family_data.Family_Id 
          WHERE family_data.Branch = '$Branch' $searchQuery 
          ORDER BY members.Id DESC";
?>
<div class="sidenav">
  <h2 align='center' class="hi">Hi, <?php echo $Name; ?></h2>
  <h4 align='center' class="ud">User Dashboard</h4>
  <script>document.getElementById("main").style.display = "none";</script>
<div class="content">
	<?php
if ($status == 1) {
	
$searchBy = isset($_GET["search_by"]) ? $_GET["search_by"] : "name";
$search = isset($_GET["search"]) ? $_GET["search"] : "";
$searchQuery = "";


		echo '
  
  <div class="margin"></div>
    <div class="card style1">
      <h4>Total Members Added: ' . $total_rows . '</h4>
      <button onclick="window.location.href=\'members_list.php\';">View Details</button>
	  <script>document.getElementById("main").style.display = "block";</script>
    </div>
    <div class="card style2">
      <h4>Family</h4>
      <button onclick="window.location.href=\'add_family_id.php\';">Add Family</button>
	  <br><br>
	  <button onclick="popup();">Add Members to the Family</button>
    </div>
  </div>
	?>
	</div>
<div class="main">

  <form method="get" action=".' . $_SERVER["PHP_SELF"] . '">
    <label for="search">Search By:</label>
    <select name="search_by"class="input">
	  <option value="" hidden>Select</option>
      <option value="name"' . ($_GET["search_by"] ?? "") === "name" ? "selected" : "" . '>Name</option>
      <option value="family_head"' . ($_GET["search_by"] ?? "") === "family_head" ? "selected" : "" . '>Family Head</option>
      <option value="family_id"' . ($_GET["search_by"] ?? "") === "family_id" ? "selected" : "" . '>>Family ID</option>
    </select>
    <input type="text" class="input" id="search" name="search" value="' .  $_GET["search"] ?? "" . '" placeholder="Enter search term">
    <button class="button"><i class="fa fa-search" aria-hidden="true"></i></button>
  </form>

  <table>
    <caption>Members added by you</caption>
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Family Id</th>
      <th scope="col">Family Head</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>';
    
    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        echo '
        <tr>
          <td data-label="Name">" . $row["Name"] . "</td>
          <td data-label="Family Id">" . $row["Family_Id"] . "</td>
          <td data-label="Family Head">" . $row["Family_Head"] . "</td>
          <td data-label="">
          <button class= "s-button" onclick="window.location.href=\"edit_family_members.php?id=" . $row["Id"] ."\";">Edit Member</button>
          <button class= "s-button" onclick="window.location.href=\"edit_family.php?family_id=" . $row["Family_Id"] ."\";">Edit Family</button>
          </td>
        </tr>
        ';
      }
    } else {
      echo '<tr><td colspan="4">No data found</td></tr>';
    }
	
	echo '
    </tbody>
  </table>

  <div class="pagination" style="margin-bottom: 10px;">';
  
    for ($page = 1; $page <= $totalPages; $page++) {
      echo '<a href="?page=' . $page . '" ' . ($currentPage == $page ? 'class="active"' : '') . '>' . $page . '</a>';
    }
	
  echo'</div>
<div id="popup" class="popup">
    <div class="popup-content">
		<form id="family-form" method="get" action="add_more_family_members.php" autocomplete="off" role="form" enctype="multipart/form-data">
			<label for="Family_Id">Enter Family Id</label>
			<input type="text" id="family_id" name="family_id" required>
        <br>
        <button id="closeButton" class="l-button">Add Member</button>
    </div>
</div>
</div>

<script>
function popup() {
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("closeButton");

    // Display the popup immediately
    popup.style.display = "flex";

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
}
</script>

';

if (!empty($search)) {
  if ($searchBy === "name") {
    $searchQuery = "AND members.Name LIKE "%$search%"";
  } elseif ($searchBy === "family_head") {
    $searchQuery = "AND family_data.Family_Head LIKE "%$search%"";
  } elseif ($searchBy === "family_id") {
    $searchQuery = "AND members.Family_Id = "$search"";
  }
}

$Registered_By = $Name . " " . $Phone_Number;
	$query = "SELECT members.Family_Id, family_data.Family_Id AS FID, family_data.Branch 
          FROM members 
          INNER JOIN family_data ON members.Family_Id = family_data.Family_Id 
          WHERE family_data.Branch = '$Branch' $searchQuery 
          ORDER BY members.Id DESC";
$result = mysqli_query($conn, $query);
$totalRows = $result->num_rows;
$rowsPerPage = 9;
$totalPages = ceil($totalRows / $rowsPerPage);
$currentPage = isset($_GET["page"]) ? $_GET["page"] : 1;
$startRow = ($currentPage - 1) * $rowsPerPage;

$query .= " LIMIT $startRow, $rowsPerPage";
$result = mysqli_query($conn, $query);

	} else {
		echo "You are not approved by the admin.";
	}

  // Include the navigation bar
	include "nav.php";
?>

</body>
</html>
fix this code
