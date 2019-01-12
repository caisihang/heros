/*
Navicat MySQL Data Transfer

Source Server         : mytable
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : hero

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-01-12 19:38:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hero
-- ----------------------------
DROP TABLE IF EXISTS `hero`;
CREATE TABLE `hero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `ctime` varchar(255) DEFAULT NULL,
  `isdel` tinyint(255) DEFAULT '0' COMMENT '是否被删除 0 表示未删除；1 表示已经被删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hero
-- ----------------------------
INSERT INTO `hero` VALUES ('1', '亚瑟', '男', '2019-01-01 12:12:12', '0');
INSERT INTO `hero` VALUES ('3', '小乔', '女', '2019-01-12 15:26:54', '0');
INSERT INTO `hero` VALUES ('16', '貂蝉', '女', '2019-01-12 19:33:12', '1');
