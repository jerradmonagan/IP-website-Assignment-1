<?php
class DB
{
   private static $instance = null;
   public static function get()
   {
      $config = parse_ini_file('D:\xampp\htdocs\database.ini');
       if(self::$instance == null)
       {
           try
           {
               self::$instance = new PDO('mysql:host=localhost;dbname='.$config['db'], $config['username'], $config['password']);
           }
           catch(PDOException $e)
           {
               // Handle this properly
               throw $e;
           }
       }
       return self::$instance;
   }
}
