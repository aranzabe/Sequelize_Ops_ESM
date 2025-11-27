-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-11-2025 a las 13:58:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejemMigSeedNode_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comentario` varchar(255) DEFAULT NULL,
  `puntuacion` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `comentario`, `puntuacion`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Deberías pasármela más, Michael', '4', 2, '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(2, 'Es que soy un poco chupón...', '5', 1, '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(3, 'Que jugamos los 5!!!! Un poco de por favor.', '2', 2, '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(4, 'Pero pasa un poco hombre!', '3', 4, '2025-01-15 17:17:37', '2025-01-15 17:17:37'),
(5, 'Que no! Que paso de pasar!', '1', 1, '2025-01-15 17:17:37', '2025-01-15 17:17:37'),
(6, 'Sabéis qué? Que paso de vosotros!', '3', 1, '2025-01-15 17:19:07', '2025-01-15 17:19:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240113185815-create-user.cjs'),
('20240113190652-create-comments.cjs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Michael', 'Jordan', 'Catalina.BonillaSolorio74@gmail.com', '$2b$10$hY/6hco.Xltd.UNteoaj9uiAieNKTVx5w8uzmx3kqpgWsishDLEkK', '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(2, 'Laura', 'Ávalos Valenzuela', 'Barbara10@yahoo.com', '$2b$10$nKGAZcgah7dnXXJw0ebyTeZslsftozY/TbY7ZnrbLuDLQEz1cUiIG', '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(3, 'Daniela', 'Bañuelos Aponte', 'Elisa_RamosMena25@hotmail.com', '$2b$10$jxHzYCYLH2OkjPCxXkM0S.8NhNk/rbiLPJieiyxsZU.MmgybNnTvu', '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(4, 'Daniel', 'Banda Cantú', 'Elena.BarajasLucio98@hotmail.com', '$2b$10$8WavuIr6sJWHifnk29Bib.G4zDDlZCLXhCNitCN2lkVbQKV72O3V6', '2025-01-13 22:25:20', '2025-01-13 22:25:20'),
(5, 'Lucas', 'Grijander', 'lucas25@grijander.com', NULL, '2025-01-15 16:13:55', '2025-01-15 16:13:55'),
(7, 'Cynthia', 'Grijander', 'lucas25@grijander.com', NULL, '2025-01-16 11:23:12', '2025-01-16 11:23:12'),
(8, 'Lucas', 'Grijander', 'lucas25@grijander.com', NULL, '2025-11-26 21:02:15', '2025-11-26 21:02:15'),
(9, 'Lucas', 'Grijander', 'lucas25@grijander.com', NULL, '2025-11-26 21:02:18', '2025-11-26 21:02:18'),
(10, 'Lucas', 'Grijander', 'lucas25@grijander.com', NULL, '2025-11-27 08:57:13', '2025-11-27 08:57:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
