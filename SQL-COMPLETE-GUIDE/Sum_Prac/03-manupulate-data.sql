-- INSERT INTO events (
--     name,
--     date_planned,
--     description,
--     max_participants,
--     min_age
--     )
-- VALUES (
--         'A First Event',
--         '2022-10-29 16:30:00',
--         'This is the decription of first event.',
--         20,
--         18
--     ),
--     (
--         'A Second Event',
--         '2022-05-10 12:30:00',
--         'This is the decription of second event.',
--         10,
--         22
--     );

UPDATE events
SET min_age = 16
WHERE id = 1;

DELETE FROM events
WHERE id = 1;
