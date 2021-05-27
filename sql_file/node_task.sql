-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 03:44 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `is_deleted`) VALUES
(3, 'mobiles', 0),
(4, 'laptops', 0),
(23, 'table', 23),
(24, 'aa', 24),
(25, 'a', 25),
(26, 'demo', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `name`, `is_deleted`) VALUES
(1, 3, 'asus', 0),
(2, 4, 'hp', 0),
(3, 4, 'sanket', 1),
(4, 3, 'sasa', 1),
(5, 3, 'sa', 0),
(6, 3, '1', 0),
(7, 4, 'sa', 0),
(8, 4, 'ad', 0),
(9, 4, 'sf', 0),
(10, 4, 'dsf', 0),
(11, 3, 'sdf', 0),
(12, 4, 'dsfsdf', 0),
(13, 3, 'dfss', 0),
(14, 3, 'dsfdsf', 0),
(15, 3, 'sdf', 0),
(16, 4, 'sdf', 0),
(17, 4, 'sdf', 0),
(18, 4, 'sdf', 0),
(19, 4, 'sdf', 0),
(20, 3, 'sdff', 0),
(21, 3, 'fgh', 0),
(22, 4, 'dfg', 0),
(23, 3, 'fd', 0),
(24, 3, 'dfg', 0),
(25, 4, 'dfg', 0),
(26, 26, 'fb', 0),
(27, 3, 'df', 0),
(28, 3, 'sada', 0),
(29, 3, 'sad', 0),
(30, 3, 'asdds', 0),
(31, 3, 'sdf', 0),
(32, 3, 'sdf', 0),
(33, 26, 'sdf', 1),
(34, 3, 'sdfdsdf', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
