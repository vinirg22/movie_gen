DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE users (
 id Int( 11 ) AUTO_INCREMENT NOT NULL,
 user_name VARCHAR( 255) NOT NULL,
 fav_genre VARCHAR( 255) NOT NULL,

 PRIMARY KEY ( id )

);