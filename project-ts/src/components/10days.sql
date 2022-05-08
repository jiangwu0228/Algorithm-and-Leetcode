-- # 595. 大的国家

SELECT name, population, area FROM World WHERE population >= 25000000 OR area >= 3000000;

SELECT name, population, area FROM World WHERE population >= 25000000 UNION SELECT name, population, area FROM world WHERE area >= 3000000;

-- # 1757. 可回收且低脂的产品

SELECT product_id FROM Products WHERE recyclable = 'Y' and low_fats = 'Y';

-- # 584. 寻找用户推荐人

SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL;

-- # 183. 从不订购的客户

SELECT Customers.name as 'Customers'
FROM Customers
WHERE Customers.id NOT IN 
(
    SELECT customerId FROM Orders
);

-- 1873. 计算特殊奖金
SELECT employee_id, if(employee_id % 2 = 0 OR name like 'M%', 0, salary) as bonus FROM Employees;


-- 627. 变更性别

UPDATE salary
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;

UPDATE salary
SET
    sex = if(sex = 'm', 'f', 'm');