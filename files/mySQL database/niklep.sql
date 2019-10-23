-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 18.10.2019 klo 08:19
-- Palvelimen versio: 10.0.38-MariaDB-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `niklep`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `newsletter`
--

INSERT INTO `newsletter` (`id`, `name`, `email`, `city`) VALUES
(16, 'Kolmas Tyyppi', 'minun.sahkoposti@email.com', 'Oulu'),
(17, 'Toinen Jannu', 'sahkoposti@wow.com', 'Helsinki'),
(19, 'Joku Henkilö', 'testi@testi.com', 'Rovaniemi');

-- --------------------------------------------------------

--
-- Rakenne taululle `opiskelijat`
--

CREATE TABLE `opiskelijat` (
  `opiskelijaID` int(11) NOT NULL,
  `etunimi` varchar(30) DEFAULT NULL,
  `sukunimi` varchar(30) DEFAULT NULL,
  `paikkakunta` varchar(30) DEFAULT NULL,
  `maa` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `opiskelijat`
--

INSERT INTO `opiskelijat` (`opiskelijaID`, `etunimi`, `sukunimi`, `paikkakunta`, `maa`) VALUES
(1, 'Joku', 'Jamppa', 'Oulu', 'Suomi'),
(2, 'Toinen', 'Tyyppi', 'Oulu', 'Suomi'),
(3, 'Diiba', 'Daaba', 'Helsinki', 'Suomi'),
(4, 'Pentti', 'Perusmies', 'Turku', 'Suomi'),
(5, 'Pekka', 'Puupää', 'Rovaniemi', 'Suomi'),
(6, 'Testi', 'Tyyppi', 'Kittilä', 'Suomi'),
(7, 'Nimetön', 'Testi', 'Helsinki', 'Suomi'),
(9, 'Paavo', 'Pelimies', 'Kajaani', 'Suomi'),
(10, 'Mikki', 'Hiiri', 'Disneyland', 'USA'),
(11, 'Aku', 'Ankka', 'Disneyland', 'USA'),
(12, 'Niko', 'Leppänoro', 'Oulu', 'Suomi'),
(13, 'Kalle', 'Gustavson', 'Tukholma', 'Ruotsi'),
(14, 'John', 'Doe', 'California', 'USA'),
(16, 'John', 'Doe', 'California', 'USA');

-- --------------------------------------------------------

--
-- Rakenne taululle `shoutbox`
--

CREATE TABLE `shoutbox` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `message` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `shoutbox`
--

INSERT INTO `shoutbox` (`id`, `name`, `message`, `timestamp`) VALUES
(57, 'Testi', 'testi', '2019-10-14 11:30:31'),
(58, 'toinen testi', 'tekstiä tekstiä tekstiä tekstiä tekstiä tekstiä', '2019-10-14 11:35:00'),
(59, 'toinen testi', 'a   b   c   d', '2019-10-14 11:36:17'),
(60, 'Testimies', '&lt;a href=&quot;http://w3schools.com&quot;&gt;Linkki&lt;/a&gt;', '2019-10-14 12:14:43'),
(61, 'Testimies', 'https://w3schools.com', '2019-10-14 12:15:03'),
(62, 'Testi', 'Testi', '2019-10-14 12:38:23'),
(63, 'diibadaaba', 'testi', '2019-10-15 05:15:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opiskelijat`
--
ALTER TABLE `opiskelijat`
  ADD PRIMARY KEY (`opiskelijaID`);

--
-- Indexes for table `shoutbox`
--
ALTER TABLE `shoutbox`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `opiskelijat`
--
ALTER TABLE `opiskelijat`
  MODIFY `opiskelijaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `shoutbox`
--
ALTER TABLE `shoutbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
