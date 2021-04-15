
<?php if($_SESSION['user_level'] == 1)
{
    $pdo = new mysqli("localhost", "root", "", "db_movies");

    if($pdo -> connect_errno){
        echo "Unable to connect with database". $pdo -> connect_error;
        exit();
    }

    $getUsers = 'SELECT * FROM tbl_user';
    $fire = mysqli_query($pdo, $getUsers);
    $users = mysqli_fetch_all($fire);

    echo "<br>List of users<br>";
    foreach($users as $user){
        if ($_SESSION['user_name'] != $user[1]) {
            echo "Name: ".$user[1]."<a href=admin_editAlluser.php?id=$user[0]>Edit User</a>". '<br>';
        }
    }
    
}