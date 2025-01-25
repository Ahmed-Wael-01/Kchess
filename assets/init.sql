-- initiate the database schema
CREATE DATABASE IF NOT EXISTS Kchess;

USE Kchess;

CREATE TABLE IF NOT EXISTS players(
	id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
	fname varchar(50),
	lname varchar(50),
	nickname varchar(50),
	email varchar(100),
	password varchar(100),
	country varchar(50),
	bio varchar(255),
	gender ENUM('other', 'male', 'female'),
	birth_date DATE
);

CREATE TABLE IF NOT EXISTS matchs(
	id INT AUTO_INCREMENT UNIQUE,
	white_id INT NOT NULL,
	black_id INT NOT NULL,
	result ENUM('white', 'black', 'draw'),
	match_date DATETIME,
	FOREIGN KEY(white_id) REFERENCES players(id),
	FOREIGN KEY(black_id) REFERENCES players(id)
);
