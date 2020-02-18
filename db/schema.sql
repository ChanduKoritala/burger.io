create database `burgers_db`;

use `burgers_db`;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Chicken-Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ham-Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Beef-Burger', true);