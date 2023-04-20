CREATE DATABASE IF NOT EXISTS login;

USE login;

/*Table structure for table users */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
	UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE
);

/*Data for the table users */

-- insert into users(id,username,email,password) values (1,'qwe','qwe@qwe.ca','qwer');

-- SELECT * FROM login.users;