# 595. 大的国家

SELECT name, population, area FROM World WHERE population >= 25000000 OR area >= 3000000;

SELECT name, population, area FROM World WHERE population >= 25000000 UNION SELECT name, population, area FROM world WHERE area >= 3000000;

#1757. 可回收且低脂的产品

SELECT product_id FROM Products WHERE recyclable = 'Y' and low_fats = 'Y';

# 584. 寻找用户推荐人

SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL;