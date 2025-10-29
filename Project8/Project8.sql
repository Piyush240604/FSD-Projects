-- DDL Commands

-- CREATE TABLES
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    Age INT
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Department VARCHAR(50),
    City VARCHAR(50)
);

-- ALTER TABLE
ALTER TABLE Customer ADD Email VARCHAR(100);

-- TRUNCATE TABLE
TRUNCATE TABLE Customer;

-- DROP TABLE (example, comment out when not needed)
-- DROP TABLE Customer;


-- DML Commands

-- INSERT DATA
INSERT INTO Customer (CustomerID, CustomerName, City, Age, Email)
VALUES (1, 'Ravi Kumar', 'Delhi', 30, 'ravi@example.com'),
       (2, 'Priya Singh', 'Mumbai', 25, 'priya@example.com'),
       (3, 'Amit Patel', 'Chennai', 28, 'amit@example.com');

INSERT INTO Employee (EmployeeID, EmployeeName, Department, City)
VALUES (101, 'Anil Sharma', 'Sales', 'Delhi'),
       (102, 'Neha Verma', 'HR', 'Mumbai'),
       (103, 'Suresh Nair', 'IT', 'Bangalore');

-- SELECT
SELECT * FROM Customer;
SELECT * FROM Employee;

-- UPDATE
UPDATE Customer SET City = 'Pune' WHERE CustomerID = 3;

-- DELETE
DELETE FROM Customer WHERE CustomerID = 2;


-- DCL Commands

-- GRANT
GRANT SELECT, INSERT ON Customer TO user_name;

-- REVOKE
REVOKE INSERT ON Customer FROM user_name;


-- TCL Commands

BEGIN;
INSERT INTO Customer (CustomerID, CustomerName, City, Age, Email)
VALUES (4, 'Meena Rao', 'Hyderabad', 32, 'meena@example.com');

SAVEPOINT sp1;

UPDATE Customer SET City = 'Kolkata' WHERE CustomerID = 4;

ROLLBACK TO sp1;

COMMIT;


-- JOINS

-- INNER JOIN
SELECT Customer.CustomerName, Employee.EmployeeName, Customer.City
FROM Customer
INNER JOIN Employee ON Customer.City = Employee.City;

-- LEFT JOIN
SELECT Customer.CustomerName, Employee.EmployeeName, Customer.City
FROM Customer
LEFT JOIN Employee ON Customer.City = Employee.City;

-- RIGHT JOIN
SELECT Customer.CustomerName, Employee.EmployeeName, Customer.City
FROM Customer
RIGHT JOIN Employee ON Customer.City = Employee.City;

-- FULL OUTER JOIN
SELECT Customer.CustomerName, Employee.EmployeeName, Customer.City
FROM Customer
FULL OUTER JOIN Employee ON Customer.City = Employee.City;


-- UNION, UNION ALL, INTERSECT, MINUS

-- UNION
SELECT City FROM Customer
UNION
SELECT City FROM Employee;

-- UNION ALL
SELECT City FROM Customer
UNION ALL
SELECT City FROM Employee;

-- INTERSECT
SELECT City FROM Customer
INTERSECT
SELECT City FROM Employee;

-- MINUS (or EXCEPT in some SQL dialects)
SELECT City FROM Customer
MINUS
SELECT City FROM Employee;