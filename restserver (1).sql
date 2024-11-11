-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-10-2024 a las 21:53:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restserver`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'Admin'),
(2, 'Tecnico'),
(3, 'Agente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `img` varchar(250) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `google` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasena`, `img`, `rol`, `estado`, `google`) VALUES
(1, 'diego', 'srGuante56@gmail.com', '123456', 's', 'Admin', 'Activo', 'si'),
(16, 'Ares', 'ares@gmail.com', '$2a$10$yCOQp7gCXq3RS967zzKASezMqKANk1eudPc5BddkPJp', 's', 'Admin', 'Inactivo', 'false'),
(17, 'Atenea', 'atenea@gmail.com', '$2a$10$1dx1xwccXIjVTTVbUW2GheN.xjiAaQ.KHoTHRB0knkI', 's', 'Admin', 'Inactivo', 'false'),
(18, 'Zeus', 'zeus@gmail.com', '$2a$10$PSqL1YPR3DXneFJXcm7Bi./xKDSAyniMs2ywnipNcXu', 's', 'Admin', 'Inactivo', 'false'),
(19, 'Hades', 'hades@gmail.com', '$2a$10$33c97cRyYLD9rap9UQSBE.njZt86h1mzRBdygM9ZKMI', 's', 'Admin', 'Activo', 'false'),
(20, 'Poseidon', 'poseidon@gmail.com', '$2a$10$/KZWtD7VW1ucFYYvRTWgCuautvaO9QuQdDBm82F9jPW', 's', 'Admin', 'Activo', 'false'),
(21, 'Hermes', 'hermes@gmail.com', '$2a$10$t4pRH4fQsiSdYEZAQ60SF./fA.XRQOSClAz1VkwxH/h', 's', 'Admin', 'Activo', 'false'),
(22, 'Apolo', 'apolo@gmail.com', '$2a$10$iBfe21rA5u7pd/4xP9ruiuLI6akg93GWiY4rmjbppFy', 's', 'Admin', 'Activo', 'false'),
(23, 'Persefone', 'persefone@gmail.com', '$2a$10$kd3XHDQ7/BXPb7RQhXYCt.dWC9exJrH7ilM6XwK0ACr', 's', 'Admin', 'Activo', 'false'),
(24, 'Hera', 'hera@gmail.com', '$2a$10$J8ST6YIoepdQkXqa.lBri.2saIQYisD77Pc0/MSeJph', 's', 'Admin', 'Activo', 'false');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
