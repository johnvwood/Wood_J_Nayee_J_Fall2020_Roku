-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 17, 2021 at 10:49 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roku_streaming`
--

-- --------------------------------------------------------

--

-- Table structure for table `tbl_audio`
--

DROP TABLE IF EXISTS `tbl_audio`;
CREATE TABLE IF NOT EXISTS `tbl_audio` (
  `audio_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `audio_cover` varchar(75) NOT NULL,
  `audio_title` varchar(125) NOT NULL,
  `audio_year` varchar(5) NOT NULL,
  `audio_runtime` varchar(25) NOT NULL,
  `audio_artist` text NOT NULL,
  `audio_trailer` varchar(75) NOT NULL,
  PRIMARY KEY (`audio_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_audio`
--

INSERT INTO `tbl_audio` (`audio_id`, `audio_cover`, `audio_title`, `audio_year`, `audio_runtime`, `audio_artist`, `audio_trailer`) VALUES
(1, 'allnight.png', 'All Night Long (All Night)', '1983', '', 'Lionel Richie', 'allnight.mp3'),
(2, 'lonesome.jpg', 'Are You Lonesome Tonight', '1960', '', 'Elvis Presley', 'lonesome.mp3'),
(3, 'illbethere.jpg', 'I\'ll Be There', '1970', '', 'Jackson 5', 'illbethere.mp3'),
(4, 'iwant.jpg', 'I Want It That Way', '1999', '', 'Backstreet Boys', 'iwant.mp3'),
(5, 'rockaround.png', 'Rock Around The Clock', '1955', '', 'Bill Haley And The Comets', 'rockaround.mp3');


-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_release` varchar(125) NOT NULL,
  PRIMARY KEY (`movies_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`, `movies_release`) VALUES

(2, 'godfather.jpg', 'The Godfather', '1972', ' 2h 55m', 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'godfather.mp4', '24 March 1972'),
(5, 'pulp.jpg', 'Pulp Fiction', '1994', '2h 34m', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'pulp.mp4', '14 October 1994'),
(6, 'goodbad.jpg', 'The Good, the Bad and the Ugly', '1966', '2h 58m', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.', 'goodbad.mp4', '29 December 1967'),
(10, 'sunset.jpg', 'Sunset Blvd.', '1950', '1h 50m', 'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.', 'sunset.mp4', '29 September 1950'),
(16, 'bladerunner.jpg', 'Blade Runner', '1982', '1h 57m', 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.', 'bladerunner.mp4', '25 June 1982');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movieskids`
--

DROP TABLE IF EXISTS `tbl_movieskids`;
CREATE TABLE IF NOT EXISTS `tbl_movieskids` (
  `movieskids_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `movies_cover` varchar(75) NOT NULL,
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL,
  PRIMARY KEY (`movieskids_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movieskids`
--

INSERT INTO `tbl_movieskids` (`movieskids_id`, `movies_cover`, `movies_title`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`) VALUES
(1, 'peter.jpg', 'Peter Pan', '1953', '1h 17m', 'Peter Pan and his friend Tinker Bell, a fairy, whisk away siblings Wendy, John and Michael to the island of Never Land, where Captain Hook seeks vengeance against Peter for cutting off his hand.', 'peter.mp4'),
(2, '101.jpg', '101 Dalmatians', '1961', '1h 19m', 'Cruella de Vil, an evil heiress, wants to make a fur coat for herself out of the skins of a hundred and one Dalmatian puppies. She makes an effort to kidnap them by hiring a group of thugs.', '101.mp4'),
(3, 'aristo.jpg', 'The Aristocats', '1970', '1h 19m', 'A retired old lady, living a lavish life in Paris, wills all her possessions to her four cats. The greedy butler kidnaps the cats, but a bunch of retired army dogs and a stray cat stand in his way.', 'aristo.mp4'),
(4, 'totoro.jpg', 'My Neighbor Totoro', '1988', '1h 28m', 'Mei and Satsuki shift to a new house to be closer to their mother who is in the hospital. They soon become friends with Totoro, a giant rabbit-like creature who is a spirit.', 'totoro.mp4'),
(5, 'hercules.jpg', 'Hercules', '1997', '1h 33m', 'Hercules, son of the Greek god, Zeus, is turned into a half-god, half-mortal by the evil Hades. Hercules discovers his immortal heritage and Zeus tells him to return to Mount Olympus.', 'hercules.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows`
--

DROP TABLE IF EXISTS `tbl_shows`;
CREATE TABLE IF NOT EXISTS `tbl_shows` (
  `shows_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `shows_cover` varchar(50) NOT NULL,
  `shows_title` varchar(150) NOT NULL,
  `shows_year` varchar(5) NOT NULL,
  `shows_storyline` text NOT NULL,
  `shows_trailer` varchar(50) NOT NULL,
  `shows_seasons` varchar(100) NOT NULL,
  PRIMARY KEY (`shows_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows`
--

INSERT INTO `tbl_shows` (`shows_id`, `shows_cover`, `shows_title`, `shows_year`, `shows_storyline`, `shows_trailer`, `shows_seasons`) VALUES
(1, 'friends.jpg', 'Friends', '1994', 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.', 'friends.mp4', '10 Seasons'),
(2, 'knight.jpg', 'Knight Rider', '1982', 'Michael Knight is a man on a mission. Reborn, so to speak, after getting shot in the face, Knight decides to dedicate his life to fighting for justice.', 'knight.mp4', '4 Seasons'),
(3, 'kungfu.jpg', 'Kung Fu', '1972', 'Shaolin monk Caine flees China after his master is killed. Now he wanders the Old West of America, defending the helpless and beating down bad guys with his skills, all while trying to find his half-brother.', 'kungfu.mp4', '3 Seasons'),
(4, 'island.jpg', 'Gilligan\'s Island', '1964', 'Seven people from different walks of life are cast away at an unknown island after a violent storm. They adapt to their life on the island while continuously making attempts to escape.', 'island.mp4', '3 Seasons'),
(5, 'superman.jpg', 'The Adventures of Superman', '1952', 'It\'s a bird! It\'s a plane! It\'s a syndicated TV adaptation of the beloved DC Comics superhero! You know the drill: When he isn\'t fighting for truth, justice and the American way, the man in tights dons a suit and glasses for his secret identity as Daily Planet newspaper reporter Clark Kent.', 'superman.mp4', '6 Seasons');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_showskids`
--

DROP TABLE IF EXISTS `tbl_showskids`;
CREATE TABLE IF NOT EXISTS `tbl_showskids` (
  `shows_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `shows_cover` varchar(50) NOT NULL,
  `shows_title` varchar(150) NOT NULL,
  `shows_year` varchar(5) NOT NULL,
  `shows_storyline` text NOT NULL,
  `shows_trailer` varchar(50) NOT NULL,
  `shows_seasons` varchar(100) NOT NULL,
  PRIMARY KEY (`shows_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_showskids`
--

INSERT INTO `tbl_showskids` (`shows_id`, `shows_cover`, `shows_title`, `shows_year`, `shows_storyline`, `shows_trailer`, `shows_seasons`) VALUES
(1, 'archie.jpg', 'The Archie Show', '1968', 'Archie and his teenage friends have fun at Riverdale High School.', 'archie.mp4', '1 Season'),
(2, 'dennis.jpg', 'Dennis the Menace ', '1959', 'Dennis the Menace is an American sitcom based on the Hank Ketcham comic strip of the same name. It preceded The Ed Sullivan Show on Sunday evenings on CBS from October 1959 to July 1963.', 'dennis.mp4', '2 Seasons'),
(3, 'funky.jpg', 'The Funky Phantom', '1971', 'Three teenagers and their dog solve mysteries with the help of two ghosts from the 18th century.', 'funky.mp4', '1 Season'),
(4, 'once.jpg', 'Once Upon a Time... Life', '1987', 'The workings of the human body explained by animated characters.', 'once.mp4', '1 Season'),
(5, 'dexter.jpg', 'Dexter\'s Laboratory', '1995', 'Sleep tight, America! Your fate lies safely in the hands of Dexter, a child genius who whips up dazzling, world-saving inventions in his secret laboratory.', 'dexter.mp4', '4 Seasons');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_admin` tinyint(4) DEFAULT NULL,
  `user_access` tinyint(4) DEFAULT NULL,
  `user_avatar` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_admin`, `user_access`, `user_avatar`) VALUES
(1, 'Rupert', 'rupert', 'cheese', 'rat@cheese.com', '2021-04-15 01:45:14', '', 1, 1, 'rupert.jpg'),
(2, 'Samuel', 'samjackson', 'kittens52', 's@j.com', '2021-04-16 02:11:50', 'no', 0, 1, 'sam.jpg'),
(3, 'Ellen the Generous', 'ellen', '321', 'l@n.com', '2021-04-16 01:52:15', '', 0, 0, 'ellen.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
