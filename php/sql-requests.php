<?php
$sqlMyTasks = "SELECT 
userAuthor.user_name AS author_name, 
userAuthor.user_surname AS author_surname, 
userAuthor.user_patronymic AS author_patronymic, 
t.task_id, t.task_title, t.task_desc, t.task_status, DATE_FORMAT(t.task_date_start, '%d.%m.%Y') AS task_date_start, DATE_FORMAT(t.task_date_end, '%d.%m.%Y') AS task_date_end, 
userExecutor.user_name AS executor_name, 
userExecutor.user_surname AS executor_surname, 
userExecutor.user_patronymic AS executor_patronymic
FROM tasks AS t 
JOIN tasks_author ON t.task_id = tasks_author.task_id 
JOIN users AS userAuthor ON tasks_author.user_id = userAuthor.user_id 
JOIN tasks_executor ON t.task_id = tasks_executor.task_id AND tasks_executor.user_id = '$userId' 
JOIN users AS userExecutor ON tasks_executor.user_id = userExecutor.user_id
ORDER BY task_date_add DESC";

$sqlDesignatedTask= "SELECT 
tasks_author.user_id AS author_id, 
userAuthor.user_name AS author_name, 
userAuthor.user_surname AS author_surname, 
userAuthor.user_patronymic AS author_patronymic, 
t.task_id, t.task_title, t.task_desc, t.task_status, DATE_FORMAT(t.task_date_start, '%d.%m.%Y') AS task_date_start, DATE_FORMAT(t.task_date_end, '%d.%m.%Y') AS task_date_end, 
userExecutor.user_name AS executor_name, 
userExecutor.user_surname AS executor_surname, 
userExecutor.user_patronymic AS executor_patronymic
FROM tasks AS t 
JOIN tasks_author ON t.task_id = tasks_author.task_id 
JOIN users AS userAuthor ON tasks_author.user_id = userAuthor.user_id AND tasks_author.user_id = '$userId'
JOIN tasks_executor ON t.task_id = tasks_executor.task_id AND tasks_executor.user_id != '$userId'
JOIN users AS userExecutor ON tasks_executor.user_id = userExecutor.user_id
ORDER BY task_date_add DESC";

$sqlTask= "SELECT 
tasks_author.user_id AS author_id, 
userAuthor.user_name AS author_name, 
userAuthor.user_surname AS author_surname, 
userAuthor.user_patronymic AS author_patronymic, 
t.task_id, t.task_title, t.task_desc, t.task_status, DATE_FORMAT(t.task_date_start, '%d.%m.%Y') AS task_date_start, DATE_FORMAT(t.task_date_end, '%d.%m.%Y') AS task_date_end, 
userExecutor.user_id AS executor_id, 
userExecutor.user_name AS executor_name, 
userExecutor.user_surname AS executor_surname, 
userExecutor.user_patronymic AS executor_patronymic
FROM tasks AS t 
JOIN tasks_author ON t.task_id = tasks_author.task_id 
JOIN users AS userAuthor ON tasks_author.user_id = userAuthor.user_id
JOIN tasks_executor ON t.task_id = tasks_executor.task_id
JOIN users AS userExecutor ON tasks_executor.user_id = userExecutor.user_id
WHERE t.task_id = ?";

$sqlAddUser = "INSERT INTO users (user_login, user_password, user_name, user_surname, user_patronymic) VALUES (?, ?, ?, ?, ?)";
