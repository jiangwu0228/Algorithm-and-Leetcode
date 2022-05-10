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

-- 196. 删除重复的电子邮箱
DELETE p1 FROM Person p1, Person p2 WHERE p1.Email = p2.Email AND p1.Id > p2.Id;

-- 1667. 修复表中的名字

SELECT user_id AS 'user_id', 
CONCAT(
    UPPER(LEFT(name,1)),
    LOWER(RIGHT(name,length(name)-1))) AS 'name'
FROM Users 
ORDER BY user_id;

-- 1484. 按日期分组销售产品

SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    GROUP_CONCAT(DISTINCT product) AS products
FROM
    Activities
GROUP BY
    sell_date
ORDER BY
    sell_date

-- 1527. 患某种疾病的患者

SELECT * FROM PATIENTS
WHERE CONDITIONS REGEXP '^DIAB1|\\sDIAB1';

-- 1965. 丢失信息的雇员

SELECT employee_id FROM
(
    SELECT employee_id FROM Employees
    UNION ALL
    SELECT employee_id FROM Salaries
) AS ans
GROUP BY employee_id
HAVING COUNT(employee_id) = 1
ORDER BY employee_id;

--1795. 每个产品在不同商店的价格

select product_id, 'store1' as store, store1 as price 
from products
where store1 is not null
union all
select product_id, 'store2' as store, store2 as price
from products
where store2 is not null
union all
select product_id, 'store3' as store, store3 as price
from products
where store3 is not null

-- 608. 树节点

select 
    id, 'Root' as type
from
    tree
where
    p_id is null

union

select 
    id, 'Leaf' as type
from 
    tree
where
    id not in (select distinct
            p_id
        from
            tree
        where
            p_id is not null)
        and p_id is not null
union

select
    id, 'Inner' as type
from
    tree
where
    id in (select distinct
            p_id
        from
            tree
        where
            p_id is not null)
        and p_id is not null

order by id;