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

-- 176. 第二高的薪水

select
    (select distinct
        salary
    from
        employee
    order by salary desc
    limit 1 offset 1) as SecondHighestSalary;

-- 175. 组合两个表

select FirstName, LastName, City, State
from Person left join Address
on Person.PersonId = Address.PersonId;

-- 1581. 进店却未进行过交易的顾客

select customer_id, count(customer_id) as count_no_trans
from Visits
where visit_id not in (
    select visit_id
    from Transactions
    group by visit_id
)
group by customer_id;

-- 1148. 文章浏览 I

select distinct author_id as id
from Views
where author_id = viewer_id
order by author_id;

-- 197. 上升的温度

SELECT w2.Id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w2.RecordDate, w1.RecordDate) = 1
AND w1.Temperature < w2.Temperature

-- 607. 销售员

SELECT 
    name
FROM
    salesperson
WHERE 
    sales_id not in (
SELECT
    o.sales_id
FROM
    orders o
LEFT JOIN
    company c ON o.com_id = c.com_id
WHERE
    c.name = 'RED'
);

-- 1141. 查询近30天活跃用户数

select activity_date day, count(distinct user_id) active_users
from activity
where datediff('2019-07-27', activity_date) >= 0 AND datediff('2019-07-27', activity_date) <30
group by activity_date


-- 1693. 每天的领导和合伙人

select date_id,make_name,count(DISTINCT lead_id) as unique_leads,
                         count(DISTINCT partner_id) as unique_partners 
from DailySales
group by date_id,make_name
order by date_id

-- 1729. 求关注者的数量

select 
    user_id, COUNT(*) followers_count
from 
    followers
 group by user_id
 order by user_id;

-- 586. 订单最多的客户
select customer_number
from orders
group by customer_number
order by count(*) desc
limit 1;

-- 511. 游戏玩法分析 I
select 
    player_id,
    min(event_date) first_login
from activity
group by player_id;

-- 1890. 2020年最后一次登录

select user_id, max(time_stamp) last_stamp
from logins
where year(time_stamp) = 2020
group by user_id;

-- 1741. 查找每个员工花费的总时间
select event_day as day, emp_id, sum(out_time-in_time) as total_time
from Employees
group by emp_id, event_day

-- 1393. 股票的资本损益
select stock_name,
    sum(
        case operation when 'sell' # 卖出
        then price else -price #返回收益，
        end
    ) as capital_gain_loss
from stock
group by stock_name;