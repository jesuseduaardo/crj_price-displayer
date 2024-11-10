-- crj.crj_product definition
CREATE TABLE IF NOT EXISTS `crj_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `enabled` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_product_attr definition
CREATE TABLE IF NOT EXISTS `crj_product_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `attribute` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `value` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_sysconf definition
CREATE TABLE IF NOT EXISTS crj.crj_sysconf (
	id INT auto_increment NOT NULL,
	`name` varchar(100) NOT NULL,
	CONSTRAINT crj_sysconf_pk PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_sysconfig_attr definition
CREATE TABLE IF NOT EXISTS crj.crj_sysconfig_attr (
    `id` int(11) NOT NULL AUTO_INCREMENT,
	`config_id` int(11) NOT NULL,
	`attribute` varchar(100) NOT NULL,
	`value` varchar(100) NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_view definition
CREATE TABLE IF NOT EXISTS `crj_view` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `parent` int(11) DEFAULT 0,
  `active` tinyint(1) DEFAULT 0,
  `enabled` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_view_attr definition
CREATE TABLE IF NOT EXISTS `crj_view_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `view_id` int(11) NOT NULL,
  `attribute` varchar(100) NOT NULL,
  `value` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- crj.crj_view_ele definition
CREATE TABLE IF NOT EXISTS `crj_view_ele` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `view_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
