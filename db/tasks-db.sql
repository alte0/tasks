-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 03 2019 г., 13:48
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `tasks-db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `task_title` varchar(255) NOT NULL,
  `task_desc` varchar(255) NOT NULL,
  `task_status` varchar(20) NOT NULL,
  `task_date_start` date NOT NULL,
  `task_date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`task_id`, `task_title`, `task_desc`, `task_status`, `task_date_start`, `task_date_end`) VALUES
(1, 'Заголовок задачи', 'Дополнительная информация по задаче', 'в работе', '2019-07-03', '2019-07-04'),
(3, 'Заголовок задачи', 'Дополнительная информация по задаче', 'в работе', '2019-07-06', '2019-07-11'),
(4, 'Заголовок задачи', 'Дополнительная информация по задаче', 'в работе', '2019-07-03', '2019-07-05');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_author`
--

CREATE TABLE `tasks_author` (
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks_author`
--

INSERT INTO `tasks_author` (`user_id`, `task_id`) VALUES
(1, 1),
(1, 3),
(1, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_executor`
--

CREATE TABLE `tasks_executor` (
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks_executor`
--

INSERT INTO `tasks_executor` (`user_id`, `task_id`) VALUES
(2, 1),
(2, 3),
(1, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `user_login` varchar(20) NOT NULL,
  `user_password` varchar(60) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_surname` varchar(20) NOT NULL,
  `user_patronymic` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `user_login`, `user_password`, `user_name`, `user_surname`, `user_patronymic`) VALUES
(1, 'test', '$2y$10$BRVINB37l19DKnKZaIf8HuffY1uu0dX0ovUhNuQn3IDGijgQygOD6', 'test', 'test-test', 'test-test-test'),
(2, 'test2', '$2y$10$RWbnZhKuFgXchhhx6begTOsKT9B7VTH1g0lXqa0gwwCTomuwPbulK', 'test2', 'test2-test2', 'test2-test2-test2');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`);

--
-- Индексы таблицы `tasks_author`
--
ALTER TABLE `tasks_author`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `task_id` (`task_id`);

--
-- Индексы таблицы `tasks_executor`
--
ALTER TABLE `tasks_executor`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `task_id` (`task_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tasks_author`
--
ALTER TABLE `tasks_author`
  ADD CONSTRAINT `task_id_author` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_author_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Ограничения внешнего ключа таблицы `tasks_executor`
--
ALTER TABLE `tasks_executor`
  ADD CONSTRAINT `task_id_executor` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_executor_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
