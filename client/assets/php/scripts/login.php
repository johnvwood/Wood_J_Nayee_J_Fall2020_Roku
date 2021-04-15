<?php

date_default_timezone_set("America/New_York");

function login($username, $password, $ip)
{
    $pdo = Database::getInstance()->getConnection();
    ## TODO: Finish the following query to check if the username and password are matching in the DB
    $get_user_query = 'SELECT * FROM tbl_user WHERE user_name = :username AND user_pass=:password';
    $user_set       = $pdo->prepare($get_user_query);
    $user_set->execute(
        array(
            ':username' => $username,
            ':password' => $password,
        )
    );

    //   $user_start_time = $found_user ['user_date'];
    //   $time_end = strtotime($current_time) - strtotime($found_user);
    //   $time_count = 24000 - $time_end;



    if ($found_user = $user_set->fetch(PDO::FETCH_ASSOC)) {
        //We found user in the DB, get him in!
        $found_user_id = $found_user['user_id'];

        //Write thhe username and userid into session
        $_SESSION['user_id']    = $found_user_id;
        $_SESSION['user_name']  = $found_user['user_fname'];
        $_SESSION['user_level'] = $found_user['user_level'];

        // current date and time
        $current = date("Y-m-d")." ".date("h:i:sa");
        $_SESSION['current'] = $found_user['last_login'];

        $_SESSION['success'] = $found_user['success_login'] + 1;

        //Update the user IP by the current logged in one
        $update_user_query = 'UPDATE tbl_user SET user_ip= :user_ip, last_login= :login, success_login=:success WHERE user_id=:user_id';
        $update_user_set   = $pdo->prepare($update_user_query);
        $update_user_set->execute(
            array(
                ':user_ip' => $ip,
                ':user_id' => $found_user_id,
                ':login' => $current,
                ':success' => $_SESSION['success']
            )
        );

        //Redirect user back to index.php
        if($found_user['success_login'] == 1){
            redirect_to('admin_edituser.php');
        }
        else{
            redirect_to('index.php');
        }
        session_destroy();
    } else {
        //This is invalid attempt, reject it!
        return 'Learn how to type you dumba&*.';
    }
}

function confirm_logged_in($admin_above_only = false)
{
    if (!isset($_SESSION['user_id'])) {
        redirect_to("admin_login.php");
    }

    if (!empty($admin_above_only) && empty($_SESSION['user_level'])) {
        redirect_to('index.php');
    }
}


function logout()
{
    session_destroy();

    redirect_to('admin_login.php');
}
