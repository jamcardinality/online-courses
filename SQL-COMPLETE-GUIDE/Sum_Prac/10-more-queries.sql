-- SELECT * FROM users
-- WHERE first_name LIKE 'MA_';

-- SELECT COUNT(id) FROM locations;

-- SELECT c.name, loc.street, count(loc.id) AS num_location FROM cities AS c
-- LEFT JOIN locations AS loc ON loc.city_name = c.name
-- GROUP BY c.name, loc.street;

SELECT c.name, count(loc.id) AS num_location FROM cities AS c
LEFT JOIN locations AS loc ON loc.city_name = c.name
GROUP BY c.name
HAVING COUNT(loc.id) > 1;
 