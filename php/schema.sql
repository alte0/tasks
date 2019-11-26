CREATE DATABASE `tasks-db` 
  DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `tasks-db`;

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_login` varchar(20) NOT NULL,
  `user_password` varchar(60) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_surname` varchar(20) NOT NULL,
  `user_patronymic` varchar(20) NOT NULL,
  `user_date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) 
	ENGINE=InnoDB 
	DEFAULT CHARSET=utf8
	COMMENT = 'Таблица пользователей';

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `task_title` varchar(255) NOT NULL,
  `task_desc` varchar(1000) NOT NULL,
  `task_status` varchar(20) NOT NULL,
  `task_date_start` date NOT NULL,
  `task_date_end` date NOT NULL,
  `task_date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX(`task_title`),
  INDEX(`task_desc`),
  FULLTEXT (`task_title`, `task_desc`)
) 
	ENGINE=InnoDB 
	DEFAULT CHARSET=utf8
	COMMENT = 'Таблица задач';

CREATE TABLE `tasks_author` (
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (task_id) REFERENCES tasks (task_id)
) 
	ENGINE=InnoDB
	DEFAULT CHARSET=utf8
	COMMENT = 'Таблица авторов';

CREATE TABLE `tasks_executor` (
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (task_id) REFERENCES tasks (task_id)
) 
	ENGINE=InnoDB 
	DEFAULT CHARSET=utf8
	COMMENT = 'Таблица исполнителей';

