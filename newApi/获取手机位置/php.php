 <?php 
    header("Content-Type:text/html;charset=utf-8");
    
         
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "gps";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    
     $w = $_POST['w'];
     $j = $_POST['j'];
   
        

  // // 创建连接
     
  $sql = "INSERT INTO usergps (ww, jj)  VALUES ($w, $j)";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
  ?>