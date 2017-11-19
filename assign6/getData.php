
<?php
        $MovieID = $_GET['selection'];
        require 'db.class.php';
        $sth = DB::get()->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $sth = DB::get()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql ="Select * from movie where MovieID=" .$MovieID;
        $sth = DB::get()->prepare($sql);
        $sth ->execute();
          while($row = $sth->fetch())
          {
            $radio=$row["MovieID"];
            echo '<form action="" method="get" name="myForm">';
            echo '<table class ="table" border ="1">';
            echo '<tr>';
            echo '<td><input type="radio" name="MovieID" value='.$radio.'></td>';
            echo '<td><img src='.$row["Poster"].'></td>';
            echo '<td>'.$row["Title"].'</td>';

            echo '<td>'.$row["Director"].'</td>';
            echo '<td>'.$row["Rating"].'</td>';
            echo '<td>'.$row["Genre"].'</td>';
            echo '<td>'.$row["Runtime"].'</td>';
            echo '<td>'.$row["Writer"].'</td>';
            echo '<td>'.$row["Actor"].'</td>';
            echo '<td>'.$row["Country"].'</td>';
            echo '<td>'.$row["imdbID"].'</td>';

            echo '</tr>';
            echo '</table>';
      
            }
            $sth=null;


?>
