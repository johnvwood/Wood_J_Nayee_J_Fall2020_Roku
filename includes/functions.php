<?php
    // defines the functions used in the index.php file
    $result = [];

    function getAll($conn) {
        $query = "SELECT * FROM tbl_roku";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        //encoding echo into JSON for js (HAS TO BE DONE FOR JS)
        echo(json_encode($result));
    }

    function getSingle($conn, $id) {
        $query = "SELECT * FROM tbl_roku WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo(json_encode($result));
    }
    