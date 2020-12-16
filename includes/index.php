<?php
    include("connect.php");
    include("functions.php");
    //GET superglobal 
    if(isset($_GET["id"])) {
        $targetID = $_GET["id"];
        $result = getSingle($pdo, $targetID);

        return $result;
    } else {
        $all = getAll($pdo);

        return $all;
    }