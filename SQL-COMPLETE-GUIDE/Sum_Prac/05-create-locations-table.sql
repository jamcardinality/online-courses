CREATE TABLE cities (
    name VARCHAR(200) PRIMARY KEY
);

CREATE TABLE locations (
    id INT PRIMARY key AUTO_INCREMENT, --MySQL
    id SERIAL PRIMARY KEY, --Postgres
    title VARCHAR(300),
    street VARCHAR(300) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    postal_id VARCHAR(5) NOT NULL,
    city_name VARCHAR(200) REFERENCES cities ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE users (
   -- id INT PRIMARY KEY AUTO_INCREMENT, --MySQL
    id SERIAL PRIMARY KEY, --Postgres
    first_name VARCHAR(300) NOT NULL,
    last_name VARCHAR(300 NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(300) NOT NULL
);

CREATE TABLE organizers (
    password VARCHAR(500) NOT NULL,
    user_id INT PRIMARY KEY REFERENCES users ON DELETE CASCADE
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT, -- MySQL
    -- id SERIAL PRIMARY KEY, -- Postgresl
    name VARCHAR(300) NOT NULL CHECK (LENGTH(name) > 5),
    date_planned TIMESTAMP NOT NULL,
    image VARCHAR(300),
    description TEXT NOT NULL,
    max_participants INT CHECK (max_participants > 0),
    min_age INT CHECK (min_age > 0),
    location_id INT REFERENCES locations ON DELETE CASCADE,
    organizer_id INT REFERENCES organizers ON DELETE CASCADE  
);


