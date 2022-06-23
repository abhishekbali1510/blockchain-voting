<?php
     
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        
    // Folder Path For Ubuntu
    // $folderPath = "/var/www/my-app/uploads";
    // Folder Path For Window
    $folderPath = "./voterPic/";
    
    $file_tmp = $_FILES['file']['tmp_name'];
    $file_ext = strtolower(end(explode('.',$_FILES['file']['name'])));
    $file = $folderPath . $_POST['name'].'.'.$file_ext;
    move_uploaded_file($file_tmp, $file);
    
    return json_encode(['status'=>true]);

?>