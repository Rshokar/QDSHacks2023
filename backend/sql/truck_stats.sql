CREATE TABLE truck_stats_04_07
(
avg_fuel FLOAT,
payload FLOAT,
round_time FLOAT,
TRUCK_ID INT,
SHOVEL_ID INT,
DUMP_ID INT,
LOAD_DATE DATE,
TRUCK_TYPE_ID INT
)

DECLARE @counter INT
SET @counter = 0
WHILE (@counter <= 70)
BEGIN
WITH 
initial
AS
(
SELECT 
	TIMESTAMP
	, LOAD_DATE
	, LOAD_TIME
	, GPSNORTHING
	, GPSEASTING
	, GPSELEVATION
	, FUEL_RATE
	, STATUS
	, PAYLOAD
	, TRUCK_ID
	, TRUCK_TYPE_ID
	, SHOVEL_ID
	, DUMP_ID
FROM data_group0_converted
WHERE 
TRUCK_ID = @counter
AND 
LOAD_DATE = '2022-04-07'  
AND SHOVEL_ID = 6 AND DUMP_ID = 9
)

,load_time
AS (
SELECT
	MIN(LOAD_TIME) AS start_time
	, TRUCK_ID
FROM initial
WHERE STATUS = 'Queue At LU'
GROUP BY TRUCK_ID, LOAD_DATE
)
--SELECT * FROM load_time

,dump_time
AS (
SELECT
	MIN(LOAD_TIME) AS end_time
	, TRUCK_ID
FROM initial
WHERE STATUS = 'Dumping'
GROUP BY TRUCK_ID, LOAD_DATE
)
--SELECT * FROM dump_time

--,times


,fuel_payload
AS (
SELECT 
	AVG(FUEL_RATE) AS avg_fuel
	, MAX(PAYLOAD) AS payload
	, CAST(DATEDIFF(MINUTE, start_time, end_time)AS FLOAT)/60 AS round_time
	, a.TRUCK_ID
	, SHOVEL_ID
	, DUMP_ID
	, LOAD_DATE
	, TRUCK_TYPE_ID
FROM initial a
	INNER JOIN load_time b ON a.TRUCK_ID = b.TRUCK_ID AND LOAD_TIME BETWEEN (SELECT start_time  FROM load_time) AND (SELECT end_time FROM dump_time)
	INNER JOIN dump_time c ON a.TRUCK_ID = c.TRUCK_ID AND LOAD_TIME BETWEEN (SELECT start_time  FROM load_time) AND (SELECT end_time FROM dump_time)
WHERE FUEL_RATE <> 0 AND PAYLOAD <> 0
GROUP BY a.TRUCK_ID
	, SHOVEL_ID
	, DUMP_ID
	, LOAD_DATE, start_time, end_time, TRUCK_TYPE_ID
)
INSERT INTO truck_stats_04_07
SELECT * FROM fuel_payload 
SET @counter = @counter + 1
END