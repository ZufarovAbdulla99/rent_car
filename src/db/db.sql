 CREATE DATABASE rent_car;

\c rent_car;

CREATE TABLE category(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    description VARCHAR(255)
);

CREATE TABLE car(
    VIN VARCHAR(7) PRIMARY KEY NOT NULL,
    description VARCHAR(255),
    color VARCHAR(50),
    brand VARCHAR(50),
    model VARCHAR(50),
    purchase_date DATE,
    category_id INT
);

INSERT INTO category (name, description) VALUES
('Compact', 'Sedan-type car with 5 doors'),
('Convertible', 'The roof of the car is retractable, hard-top or soft-top'),
('Jeep', '4X4, tall vehicle, usually suitable for off-road conditions'),
('Luxury', 'Long town car, usually used for professional chauffer services'),
('SUV', 'A mix between a sedan and a Jeep, medium-to-tall height, suitable for both city and off-road conditions'),
('Hatchback', 'Small car, with a  flat back-side, usually suitable for low consumption and convenient parking'),
('Pickup', 'Pickup truck, with a large open or closed trunk, suitable for personal or professional use');

INSERT INTO car (VIN, description, color, brand, model, category_id, purchase_date) VALUES
('ZTY4567', 'Convertible with hardtop, leather seats and CD player', 'Silver', 'Mercedes-Benz', 'SLK200', 2, '2007-02-08'),
('ATB2646', 'Professional and good-looking, full-extra', 'Blue', 'BMW', '1601', 1, '2012-08-01'),
('IKP3998', 'Stylish and eye-catching, with GPS', 'Red', 'Suzuki', 'Swift', 6, '2013-12-09'),
('IKA8788', 'Low consumption and convenience, hybrid, with GPS', 'Silver', 'Toyota', 'Auris', 6, '2016-11-01'),
('IBN1220', 'Luxurious and business-ready, leather seats, cruise control', 'Black', 'BMW', '5201', 1, '2005-03-10'),
('IPK1002', 'Easy handling, automatic, parking assistant', 'Blue', 'Opel', 'Corsa', 6, '2011-11-17'),
('KMX3344', 'Eye-catching and elegant, 360 parking assistant, bluetooth', 'White', 'Nissan', 'Juke', 5, '2016-02-01'),
('P009821', 'Convenience and off-road capabilities, leather seats, CD player', 'Orange', 'Nissan', 'Navara', 7, '2014-10-23'),
('IBN5786', 'Luxurious and business-ready', 'Black', 'Mercedes-Benz', 'S500', 4, '2010-08-06'),
('YKR3668', 'Hybrid, convenience, parking assistant, bluetooth', 'Red', 'Toyota', 'Auris', 6, '2017-06-06'),
('ZMP1210', 'Low consumption with 5 doors, CD player', 'Red', 'Toyota', 'Yaris', 6, '2013-01-10'),
('IKP2221', 'Parking assistant, 5 doors, automatic', 'Red', 'Opel', 'Corsa', 6, '2011-08-12'),
('IBT4312', '4X4 with up to 9 seats and off-road capatilities', 'Red', 'Jeep', 'Grand Cherokee', 3, '2009-01-10'),
('PIK5665', 'Limousine with up to 9 luxurious leather seats and bar', 'Red', 'Lincoln', 'Town Car', 4, '2004-04-17');